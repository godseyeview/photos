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
import Albums from './albums';

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
    anchor: 'left',
    albums: []
  };

  handleAlbumChange = userId => {
    let albums = [];
    this.props.albums.map(album => {
      if (userId === album.userId) {
        albums.push(album);
      }
    });
    this.setState({
      albums: albums
    });         
  }
  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  
  render() {
    const { classes } = this.props;
    const { anchor } = this.state;
   
   
    
    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar} />
        <List component="nav">
        { this.props.users.map(user => <ListItem button key={user.id} ><ListItemText primary={user.name} onClick={() => { this.handleAlbumChange(user.id) }}/></ListItem>)}
        </List>          
      </Drawer>
    );


    const userAlbums = (
      <div>
      { this.props.albums.map(album => <Albums album={album}></Albums>) }
      </div>
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
            {userAlbums}
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