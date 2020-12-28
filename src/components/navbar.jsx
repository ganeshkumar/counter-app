import React, { Component } from 'react';

class NavBar extends Component {
  render() {
     return (
       <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar Count is - #{this.props.totalCounters}</a>
        </div>
      </nav>
     )
   }

  }

export default NavBar;
