import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const PaginationContainer = ({ totalPages, currentPage, onPageChange }) => (
  <div className="Pagination">
    <p>
      Page {currentPage} / {totalPages}
    </p>
    <Stack spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        renderItem={(item) => {
          if (item.type === 'previous') {
            return (
              <PaginationItem
                icon={<ArrowBackIcon />}
                disabled={currentPage === 1}
                data-testid="previous-button"
                {...item}
              />
            );
          }
          if (item.type === 'next') {
            return (
              <PaginationItem
                icon={<ArrowForwardIcon />}
                className="pagination"
                disabled={currentPage === totalPages}
                data-testid="next-button"
                {...item}
              />
            );
          }
          return <PaginationItem {...item} />;
        }}
      />
    </Stack>
  </div>
);

export default PaginationContainer;
