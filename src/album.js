import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const styles = {
    card: {
      maxWidth: 150,
    },
    media: {
      height: 150,
    },
  };
  
  function Album(props) {
    const { classes } = props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.thumbnailUrl}
            title={props.album.title}
          />
          <CardContent>
            <Typography gutterBottom variant="subtitle1" >
            {props.album.title}
            </Typography>            
          </CardContent>
        </CardActionArea>        
      </Card>
    );
  }
  
  Album.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Album);

