import { Grid } from '@mui/material';
import Launch from '../Launch';
import styles from './launches.module.css';

const Launches = ({ launches }) => {
  return (
    <Grid container spacing={6} className="containerLaunches">
      {launches.map((launch) => (
        <Grid key={launch.id} item xs={4}>
          <p className={styles.page}>
            <Launch launch={launch} />{' '}
          </p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Launches;
