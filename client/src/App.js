import React, { Component } from "react";
// import './style/index.css';
import Nav from "./Main/Nav/Nav";
import SignUp from "./Main/SignUp";
import Stay from "./Stay";
import Landing from "./Main/Landing/landing";
import Footer from "./Main/Footer";
import AboutUs from "./Main/AboutUs/AboutUs";
import OurTool from "./Main/OurTool/OurTool";
import CurrentBookings from "./Advocate/AdvoDash";
import SignIn from "./Main/SignIn";
import Calendar from "./Advocate/AdvoCalendar";
import Situation from "./Main/Situation";
import { withAuthentication } from "./Sessions";
import SearchBooking from "./Advocate/SearchBooking";
import PasswordForgetPage from "./PassForget";
import Admin from "./Admin";
import SignUpHost from "./SignUpHost";
import HostDash from "./Host/HostDash/HostDash";
import CreateProfile from "./Host/CreateProfile";
import NotFound from "./NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import MyListing from "./Host/Listing";
import { listing } from "./filter";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        type: "",
        uid: "",
        firstName: "Jasmine",
        lastName: "Chang",
        email: "jc@gmail.com",
        userInfo: {
          phone: "(425)123-4567",
          gender: "female",
          languages: ["French", "German"],
          ethnicities: ["Asian"],
          religion: ["Buddhism"],
          story: "none given",
        },
        listings: [
          {
            ID: 1,
            name: "Mary's Space",
            capacity: 4,
            address: "1234 24th Sunset Bld",
            location: "FREMONT",
            type: "Entire Home",
            zip: 98132,
            description:
              "A quiet location in fremont with good access to transit lines and delicious food. Fully furnished",
            amenities: [
              "Kitchen",
              "Private Bathroom",
              "Computer Access",
              "Laundry",
              "Refrigerator",
              "Bike Storage",
              "Microwave",
            ],
            checkinInfo: {
              time: "10am - 9pm",
              description:
                "Please use the lock box on the front door. The access code is 1234. Please return the key when you leave.",
            },
            houseRules: ["No Smoking", "No Alcohol"],
            availability: [
              {
                start: "June 4 2019 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "June 8 2019 21:01:57 GMT-0700 (Pacific Daylight Time)",
              },
              {
                start: "June 13 2019 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "June 16 2019 21:01:57 GMT-0700 (Pacific Daylight Time)",
              },
            ],
            currentBookings: [
              {
                id: 0,
                guestID: 3857,
                guestCount: 2,
                start: "Jan 01 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 10 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: [
                  "Crib",
                  "High Chair",
                  "Pregnant",
                  "Pets",
                  "Service Animal",
                ],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
              {
                id: 1,
                guestID: 3858,
                guestCount: 1,
                start: "Jan 15 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 20 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["High Chair", "Pregnant"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
              {
                id: 2,
                guestID: 3858,
                guestCount: 1,
                start: "Jan 25 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Feb 5 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["High Chair", "Pregnant"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
            ],
          },
          {
            ID: 2,
            guestID: 2059,
            capacity: 6,
            name: "Home 1",
            address: "1234 24th Sunset Bld",
            location: "GREEN LAKE",
            type: "Shared Space",
            zip: 83750,
            description:
              "A quiet location in fremont with good access to transit lines and delicious food. Fully furnished",
            amenities: [
              "Parking",
              "Kitchen",
              "Refrigerator",
              "Microwave",
              "Wifi",
              "Computer Access",
            ],
            checkinInfo: {
              time: "10am - 9pm",
              description:
                "Have a dog named Benly, he is very friendly but please do not pet him.",
            },
            houseRules: ["No Smoking", "No Alcohol"],
            availability: [
              {
                start: "Jan 2 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 4 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
              },
              {
                start: "Jan 11 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 13 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
              },
              {
                start: "Jan 25 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 29 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
              },
            ],
            currentBookings: [
              {
                id: 0,
                guestID: 3847,
                guestCount: 3,
                start: "Jan 5 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 10 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["Crib", "High Chair", "Pregnant"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
              {
                id: 2,

                guestID: 3867,
                guestCount: 1,
                start: "Jan 14 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Jan 20 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["Pregnant", "Service Animal"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
              {
                id: 3,

                guestID: 3877,
                guestCount: 4,
                start: "Feb 5 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Feb 10 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["Pregnant", "Service Animal"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
              {
                id: 4,
                guestID: 3877,
                guestCount: 4,
                start: "Feb 5 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Feb 10 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["Pregnant", "Service Animal"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
              {
                id: 5,

                guestID: 3877,
                guestCount: 4,
                start: "Feb 5 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                end: "Feb 10 2021 21:01:57 GMT-0700 (Pacific Daylight Time)",
                needs: ["Pregnant", "Service Animal"],
                notes: "This is a note",
                advocateInfo: {
                  name: "Jerry Golden",
                  email: "jerry.golden@gmail.com",
                },
              },
            ],
          },
        ],
        listingIDs: [1, 2],
      },
      // profile: {
      //   phone: '1234567890',
      //   gender: 'Female',
      //   languages: ["english"],
      //   ethnicities: ["White"],
      //   religion: ["None"],
      //   listings: [{
      //     address: "2525 minor Ave E",
      //     amenities: ["Kitchen", "Parking", "Bike Storage"],
      //     description: "hello",
      //     guestCount: 3,
      //     hostID: "zSrR3ts6r4cM9z1LG2TyW26uVR42",
      //     houseRules: ["No Smoking", "No Alcohol"],
      //     id: "-Lg9OGG55kjo4HuwA1B9",
      //     information: "world",
      //     location: "Belltown",
      //     name: "Listing A",
      //     photos: "no photos currently",
      //     type: "Hotel Room",
      //     zip: "98102",
      //     availability: [],
      //     currentBookings: [],
      //     pendingBookings: [],
      //   }],
      //   listingIDs: ['-LgQLVKa-hPfhrupdcUB'],
      //   story: 'none given',
      // }
    };
  }

  deleteAvailability = (id, index) => {
    let l = this.state.user.listings;
    for (let i = 0; i < l.length; i++) {
      let obj = l[i];
      if (obj.id == id) {
        l[i].availability.splice(index, 1);
        console.log(l[i].availability);
      }
    }
  };
  updateAvailability = (id, value) => {
    let l = this.state.user.listings;
    for (let i = 0; i < l.length; i++) {
      let obj = l[i];
      if (obj.id == id) {
        l[i].availability.push(value);
      }
    }
    console.log(this.state);
  };

  updateUser = (value) => {
    this.setState({
      user: {
        type: value.type,
        uid: value.uid,
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
      },
    });
    console.log(this.state.user);
  };
  updateListing = (value) => {
    if (
      this.state.user.listings == undefined ||
      this.state.user.listingIDs === undefined
    ) {
      this.setState({
        user: {
          listings: [value],
          listingIDs: [value.id],
        },
      });
    } else {
      this.state.user.listings.push(value);
      this.state.user.listingIDs.push(value.id);
    }

    console.log(this.state);
  };

  updateType = (value) => {
    this.setState({
      userType: value,
    });
  };

  updateProfile = (value) => {
    this.setState({
      profile: {
        phone: value.phone,
        gender: value.gender,
        languages: value.languages,
        ethnicities: value.ethnicities,
        religion: value.religion,
        listings: value.listings,
        story: value.story,
        haveListing: value.haveListing,
      },
    });
  };

  render() {
    return (
      <div>
        <Router>
          <div>
            <Nav />
            <Switch>
              <Route exact path="/sharespace" component={Landing} />
              <Route
                path="/sharespace/signup"
                render={(props) => (
                  <SignUp {...props} updateUser={this.updateUser} />
                )}
              />
              <Route path="/sharespace/stay" component={Stay} />
              <Route path="/sharespace/aboutus" component={AboutUs} />
              <Route path="/sharespace/ourtool" component={OurTool} />
              <Route path="/Admin" component={Admin} />
              <Route path="/sharespace/signin" component={SignIn} />
              <Route path="/sharespace/situation" component={Situation} />
              <Route path="/PassForget" component={PasswordForgetPage} />
              <Route path="/calendar" component={Calendar} />

              {/* Advocate */}
              <Route
                path="/advocate/bookings"
                component={CurrentBookings}
              />

              {/* Host */}
              <Route
                path="/host/createprofile"
                render={(props) => (
                  <CreateProfile
                    {...props}
                    updateProfile={this.updateProfile}
                    user={this.state.user}
                  />
                )}
              />
              {/* <Route path="/listing" render={(props) => <MyListing {...props} updateListing={this.updateListing} user={this.state.currentUser}/>} /> */}

              {/* <Route path="/hostdash" component={HostDash} /> */}
              <Route
                path="/host/bookings"
                render={(props) => (
                  <HostDash
                    {...props}
                    updateListing={this.updateListing}
                    user={this.state.user}
                    // profile={this.state.profile}
                    updateAvailability={this.updateAvailability}
                    deleteAvailability={this.deleteAvailability}
                  />
                )}
              />
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default withAuthentication(App);
// <img src={logo} className="App-logo" alt="logo" />

// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
