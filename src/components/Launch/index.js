import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment';
import styles from './launch.module.css';

const Launch = ({ launch }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={styles.launchContainer}>
      <CardHeader title={launch.name} className={styles.launchHeader} />
      <CardMedia
        component="img"
        className={styles.launchMedia}
        style={{ height: '150px', width: '150px', objectFit: 'scale-down' }}
        image={launch.links.patch.small}
        alt={launch.name}
      />
      <CardActions disableSpacing>
        <span variant="body2" className={styles.moreInfoText}>
          More info
        </span>
        <IconButton aria-label="expand" onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" className={styles.launchInfo}>
            {' '}
            <b>Flight Number: </b>
            {launch.flight_number}
          </Typography>
          <Typography variant="body2" className={styles.launchInfo}>
            <b>Launch Date:</b>{' '}
            {moment(launch.date_utc).format('MMMM Do YYYY, h:mm:ss a')}
          </Typography>
          <Typography variant="body2" className={styles.launchInfo}>
            <b>Rocket:</b> {launch.rocket.name}
          </Typography>
          <Typography variant="body2" className={styles.launchDescription}>
            <b>Description:</b> {launch.rocket.description}
          </Typography>
          <Typography variant="body2" className={styles.launchInfo}>
            <b>ID:</b> {launch.rocket.id}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Launch;
