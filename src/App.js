import React, { useState , useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import {Login} from './components/Login';
import {UserProfile} from './components/UserProfile';
import {Main} from './components/Main';

const App = () => {

    localStorage.setItem("Username", "daniel@gmail.com");
    localStorage.setItem("Password", "daniel@gmail.com");
	
	let initialLoggedInState = localStorage.getItem("isLoggedIn");
	if(initialLoggedInState === "false"){
		initialLoggedInState = false;
	} else if (initialLoggedInState === "true"){
		initialLoggedInState = true;
	}

    const[isLoggedInState,setIsLoggedInState] = useState(initialLoggedInState);

    const[itemsState,setItemsState] = useState([]);

    const[userState,setUserState] = useState({
        username: "",
        password: "",
        fullName: ""
    });

    useEffect(() => {
        axios.get("https://taskplannerieti-default-rtdb.firebaseio.com/items.json")
            .then(response => {
                let result = response.data;
                let items = Object.keys(result)
                    .map(key => result[key]);
                setItemsState(items);
            }).catch(error => {
                alert("Fallo de Conexión con DB");
            });
    },[]);

    useEffect(() => {
        axios.get("https://taskplannerieti-default-rtdb.firebaseio.com/user.json")
            .then(response => {
                let result = response.data;
                let userData = Object.keys(result)
                    .map(key => result[key]);
                setUserState(userData[0]);
            }).catch(error => {
                alert("Fallo de Conexión con DB");
            });
    },[]);

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
        axios.post("https://taskplannerieti-default-rtdb.firebaseio.com/items.json",newItem)
            .then(response => {
                const newItems = [...itemsState,newItem];
                setItemsState(newItems);
            }).catch(error => {
                alert("Fallo de Conexión con DB");
        });
    }

    const LoginView = () => (<Login
        successful={handleSuccessfullyLogin}
        failed={handleFailedLogin}
    />);

    const MainView = () => (<Main
        items={itemsState}
        logout={handleLogout}
        userData={userState}
        addTask={handleAddNewTask}
    />);

    const UserView = () => (<UserProfile
        userData={userState}
    />);

    return (
        <Router>
            <div className="App">
                <Route exact path="/" component={isLoggedInState ? MainView : LoginView}/>
                <Route path="/home" component={isLoggedInState ? MainView : LoginView}/>
                <Route path="/user" component={isLoggedInState ? UserView : LoginView}/>
            </div>
        </Router>
    );
}

export default App;
