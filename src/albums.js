
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const styles = theme => ({
});

class Albums extends React.Component {
    
    render() {
        console.log(this.props)
        
        return (
            <Card>
                <CardActionArea>
                </CardActionArea>
            </Card>
        );
    }
}
export default withStyles(styles)(Albums);