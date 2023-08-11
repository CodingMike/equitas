import React, { useRef, useEffect } from 'react';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import styles from './TotalLaunches.module.css';

const TotalLaunches = ({ totalDocs }) => {
  const launchCountRef = useRef(null);

  useEffect(() => {
    const launchCountElement = launchCountRef.current;

    if (launchCountElement && totalDocs) {
      const launchCount = totalDocs;
      const duration = 3000;
      const increment = launchCount / (duration / 10);
      let currentCount = 0;

      const updateCount = () => {
        if (currentCount <= launchCount) {
          launchCountElement.textContent = `Total Launches: ${Math.floor(
            currentCount
          ).toLocaleString()}`;
          currentCount += increment;
        } else {
          launchCountElement.textContent = `Total Launches: ${launchCount.toLocaleString()}`;
          clearInterval(intervalId);
        }
      };

      const intervalId = setInterval(updateCount, 10);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [totalDocs]);

  return (
    <div className={styles['total-launches-container']}>
      <RocketLaunchIcon
        className={styles['launch-icon']}
        style={{ color: '#FFBF00' }}
        fontSize="large"
      />
      <p
        className={styles['total-launches']}
        ref={launchCountRef}
        data-testid="launchCount"
      >
        {totalDocs ? Math.floor(totalDocs).toLocaleString() : 'Loading...'}
      </p>
      <RocketLaunchIcon
        className={styles['launch-icon']}
        style={{ color: '#FFBF00' }}
        fontSize="large"
      />
    </div>
  );
};

export default TotalLaunches;
