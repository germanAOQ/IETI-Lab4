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

    const items = [{
        "description": "Do The NavBar",
        "responsible": {
            "name": "Daniel Walteros",
            "email": userData.username
        },
        "status": "In Progress",
        "dueDate": 156464645646
        },{
        "description": "Eat Lunch",
        "responsible": {
            "name": "Pepito Perez",
            "email": userData.username
        },
        "status": "Ready",
        "dueDate": 156475645646
        },{
        "description": "Go to the doctor",
        "responsible": {
            "name": "Juan Rodriguez",
            "email": userData.username
        },
        "status": "Done",
        "dueDate": 158464685646}
    ];

    const[itemsState,setItemsState] = useState(items);

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

    const handleAddNewTask = (newItem) => {
        const newItems = [...itemsState,newItem];
        setItemsState(newItems);
    }

    const LoginView = () => (<Login successful={handleSuccessfullyLogin} failed={handleFailedLogin}/>);
    const MainView = () => (<Main items={itemsState} logout={handleLogout} userData={userData} addTask={handleAddNewTask}/>);

    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={isLoggedInState ? MainView : LoginView}/>
                <Route path="/home" component={isLoggedInState ? MainView : LoginView}/>
            </div>
        </Router>
    );
}

export default App;
