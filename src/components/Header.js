import React,{ Component } from "react";
import "../css/styles.css";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    NavbarText,Modal, ModalHeader, ModalBody, ModalFooter
  } from 'reactstrap';
   class Header extends Component{
     constructor(props){
         super(props);
         this.state={
             isOpen:false,
             isModalOpen:false
         }
         this.toggle = this.toggle.bind(this);
         this.toggleModal = this.toggleModal.bind(this);
     }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    toggleModal(){
      this.setState({
        isModalOpen: !this.state.isModalOpen
      })
    }
     render(){        
        return(
            <div>
            <Navbar id="navbar" color="" light expand="sm">
              <NavbarBrand className=" text-white" href="/">reactstrap</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className=" text-white" href="/components/">Components</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className=" text-white" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                </Nav>
                <Button outline onClick={this.toggleModal} color="secondary">Login</Button>

              </Collapse>
            </Navbar>

      <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
        <ModalHeader toggle={this.toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>

          </div>
    );
     }

}

export default Header;