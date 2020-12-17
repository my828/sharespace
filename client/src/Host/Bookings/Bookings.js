import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import BookingInfo from "./BookingInfo";
import { Host, Space } from "../../filter";
import {
  Switch,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import HostCalendar from "./HostCalendar";
import Availability from "../EditAvailability";
import moment from "moment";
// firebase
import { compose } from "recompose";
import { withFirebase } from "../../Firebase";
import "./Bookings.scss";

const styles = (theme) => ({
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
});

class AvailCalendar extends React.Component {
  constructor(props) {
    super(props);
    let calendarBookings = [];
    this.props.user.listings[0].currentBookings.map(
      (booking, idx) => {
        calendarBookings.push({
          id: booking.id,
          start: new Date(booking.start),
          end: new Date(booking.end),
          title: booking.advocateInfo.name,
        });
      }
    );
    this.state = {
      listings: this.props.user.listings,
      view: "list",
      bookings: [],
      space: 0,
      calendarBookings:calendarBookings,
      // pendingBookings: []
    };
  }

  componentDidMount() {
    // this.props.firebase.auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     if (this.props.type === "confirmed") {
    //       this.props.firebase
    //         .availabilities()
    //         .orderByChild("state")
    //         .equalTo("booked")
    //         .on("value", (snapshot) => {
    //           let obj = snapshot.val();
    //           console.log(obj);
    //           if (obj !== null) {
    //             const book = Object.keys(obj).map((key) => ({
    //               ...obj[key],
    //               id: key,
    //             }));
    //             console.log(book.key);
    //             this.setState({
    //               bookings: book,
    //             });
    //           }
    //           console.log(this.state);
    //         });
    //     } else {
    //       this.props.firebase
    //         .availabilities()
    //         .orderByChild("state")
    //         .equalTo("pending")
    //         .on("value", (snapshot) => {
    //           let obj = snapshot.val();
    //           console.log(obj);
    //           if (obj !== null) {
    //             const book = Object.keys(obj).map((key) => ({
    //               ...obj[key],
    //               id: key,
    //             }));
    //             console.log(book.key);
    //             this.setState({
    //               bookings: book,
    //             });
    //           }
    //           console.log(this.state);
    //         });
    //     }
    //   } else {
    //     this.setState({bookings: this.props.user.currentBookings});
    //   }
    // });
    if (this.props.user.listings.length !== 0) {
      this.setState({
        bookings: this.props.user.listings[this.state.space].currentBookings,
      });
    }
  }

  handleCardClick = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  handleFireClick = (obj, decide) => {
    this.setState({
      open: !this.state.open,
    });
    // if (obj !== undefined ) {
    //     if (decide == "accept") {
    //         console.log("inside accept")
    //         this.props.firebase.addPendingToBooked(obj)
    //     } else {
    //         console.log("inside decline")
    //        this.props.firebase.addPendingToDelete(obj)
    //     }
    // }
  };

  handleSwitchView = (event) => {
    this.setState({
      view: event.target.checked ? "calendar" : "list",
    });
  };

  handleListingChange = (name) => (event) => {
    let calendarBookings = []
    this.state.listings[event.target.value].currentBookings.map((booking, idx) => {
      calendarBookings.push({
        id: booking.id,
        start: new Date(booking.start),
        end: new Date(booking.end),
        title: booking.advocateInfo.name,
      });
    });
    this.setState({
      [name]: event.target.value,
      bookings: this.props.user.listings[event.target.value].currentBookings,
      calendarBookings: calendarBookings,
    });
  };
  render() {
    const {
      classes,
      type,
      user,
      updateAvailability,
      deleteAvailability,
    } = this.props;
    const { view, bookings, space, calendarBookings } = this.state;

    return (
      <div style={{ width: window.innerWidth / 2 + 230 }}>
        <div id="title">
          <h3>Current Bookings</h3>
          <div id="space-selector-container">
            {/* <MultiSelect handleView={this.handleView}/> */}
            <FormControl id="space-selector">
              <InputLabel for="space">Select Space</InputLabel>
              <Select
                value={space}
                defaultValue={space}
                onChange={this.handleListingChange("space")}
                id="space"
              >
                {user.listings !== undefined &&
                  user.listings.map((listing, index) => {
                    return <MenuItem value={index}>{listing.name}</MenuItem>;
                  })}
              </Select>
            </FormControl>
          </div>
          <p
            style={{
              fontSize: "12pt",
              fontWeight: "300",
              padding: "10px",
            }}
          >
            Show Calendar
            <Switch
              value="view"
              onChange={(event) => {
                this.setState({
                  view: event.target.checked ? "calendar" : "list",
                });
              }}
            />
          </p>
        </div>
        {this.state.bookings.length === 0 ? (
          <p style={{ marginLeft: "30px", color: "#666460" }}>
            You currently have{" "}
            {this.state.bookings ? 0 : this.state.bookings.length} bookings
          </p>
        ) : (
          <div style={{ textAlign: "center", marginBottom: "10px" }}>
            <h5>
              Your listing{" "}
              <span style={{ color: "#fe8b6b" }}>
                {user.listings[space].name}
              </span>{" "}
              have <span style={{ color: "#fe8b6b" }}>{bookings.length}</span>{" "}
              bookings
            </h5>
          </div>
        )}

        <div>
          {view === "calendar" && (
            <HostCalendar
              user={user}
              space={space}
              bookings={calendarBookings}
              updateAvailability={updateAvailability}
              deleteAvailability={deleteAvailability}
            />
          )}
          <div id="booking-cards">
            {view === "list" &&
              bookings.map((data) => {
                return (
                  <Paper
                    onClick={this.handleCardClick}
                    className="booking-card"
                  >
                    <div className={classes.cardHeader}>
                      <div>
                        <div> Advocate Info </div>

                        <span className="content">
                          {data.advocateInfo.name}
                        </span>
                        <div>Number of Guests </div>
                        <span className="content">
                          {data.guestCount} Guests
                        </span>
                      </div>
                      <div>
                        {moment(new Date(data.start).toLocaleString()).format(
                          "MMMM DD"
                        )}{" "}
                        - <br />
                        {moment(new Date(data.end).toLocaleString()).format(
                          "MMMM DD"
                        )}
                      </div>
                    </div>

                    <div>
                      <div> Notes</div>
                      <span className="content">{data.notes}</span>
                    </div>

                    <div>
                      <div>Guest Needs</div>
                      <div style={{ display: "flex", flexWrap: "wrap" }}>
                        {data.needs.map((amenity) => {
                          return (
                            <div
                              id="tags"
                              style={{
                                border: "0.5px solid",
                                borderRadius: "0.5rem",
                                padding: "4px 12px 4px 12px",
                                margin: "2px",
                              }}
                            >
                              {amenity}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <BookingInfo
                      booking={data}
                      listing={user.listings[space]}
                      open={this.state.open}
                      // type={type}
                      click={this.handleFireClick}
                    ></BookingInfo>
                  </Paper>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

const Bookings = compose(withStyles(styles), withFirebase)(AvailCalendar);

export default Bookings;
