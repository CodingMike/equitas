import React, { useState, useEffect, useCallback } from 'react';
import './App.css';
import { Container, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Launches from './components/Launches';
import TotalLaunches from './components/TotalLaunches';
import PaginationContainer from './components/PaginationContainer/PaginationContainer';

function App() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const theme = useTheme();
  const isSmallerScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const fetchData = useCallback(async (pageNumber) => {
    const apiUrl = 'https://api.spacexdata.com/v4/launches/query';
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(getQueryBody(pageNumber)),
      });

      if (!response.ok) {
        console.log('Network response was not ok');
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, []);

  function getQueryBody(pageNumber) {
    return {
      query: {
        upcoming: false,
        success: true,
      },
      options: {
        page: pageNumber,
        select: {
          id: 1,
          name: 2,
          links: 3,
          date_utc: 4,
          flight_number: 5,
        },
        populate: [
          {
            path: 'rocket',
            select: {
              id: 1,
              name: 2,
              type: 3,
              description: 4,
              height: 5,
              diameter: 6,
              mass: 7,
              flickr_images: 8,
            },
          },
          {
            path: 'crew',
            select: {
              id: 1,
              name: 2,
              agency: 3,
              image: 4,
            },
          },
          {
            path: 'payloads',
            select: {
              id: 1,
              name: 2,
              type: 3,
              orbit: 4,
              reference_system: 5,
              regime: 6,
            },
          },
          {
            path: 'capsules',
            select: {
              id: 1,
              type: 2,
              status: 3,
              serial: 4,
            },
          },
          {
            path: 'launchpad',
            select: {
              id: 1,
              name: 2,
              full_name: 3,
              locality: 4,
              region: 5,
              latitude: 6,
              longitude: 7,
              details: 8,
            },
          },
        ],
        sort: {
          flight_number: 'desc',
        },
      },
    };
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, fetchData]);

  return (
    <div className="app-container">
      <Container className={`fade-in ${data['docs'] ? 'active' : ''}`}>
        <TotalLaunches
          totalDocs={data['totalDocs']}
          isSmallerScreen={isSmallerScreen}
        />
        {data['docs'] ? (
          <Launches launches={data['docs']} />
        ) : (
          <div data-testid="loading-message">Loading...</div>
        )}
        <PaginationContainer
          totalPages={data['totalPages']}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </Container>
    </div>
  );
}

export default App;
