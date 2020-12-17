import React from "react";
import women from "../../img/icon1.png";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Button from "../../Components/Button/Button";
// icons
import People from "@material-ui/icons/People";
import Clock from "@material-ui/icons/AccessTime";
import Face from "@material-ui/icons/Face";

import HostCalendar from "../Bookings/HostCalendar";
import MyProfile from "../Profile";
import Availability from "../EditAvailability";
import MyListings from "../Listing";
import Bookings from "../Bookings/Bookings";

// firebase
import { compose } from "recompose";
import { withFirebase } from "../../Firebase";
import "./HostDash.scss";
const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "5px",
  },
  main: {
    height: "800px",
    width: window.innerWidth / 2 + 250,
  },
  bigAvatar: {
    marginTop: "50px",
    marginBottom: "20px",
    position: "relative",
    width: "30%",
  },
  card: {
    maxWidth: 360,
    margin: "0rem 5rem 1rem 3rem",
  },
  content: {
    display: "flex",
  },
  date: {
    padding: "1.5rem 0 0 4rem",
  },
});
class HostDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
      view: "bookings",
      bookings: [
        {
          ID: "",
          name: "",
          address: "",
          begin: "",
          end: "",
        },
      ],
      bookingType: "confirmed",
    };
  }

  componentDidMount() {
    let currentUser = "";
    this.props.firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        currentUser = user.uid;
        console.log(user.uid);
        console.log(this.state);
      } else {
        currentUser = this.props.user;
        let listings = currentUser.listings;
        let spaces = [];
        for (let i = 0; i < listings.length; i++) {
          let current = listings[i];
          let theSpace = {
            id: current["id"],
            hostID: currentUser,
            description: current["description"],
            type: current["homeType"],
            guestCount: current["guestCount"],
            address: current["address"],
            location: current["location"],
            amenities: current["amenities"],
            instructions: current["information"],
            houseRules: current["houseRules"],
            zip: current["zip"],
            currentBookings: [],
            availability: [],
            pastBookings: [],
            pendingBookings: [],
          };
          if (current["currentBookings"] !== undefined) {
            theSpace.currentBookings = current["currentBookings"];
          }
          if (current["pastBookings"] !== undefined) {
            theSpace.pastBookings = current["pastBookings"];
          }
          if (current["availability"] !== undefined) {
            theSpace.availability = current["availability"];
          }
          if (current["pendingBookings"] !== undefined) {
            theSpace.pendingBookings = current["pendingBookings"];
          }
          spaces.push(theSpace);
        }
        // this.props.updateListing(spaces);
        this.setState({
          listings: spaces,
        });
      }
    });
    let foundListings = this.props.user.listingIDs;
    console.log(foundListings);

    // if (
    //   foundListings === undefined ||
    //   foundListings[1] === undefined ||
    //   currentUser === ""
    // ) {
    //   console.log("no updated profile");
    // } else {
    //   console.log("inside firebase call in host dash");
    //   if (this.props.user.listingIDs.length != 0) {
    //     let spacesQuery = this.props.firebase.listings();
    //     spacesQuery.on("value").then((snapshot) => {
    //       let obj = snapshot.val();
    //       let spaceIDs = [];
    //       let spaces = [];
    //       for (let i = 0; i < foundListings.length; i++) {
    //         let current = obj[foundListings[i]];
    //         let theSpace = {
    //           id: foundListings[i].keys(),
    //           hostID: currentUser,
    //           description: current["description"],
    //           type: current["type"],
    //           guestCount: current["guestCount"],
    //           address: current["address"],
    //           location: current["location"],
    //           amenities: current["amenities"],
    //           instructions: current["information"],
    //           houseRules: current["houseRules"],
    //           zip: current["zip"],
    //           currentBookings: [],
    //           availability: [],
    //           pastBookings: [],
    //           pendingBookings: [],
    //         };
    //         if (current["currentBookings"] !== undefined) {
    //           theSpace.currentBookings = current["currentBookings"];
    //         }
    //         if (current["pastBookings"] !== undefined) {
    //           theSpace.pastBookings = current["pastBookings"];
    //         }
    //         if (current["availability"] !== undefined) {
    //           theSpace.availability = current["availability"];
    //         }
    //         if (current["pendingBookings"] !== undefined) {
    //           theSpace.pendingBookings = current["pendingBookings"];
    //         }
    //         spaces.push(theSpace);
    //         console.log(spaces);
    //       }
    //       this.props.updateListing(spaces);
    //       this.setState({
    //         listings: spaces,
    //       });
    //     });
    //   }
    // }
  }

  handleAvailability = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  handleView = (view, type) => (event) => {
    this.setState({
      view: view,
      bookingType: type,
    });
  };
  render() {
    const { classes } = this.props;
    const { bookingType, view } = this.state;
    var style = {
      navigator: {
        boxShadow: "none",
        border: "0.5px solid #d3dbee",
        backgroundColor: "#fdfdfe",
        borderRadius: "12px",
      },
    };
    let buttons = [
      {
        type: "bookings",
        bookingType: "confirmed",
        display: "Current Bookings",
      },
      { type: "listings", display: "My Listings" },
      { type: "profile", display: "My Profile" },
    ];

    return (
      <div>
        <div
          style={{
            textAlign: "center",
            backgroundColor: " #fcf3bd",
            fontSize: "1.2em",
            padding: "5px",
          }}
        >
          This page for display purpose only. Please{" "}
          <Link to="/sharespace/situation">
            <span>sign up</span>
          </Link>
        </div>
        <Grid container className={classes.root} justify="space-evenly">
          <Grid key={1} item>
            <Grid container justify="center" alignItems="center">
              <Paper id="side-nav">
                <img id="bigAvatar" src={women} className={classes.bigAvatar} />
                <h4 style={{ fontWeight: 300 }}>
                  Welcome, {this.props.user.firstName}
                </h4>
                <Typography
                  color="textSecondary"
                  style={{ fontWeight: 300 }}
                  style={{ padding: "15px" }}
                >
                  What would you like to do today?
                </Typography>
                {buttons.map((btn, idx) => (
                  <Button
                    {...btn}
                    handleView={this.handleView}
                    currentView={view}
                  ></Button>
                ))}
                <Availability
                  open={this.state.open}
                  click={this.handleAvailability}
                  updateAvailability={this.props.updateAvailability}
                  // profile={this.props.profile}
                ></Availability>
              </Paper>
              <Paper style={style.navigator}></Paper>
            </Grid>
          </Grid>
          <Grid key={2} item>
            <Paper id="host-main">
              <Grid
                container
                spacing={6}
                style={{ width: window.innerWidth / 2 + 230 }}
              >
                {view == "bookings" && (
                  <Bookings
                    // type={bookingType}
                    // profile={this.props.profile}
                    updateListing={this.props.updateListing}
                    user={this.props.user}
                    updateAvailability={this.props.updateAvailability}
                    deleteAvailability={this.props.deleteAvailability}
                  ></Bookings>
                )}
                {view == "listings" && (
                  <MyListings
                    user={this.props.user}
                    updateListing={this.props.updateListing}
                  ></MyListings>
                )}

                {view == "profile" && (
                  <MyProfile
                    user={this.props.user}
                    // profile={this.props.profile}
                    updateListings={this.props.updateListing}
                  ></MyProfile>
                )}

                {/* {(view == "bookings" && bookingType === "pending") && (
                  <Bookings
                    type={bookingType}
                    profile={this.props.profile}
                    updateListing={this.props.updateListing}
                  ></Bookings>
                )} */}
                {/* {view == "calendar" && (
                  <HostCalendar
                    profile={this.props.profile}
                    currentUser={this.props.user}
                    updateAvailability={this.props.updateAvailability}
                    deleteAvailability={this.props.deleteAvailability}
                  />
                )} */}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const Dash = compose(withStyles(styles), withFirebase)(HostDash);

export default Dash;
