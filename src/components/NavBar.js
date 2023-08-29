import React from 'react'
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
// const NavBar = () => {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle(){
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
  return (
    // <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light px-2">
    //         <a className="navbar-brand" href="/"><h3>CRUD</h3></a>
    //         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //         <span class="navbar-toggler-icon"></span>
    //         </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //         <ul class="navbar-nav">
    //             <li className="nav-item active">
    //                 <Link to="/read" className='text-decoration-none'>
    //                     <button className="nav-link ">Read</button>
    //                 </Link>
    //             </li>
    //             <li className="nav-item">
    //                 <a className="nav-link" href="/">Create</a>
    //             </li>
    //         </ul>
    //     </div>
    // </nav>
    <div>
        <Navbar className="nav-dark" color="light" light expand="md">
          <NavbarBrand href="/"><b>CRUD</b></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                   <Link to="/login" className='text-decoration-none mx-1'>
                         <button className="btn btn-outline-primary px-2">Login</button>
                    </Link>
              </NavItem>
              <NavItem>
                    <Link to="/register" className='text-decoration-none mx-1'>
                         <button className="btn btn-outline-danger px-2">Register</button>
                    </Link>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
  )
}
}
// export default NavBar;