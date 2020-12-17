import React, { useState } from "react";
import { PersonalSelect, SpaceSelect, CustomSelect } from "../../Select";
import { Link } from "react-router-dom";
import moment from "moment";
import { Host, Location } from "../../filter";

import {
  Grid,
  Button,
  TextField,
  MenuItem,
  FormControl,
  Select,
  Input,
  InputLabel,
} from "@material-ui/core";
import "./Search.scss";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "list",
      guests: "",
      location: "",
      start: moment(new Date().toLocaleString()).format("YYYY-MM-DD"),
      allAvail: [],
      search: "",
      user: {},
    };
  }

  handleInputChange = (name) => (event) => {
    // keep track of the valid dates 02/18 - 03/10
    // if date is in range
    // set state
    // window.alert(...)
    this.setState({ [name]: event.target.value });
  };
  handleSelect = (type, value) => (event) => {
    this.setState({
      [type]: value,
    });
  };
  render() {
    const { classes, handleView } = this.props;
    let { start } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          overflow: "scroll",
        }}
      >
          <p
          onClick={handleView("bookings")}
          className="back-button"
          >
            {" "}
            &#60; Back
          </p>
        <h3 class="mb-4">SEARCH BOOKINGS</h3>
        <form>
          <FormControl>
            <div style={{ display: "flex", width: "100%" }}>
              <TextField
                id="search-start-date"
                label="Start Date"
                type="date"
                onChange={this.handleInputChange("start")}
                InputLabelProps={{
                  shrink: true,
                  //   className: classes.floatingLabelFocusStyle,
                }}
                inputProps={{
                  min: start,
                }}
                style={{
                  width: "100%",
                }}
              />
              <TextField
                id="search-end-date"
                label="End Date"
                type="date"
                onChange={this.handleInputChange("end")}
                InputLabelProps={{
                  shrink: true,
                  //   className: classes.floatingLabelFocusStyle,
                }}
                inputProps={{
                  min: start,
                }}
                style={{
                  width: "100%",
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                alignItems: "center",
              }}
            >
              <FormControl
                // className={classes.select}
                style={{ flexGrow: 1, marginRight: "20px" }}
              >
                <InputLabel htmlFor="select-multiple-checkbox">
                  # of Guests
                </InputLabel>
                <Select
                  value={this.state.guests}
                  onChange={this.handleInputChange("guests")}
                  input={<Input name="age" id="age-helper" />}
                >
                  {[1, 2, 3, 4, 5, 6].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                style={{ flexGrow: 1 }}
              >
                <CustomSelect data={Location} onSelect={this.handleSelect} />
              </FormControl>
            </div>

            <Grid container space={6}>
              <Grid item xs={12}>
                <div>
                  <PersonalSelect
                    onSelect={() => console.log("")}
                  ></PersonalSelect>
                </div>
              </Grid>
            </Grid>
            <SpaceSelect></SpaceSelect>
            <input
              type="search"
              placeholder="Search"
              class="mt-3 mb-3"
              onChange={(event) =>
                this.setState({ search: event.target.value })
              }
            ></input>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Link to="/advocate/currentbookings">
                <Button
                  
                  variant="contained"
                  color="primary"
                  id="buttonGray"
                  style={{
                    fontSize: "16px",
                    padding: "0px 45px 0px 45px",
                    height: "40px",
                  }}
                >
                  Cancel
                </Button>
              </Link>
              <Button
                type="button"
                onClick={this.onClick}
                variant="contained"
                color="primary"
                // className={classes.button}
                id="button"
                style={{
                  fontSize: "16px",
                  padding: "0px 22px 0px 22px",
                  height: "40px",
                }}
              >
                Search Hosts
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default Search;
