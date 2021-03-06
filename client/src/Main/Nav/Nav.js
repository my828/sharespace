import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../img/logo-new.png";
import { NavLink } from "react-router-dom";
import SignOutButton from "../../SignOut";
import { AuthUserContext } from "../../Sessions";
import "./nav.scss";

// import Nav from "./OurTool";

const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
);
const NavigationAuth = () => (
  <nav class="navbar navbar-expand-md" style={{ height: "5.5rem" }}>
    <div class="d-flex">
      <NavLink to="/">
        <img src={logo} class="logo" alt="logo" />
      </NavLink>
    </div>
    <div id="nav-buttons">
      <NavLink to="/">
        <SignOutButton />
      </NavLink>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <Navbar className="navbar" expand="md">
    <NavLink to="/sharespace" className="navbar-brand">
      <img src={logo} class="logo" alt="logo" />
    </NavLink>
    <Navbar.Toggle aria-controls="navbarContent"></Navbar.Toggle>

    <Navbar.Collapse id="navbarContent">
      <Nav className="mr-auto nav-links">
        <NavLink to="/aboutus" className="nav-item">
          <span>About us</span>
        </NavLink>
        <NavLink to="/ourtool" className="nav-item">
          <span>Our Tool</span>
        </NavLink>
        <NavDropdown title="Demo">
          <NavDropdown.Item>
            <NavLink to="/advocate/currentbookings">
              <span>Advocate View</span>
            </NavLink>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <NavLink to="/host/hostdash">
              <span>Host View</span>
            </NavLink>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <hr />
      <div id="nav-button">
        <NavLink to="/signin">
          <button class="btn btn-block btn-yellow-fill" id="log-in">
            Sign In
          </button>
        </NavLink>
      </div>
    </Navbar.Collapse>

    {/* <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarContent"
      aria-controls="navbarContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
      Menu
    </button> */}
    {/* <div className="nav-content collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav mr-auto justify-content-start align-items-center">
        <Link to="/aboutus" className="nav-item">
          <li class="nav-link">
            <b>ABOUT US</b>
          </li>
        </Link>

        <Link to="/ourtool" className="nav-item">
          <li class="nav-link">
            <b>OUR TOOL</b>
          </li>
        </Link>

        <Link to="/advocate/currentbookings" className="nav-item">
          <li class="nav-link">
            <b>ADVOCATE VIEW</b>
          </li>
        </Link>

        <Link to="/host/hostdash" className="nav-item">
          <li class="nav-link">
            <b>HOST VIEW</b>
          </li>
        </Link>
      </ul> */}
    {/* <div class="d-flex align-items-center"> */}
    {/* <form
        id="contact"
        class="d-flex justify-content-end align-items-center"
        action="https://formspree.io/sharespace.app@gmail.com"
        method="POST"
      >
        <div class="p-2">JOIN US</div>
        <div class="form-group pt-3 pr-2">
          <input
            id="emailAddress"
            type="email"
            class="form-control"
            placeholder="Enter email"
            name="_replyto"
            aria-label="Name"
            aria-describedby="basic-addon1"
            required
          />
        </div>
        <button type="submit" class="btn btn-sm btn-teal-fill">
          Submit
        </button>
        <input type="hidden" name="_next" value="/"></input>
      </form> */}

    {/* </div> */}
    {/* </div> */}
  </Navbar>
);

export default Navigation;
