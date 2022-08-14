import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavBar extends Component {
    state = {
        isloggedin: false,
    }
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Task Manager</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            {this.state.isloggedin && <Navbar.Text>Signed in as: <a href="#login">Mark Otto</a></Navbar.Text>}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default NavBar;