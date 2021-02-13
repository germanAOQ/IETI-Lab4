import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Task} from './Task';
import {NavBar} from './NavBar';
import {NewTask} from './NewTask';

export const Main = (props) => {

    return(
        <div>
            <NavBar logout={props.logout} userData={props.userData}/>
            {props.items.map((item,i) => {
                return (<Task key={i}
                    description={item.description}
                    responsible={item.responsible}
                    status={item.status}
                    dueDate={item.dueDate}/>
                );
            })}
            <NewTask email={props.userData.username} addTask={props.addTask}/>
        </div>
    );
}