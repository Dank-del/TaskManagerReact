import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class LoginPage extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <Form className="centered">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter username" />
                        <Form.Text className="text-muted">
                            We'll never share your data with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        );
    }
}

export default LoginPage;