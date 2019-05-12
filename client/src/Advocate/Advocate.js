import React, { Component } from 'react';
import women from "../img/53-.jpg";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    bookings: {
        height: window.innerHeight,
        width: window.innerWidth / 2 + 230,
    },
    bigAvatar: {
        position: "relative",
        width: window.innerWidth / 4,
        height: window.innerHeight / 4 ,
    },
    button: {
        margin: theme.spacing.unit,
    },
    card: {
        maxWidth: 500,
        margin: "0rem 5rem 1rem 3rem"
    },
    content: {
        display: "flex",
        
    },
    button: {
        width: '220px',
        margin: '0.3rem',
        background: '#202e57',
        textDecoration: 'none'
    }
  });
export default withStyles(styles)(class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookings: [
                {
                    ID: 1,
                    name: "Stephanie Burd",
                    address: "1234 24th Sunset Bld",
                    begin: "MONDAY APRIL 4 2019",
                    end: "TUESDAY APRIL 25 2019"
                },
                {
                    ID: 2,
                    name: "Min Yang",
                    address: "1234 24th Sunset Bld",
                    begin: "MONDAY APRIL 4 2019",
                    end: "TUESDAY APRIL 25 2019"
                },
                {
                    ID: 3,
                    name: "Mary Huibregtse",
                    address: "1234 24th Sunset Bld",
                    begin: "MONDAY APRIL 4 2019",
                    end: "TUESDAY APRIL 25 2019"
                },
                {
                    ID: 4,
                    name: "Abby Huang",
                    address: "1234 24th Sunset Bld",
                    begin: "MONDAY APRIL 4 2019",
                    end: "TUESDAY APRIL 25 2019"
                },
                
            ]
        }
    }
    render() {
        const { classes } = this.props;
        return (
            <div class="pt-4">
                <Grid 
                    container 
                    className={classes.root} 
                    justify="space-evenly" >
                        <Grid key={1} item>
                            <Grid 
                                container 
                                justify="center" 
                                alignItems="center">
                                <Paper id="side" className={classes.side} >
                                    <img src={women} className={classes.bigAvatar} />
                                    <h3>Welcome, Advocate</h3>
                                    <Typography class="m-2" color="textSecondary">What would you like to do today</Typography>
                                    <Link to="/bookings">
                                        <Button variant="contained" color="primary" className={classes.button}>
                                            New Booking
                                        </Button>
                                    </Link>
                                    <Link to="/bookings">
                                        <Button variant="contained" color="primary" className={classes.button}>
                                            Refer a Host
                                        </Button>
                                    </Link>
                                    <Link to="/bookings">
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        View Current Bookings
                                    </Button>
                                    </Link>
                                    <Link to="/bookings">
                                        <Button variant="contained" color="primary" className={classes.button}>
                                            View Analytics
                                        </Button>
                                    </Link>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid key={2} item>
                            <Paper className={classes.bookings} >
                                <h4 class="p-5">
                                    CURRENT BOOKINGS
                                </h4>
                                <Grid container spacing={3}>
                                    {this.state.bookings.map(
                                        (booking) => {
                                            return(
                                                <Grid item xs={6}>                                  
                                                    <Card className={classes.card}>
                                                        <CardContent className={classes.content}>
                                                            <div>
                                                                <Typography style={{maxWidth: 50}} variant="h5" component="h2">
                                                                    {booking.name}
                                                                </Typography>
                                                                <Typography color="textSecondary" gutterBottom>
                                                                    Guest ID: {booking.ID}
                                                                </Typography>
                                                                <Typography className={classes.pos}>
                                                                    {booking.address}
                                                                </Typography>
                                                            </div>     
                                                            <div style={
                                                                    {
                                                                        background: "#202e57", 
                                                                        borderRadius: '1rem', 
                                                                        color: 'white', 
                                                                        padding: "1.5rem 0 0 1.7rem"
                                                                    }
                                                                }>
                                                                {booking.begin} - <br/>{booking.end}
                                                            </div>                                                                                                           
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            )
                                        }
                                    )}
                                </Grid>
                            </Paper>
                        </Grid>
                </Grid>
            </div>       
        )
    }
})