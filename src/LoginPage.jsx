import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { IsValidCredential } from "./utils/verify";
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleCredentials = (e) => {
        if (username === "" || password === "") {
            alert('Please enter username and password correctly');
        }

        IsValidCredential(username, password).then(valid => {
            if (!valid) {
                alert('Invalid username or password');
            } else {
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                navigate('/tasks');
                alert('Login Successful');
            }
        });

        e.preventDefault();
    }

    return (
        <React.Fragment>
            <NavBar />
            <Form className="centered">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter username" onChange={handleUsernameChange.bind(this)} />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange.bind(this)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleCredentials.bind(this)} target='_self'>
                    Submit
                </Button>
            </Form>
        </React.Fragment>
    );
}

export default LoginPage;