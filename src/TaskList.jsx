import React, { useEffect, useState } from "react";
import { postRequest } from "./utils/requests";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { IsValidCredential } from "./utils/verify";

const TaskList = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState(<center><h1>No tasks</h1></center>);
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password'); 
    const fetchPosts = () => {
        IsValidCredential(username, password).then((res) => {
            !res && navigate('/login');
        })
        postRequest('http://localhost:4000/alltasks', {
            "username": username,
            "password": password
        }).then(res => {
            if (res !== {}) {
                // console.log(res)
                setCards(
                    res.map(task => {
                        return (
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h4 className="card-title">Task for {task.assignedToUsername}</h4>
                                        <p className="card-text">
                                            {task.textContent}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )
                )
            }
        })
    }

    useEffect(() => {
        fetchPosts();
    })

    //console.log(cards);

    return (
        <React.Fragment>
            <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
                <div className="container">
                    <div className="navbar-brand d-flex align-items-center">
                        <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                viewBox="0 0 16 16"
                                className="bi bi-list-task"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
                                />
                                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                <path
                                    fillRule="evenodd"
                                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
                                />
                            </svg>
                        </span>
                        <span>Task List</span>
                    </div>
                    <button className="btn btn-primary" type="button">
                        Create
                    </button>
                    <div
                        className="collapse navbar-collapse flex-grow-0 order-md-first"
                        id="navcol-6"
                    >
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item" />
                            <li className="nav-item" />
                        </ul>
                        <div className="d-md-none my-2">
                            <button className="btn btn-light me-2" type="button">
                                Button
                            </button>
                            <button className="btn btn-primary" type="button">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className="d-none d-md-block" />
                </div>
            </nav>
            <div class="container py-4 py-xl-5">
                <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                    {cards}
                </div>
            </div>
        </React.Fragment>
    );
}

export default TaskList;