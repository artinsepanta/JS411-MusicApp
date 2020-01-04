import React from 'react';
import { AppBar, Button, TextField, Typography } from '@material-ui/core';

const Login = props => (
	<div className="login-container">
		<AppBar position="static">
			<Typography>Sign In</Typography>
		</AppBar>
		<form className="login-form">
			<TextField
				variant="outlined"
				margin="normal"
				
				fullWidth
				id="email"
				label="Email Address"
				name="email"
				autoComplete="email"
				autoFocus
			/>
			<TextField 
				variant="outlined"
				margin="normal"
				
				fullWidth
				name="password"
				label="Password"
				type="password"
				id="password"
				autoComplete="current-password"
			/>
			<Button
				fullWidth
				variant="contained"
				color="primary"
				onClick={() => { props.Login() }}
			>Login</Button>
		</form>
	</div>
)

export default Login;
