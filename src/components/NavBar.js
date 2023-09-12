import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem 
  } from 'reactstrap';


export default class NavBar extends React.Component {    
      constructor(props) {
        super(props);
        this.name=localStorage.getItem("username")
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
      logout() {
         localStorage.removeItem("username");
         window.location.reload();
      }
      render() {
        if (localStorage.getItem("username")){
          return(
            <div>
              <Navbar className="nav-dark" color="light" light expand="md">
              <NavbarBrand href="/"><b>CRUD</b></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ms-auto" navbar>  
                  <UncontrolledDropdown nav inNavbar >
                    <DropdownToggle nav caret>
                    <b>{this.name}</b>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <Link to="/profile">
                        <button className='btn'>Profile</button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <Link to="/todo">
                        <button className='btn'>ToDo</button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        <NavItem>
                          <button className=" px-2" onClick={this.logout}>Logout</button>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          )
        }
        else if(!localStorage.getItem("username")) {
            return(
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
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
            )
        } else {
          return (
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
                    </Nav>
                  </Collapse>
                </Navbar>
              </div>
          )
        }
      }
}
// export default NavBar;