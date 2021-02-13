import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import PersonIcon from '@material-ui/icons/Person';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const UserProfile = (props) => {

    const handleFullNameChange = (e) => {};
    const handleEmailChange = (e) => {};
    const handlePasswordChange = (e) => {};
    const handleRePasswordChange = (e) => {};

    return(
        <div>
            <CssBaseline />
            <main className="layout">
                <Paper className="paper">
                    <Typography variant="h4">Registration</Typography>
                    <PersonIcon style={{ fontSize: 80 }}/>
                    <form className="form" onSubmit={() => {}}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="fullName">Full Name</InputLabel>
                            <Input
                                onChange={() => {}}
                                id="fullName"
                                name="fullName"
                                autoComplete="fullName"
                                value = {props.userData.fullName}
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                                disabled
                                id="email"
                                name="email"
                                autoComplete="email"
                                value = {props.userData.username}
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                onChange={() => {}}
                                id="password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="rePassword">Confirm Password</InputLabel>
                            <Input
                                onChange={() => {}}
                                id="rePassword"
                                name="rePassword"
                                autoComplete="rePassword"
                                autoFocus
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                            >Save
                            </Button>
                        </FormControl>
                    </form>
                </Paper>
            </main>
        </div>
    );
};