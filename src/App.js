import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import {Login} from './components/Login';
import {Main} from './components/Main';

const App = () => {

    const userData = {
        username: "daniel@gmail.com",
        password: "12345",
        fullName: "Daniel Walteros"
    };

    localStorage.setItem("Username", userData.username);
    localStorage.setItem("Password", userData.password);
	
	let initialLoggedInState = localStorage.getItem("isLoggedIn");
	if(initialLoggedInState === "false"){
		initialLoggedInState = false;
	} else if (initialLoggedInState === "true"){
		initialLoggedInState = true;
	}

    const[isLoggedInState,setIsLoggedInState] = useState(initialLoggedInState);
	
    const handleSuccessfullyLogin = (e) => {
        setIsLoggedInState(true);
        localStorage.setItem("isLoggedIn", true);
        window.location.href = "/home";
    }

    const handleFailedLogin = (e) => {
        alert("Usuario o Clave Incorrectos");
        setIsLoggedInState(false);
        localStorage.setItem("isLoggedIn", false);
    }

    const handleLogout = () => {
        setIsLoggedInState(false);
        localStorage.setItem("isLoggedIn", false);
        window.location.href = "/";
    }

    const items = [{
        "description": "Do The NavBar",
        "responsible": {
            "name": userData.fullName,
            "email": userData.username
        },
        "status": "In Progress",
        "dueDate": 156464645646
        },{
        "description": "Eat Lunch",
        "responsible": {
            "name": userData.fullName,
            "email": userData.username
        },
        "status": "Ready",
        "dueDate": 156475645646
        },{
        "description": "Go to the doctor",
        "responsible": {
            "name": userData.fullName,
            "email": userData.username
        },
        "status": "Done",
        "dueDate": 158464685646}
    ];

    const LoginView = () => (<Login successful={handleSuccessfullyLogin} failed={handleFailedLogin}/>);
    const MainView = () => (<Main items={items} logout={handleLogout} userData={userData}/>);
    const View = isLoggedInState ? MainView : LoginView ;

    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={View}/>
                <Route path="/home" component={View}/>
            </div>
        </Router>
    );
}

export default App;
