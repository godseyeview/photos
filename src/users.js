import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import axios from 'axios';
import Album from './album';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  },
});

class Users extends React.Component {
 
  state = {    
    albums: [],
    albumPhotos: [],
    thumbnailUrls: []
  };

  handleAlbumChange = userId => {
    let albums = [];
    let albumPhotos = [];
    let photos = [];
    let thumbnailUrls = [];
    this.props.albums.map(album => {
      if (userId === album.userId) {
        albums.push(album);
      }
      let thumbnailUrl = this.props.photos.find(photo => {
        return photo.albumId === album.id;
      }).thumbnailUrl;
      thumbnailUrls.push(thumbnailUrl);
      this.props.photos.map(photo => {
        if (photo.alubmId === album.id) {
          photos.push(photo)
        }        
      });
      albumPhotos.push(photos);
      photos = [];
    });
    this.setState({
      albums: albums,
      thumbnailUrls: thumbnailUrls,
      albumPhotos: albumPhotos
    });
             
  }  
  
  render() {
    const { classes } = this.props;
    const { anchor } = this.state;
   
   
    
    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar} />
        <List component="nav">
        { this.props.users.map(user => <ListItem button key={user.id} ><ListItemText primary={user.name} onClick={() => { this.handleAlbumChange(user.id) }}/></ListItem>)}
        </List>          
      </Drawer>
    );
    return (
      <div className={classes.root}>
        
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              
                
              
            </Toolbar>
          </AppBar>
          {drawer}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            { this.state.albums.map((album, index) => <Album album={album} photos={this.props.photos} albumPhotos={this.state.albumPhotos[index]} thumbnailUrl={this.state.thumbnailUrls[index]}></Album>) }
            {'You think water moves fast? You should see ice.'}
          </main>
          
        </div>
      </div>
    );
  }
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);