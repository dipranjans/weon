import React, { Component } from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <Navbar
        alignLinks="right"
        brand={
          <NavLink
            to="/"
            className="brand-logo"
            style={{ paddingLeft: "10px" }}
          >
            WEON
          </NavLink>
        }
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
          draggable: true,
          edge: "left",
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          outDuration: 200,
          preventScrolling: true
        }}
        className="#388e3c green darken-2"
      >
        <NavLink
          to="/"
          exact
          activeClassName="#c5e1a5 light-green lighten-3"
          style={{ color: "black" }}
        >
          News
        </NavLink>
        <NavLink
          to="/faq"
          exact
          activeClassName="#c5e1a5 light-green lighten-3"
          style={{ color: "black" }}
        >
          FAQ
        </NavLink>
      </Navbar>
    );
  }
}

export default Nav;
