import React from 'react';
import { compose } from 'recompose';
import AddSpace from './AddListings';
import { Amenities, Rules } from '../filter';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/AddCircleOutline';
import Typography from '@material-ui/core/Typography';
import { withFirebase } from '../Firebase';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { listing } from '../filter'


const styles = theme => ({
    info: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        //height: '250px',
        overflowY: 'auto'
    },
    type: {
        color: '#da5c48',
        margin: 0,
        fontSize: "14px"
    },
    value: {
        fontSize: '1.5em', 
        margin: 0,
        fontWeight: 300,
        fontSize: "16px",
        paddingBottom: "3px"
    },
    arrow: {
        fontSize: '40px',
        position: 'relative',
        left: '95%'
    },
    text: {
        borderBottom: "0.5px solid #7e9fa8"
    },
    homeDesc: {
        fontWeight: 300,
        fontSize: "16px",
        marginBottom: "10px"
    }
})


class MyListing extends React.Component {
    constructor(props) {
        super(props)
        this.saveListingID = this.saveListingID.bind(this)
        this.state = {
            userID: "",
            listings: [],
            listingIDs: [], 
            location: "", 
            type: "",
            address: "",
            zip: "",
            guests: "",
            photos: 'no photos currently',
            description: "",
            information: "",
            amenities: "",
            rules: "",
            name: "",
            testing: false
    
        }
    }


    saveListingID = (id, object) => {
        this.state.listingIDs.push(id)
        this.state.listings.push(object)
        this.props.updateListing(object)
    }
    componentDidMount() {

        this.props.firebase.auth.onAuthStateChanged((user)=> {
            if(user) {
                this.state.userID = user.uid 
                console.log(user.uid)

            } else {
                console.log('no valid ID')
            }

        })
        console.log("inside componentDidMount()")

        // if(this.props.profile.listingIDs != undefined) {
        //     console.log(this.props.profile.listingIDs)
        //     if(this.state.listingIDs.length != 0) {
        //         // this.state.listingIDs = this.props.listingIDs
        //         let spacesQuery = this.props.firebase.listings();
        //         spacesQuery.once('value').then((snapshot) =>{
        //             let obj = snapshot.val();                       
        //                 let relevantListings = this.props.profile.listingIDs;
        //                 let storage = [];
        //                 for (let key in relevantListings) {
        //                     storage.push(relevantListings[key]['listingID'])
        //                 }
        //                 console.log(storage)
        //                 let spaces = []
        //                 let spaceIDs = []
        //                 for (let i = 0; i < storage.length; i ++) {
        //                     let current = obj[storage[i]];
        //                     let theSpace = {
        //                         id: storage[i],
        //                         hostID: this.state.userID,
        //                         description: current['description'],
        //                         type: current['type'],
        //                         guestCount: current['guestCount'],
        //                         address: current['address'],
        //                         location: current['location'],
        //                         amenities: current['amenities'],
        //                         instructions: current['information'],
        //                         houseRules: current['houseRules'],
        //                         zip: current['zip'],
        //                         currentBookings: [],
        //                         availability: [],
        //                         pastBookings: []

        //                     }
        //                     if(current['currentBookings']!== undefined) {
        //                         theSpace.currentBookings = current['currentBookings']

        //                     }
        //                     if(current['pastBookings'] !== undefined) {
        //                         theSpace.pastBookings = current['pastBookings']
        //                     }
        //                     if(current['availability'] !== undefined) {
        //                         theSpace.pastBookings = current['pastBookings']
        //                     }
        //                     spaces.push(theSpace)
        //                     console.log(spaces)
        //                 }
  
        //                 this.setState({
        //                     listings: spaces
        //                 })
        //                 console.log(this.props.profile)
        //                 console.log(this.state)    
        //         })   

        //     }
       // }
  
    } 

    handleAdd =  () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const { classes } = this.props;
        let types = ['Listing Name',  'Address', 'Location', 'Zip Code', 'Home Type', 'Capacity', 'description', 'Amenities', 'House Rules']
      var values = []
      let spaces = this.props.user.listings;

      let ids = this.props.user.listingIDs;
      for (let i = 0; i < spaces.length; i++) {
        let space = spaces[i];
        let value = [
          space.name,
          space.address,
          space.location,
          space.zip,
          space.type,
          space.capacity,
          space.description,
          space.amenities,
          space.houseRules,
        ];
        values.push(value);
      }
        // if(this.props.profile.listings === undefined || this.props.profile.listings.length == 0) {
        //     values = [
        //         ['House 1', 'Beacon Hill', 'Private Bedroom', '1234 Beacon Hill', 'Apt 7', '98002','1', 'This used to be my son\'s room but he is off to college so it\'s open to people who need help'],
        //         ['House 2', '1234 Beacon Hill', 'Beacon Hill', '98002', 'Private Bedroom', '1']
        //     ]

        // } else {
        //     let spaces = this.props.profile.listings

        //     let ids = this.props.profile.listingIDs
        //     for (let i = 0; i < spaces.length; i++) {
        //         let space = spaces[i]
        //         let value = [space.name, space.address, space.location, space.zip, space.type, space.guestCount, space.description, space.amenities, space.houseRules]
        //         values.push(value)
        //     }
        // }

        let allListing = [];

        for (var i = 0; i < values.length; i++) {
            let listing = []
            for (var j = 0; j < types.length; j++) {
                var obj = {
                    type: types[j],
                    value: values[i][j]
                }
                listing[j] = obj;
            }
            allListing[i] = listing;
        }
        let exampleListing = [
            {
                type: 'Listing Name',
                value: 'House 1'
            },
            {
                type: 'Location',
                value: 'Beacon Hill'
            },
            {
                type: 'Home Type',
                value: 'Private Bedroom'
            },
            {
                type: 'Address',
                value: '1234 Beacon Hill'
            },
            {
                type: 'Zip Code',
                value: '98002'
            },
            {
                type: 'Home Description',
                value: 'This used to be my son\'s room but he is off to college so it\'s open to people who need help'
            },
            {
                type: 'Number of Guests',
                value: '1'
            },
            {
                type: 'Amenities',
                value: Amenities.values
            },
            {
                type: 'House Rules',
                value: Rules.values
            }
        ]

            return (
              <div>
                <div id="title">
                  <h3 class="m-3">My Listings</h3>
                  {this.props.user.uid === "" ? (
                    <p>Please signup to add listings</p>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={() => this.setState({ open: true })}
                      id="button"
                    >
                      <Add style={{ marginRight: "5px" }}></Add> Add Listing
                    </Button>
                  )}

                  {/* start of dialog */}
                  <Dialog
                    open={this.state.open}
                    //open='true'
                    onClose={() => this.setState({ open: false })}
                    scroll="paper"
                    fullWidth="true"
                    maxWidth="md"
                    aria-labelledby="scroll-dialog-title"
                  >
                    <DialogContent>
                      <AddSpace
                        user={this.props.user}
                        updateListing={this.props.updateListing}
                        saveListingID={this.saveListingID}
                        click={this.handleAdd}
                      ></AddSpace>
                    </DialogContent>
                    <DialogActions></DialogActions>
                  </Dialog>
                  {/* end of dialog */}
                </div>
                <div style={{overflow: "scroll", maxHeight: "700px"}}>
                  {this.props.user.listings === undefined ||
                  this.props.user.listings.length == 0 ? (
                    <p style={{ marginLeft: "50px", color: "#666460" }}>
                      You have no listings.
                    </p>
                  ) : (
                    allListing.map((data) => {
                      return (
                        <ExpansionPanel
                          style={{
                            boxShadow: "none",
                            backgroundColor: "#fdfdfe",
                            borderBottom: ".5px solid #7e9fa8",
                            color: "#202e57",
                            fontFamily: "Source Sans Pro",
                            borderRadius: 0,
                            marginLeft: "20px",
                          }}
                        >
                          <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            style={{ paddingLeft: 0 }}
                          >
                            <Typography
                              style={{ fontSize: "16px", color: "#202e57" }}
                            >
                              {data[0].value}
                            </Typography>
                          </ExpansionPanelSummary>
                          <ExpansionPanelDetails>
                            <div className={classes.info}>
                              {data.map((detail, idx) => {
                                return (
                                  <div
                                    style={{
                                      //width: '25%',
                                      padding: "8px 10px",
                                      flex: "1 1 33%",
                                    }}
                                  >
                                    {(typeof detail.value == "string" ||
                                      typeof detail.value == "number") &&
                                      (
                                        <>
                                          <p className={classes.type}>
                                            {detail.type}
                                          </p>
                                          <p
                                            className={`${classes.value} ${classes.text}`}
                                          >
                                            {detail.value}
                                          </p>
                                        </>
                                      )}
                                  </div>
                                );
                              })}
                            </div>
                          </ExpansionPanelDetails>
                            {/* <p className={classes.value} style={{fontWeight: 400}}>Home Description:</p>
                                        <p className={classes.homeDesc}>
                                        {data[data.length - 3].value}
                                        </p> */}

                          {data
                            .slice(data.length - 2, data.length)
                            .map((value) => {
                              return (
                                <div>
                                  <p
                                    className={classes.value}
                                    style={{ fontWeight: 400 }}
                                  >
                                    {value.type}:
                                  </p>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexWrap: "wrap",
                                      margin: "5px",
                                      marginBottom: "20px",
                                    }}
                                  >
                                    {value.value.map((d) => {
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
                                          {d}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                        </ExpansionPanel>
                      );
                    })
                  )}
                </div>
              </div>
            );    
        
    }
}

const Listing = compose(
    withStyles(styles),
    withFirebase,
  )(MyListing);
  
  
  export default Listing;