import React, { useState } from 'react';
import qs from 'qs';
import axios from 'axios';
import {
	CssBaseline,
	Grid,
	Typography,
	TextField,
	Link,
	Checkbox,
	Button,
	Avatar,
	FormControlLabel,
	Container,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//Import diff components
// import Navbar from './Components/Header/Navbar';
const BackgroundImg =
	'https://static.photocrowd.com/img/registration_bg_2019.jpg';
//'https://images.unsplash.com/photo-1564475228765-f0c3292f2dec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1956&q=80';

const useStyles = makeStyles((theme) => ({
	mainDiv: {
		minHeight: '100vh',
		padding: '25px 5px',
		background: `url('${BackgroundImg}') no-repeat #212121`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		// backgroundColor: '#fff',
	},
	outterDiv: {
		backgroundColor: '#fff',
		color: '#222',
		borderRadius: '15px',
		boxShadow: '0px 0px 8px 0px rgba(0,0,0,0.51)',
		margin: 0,
		height: '120vh',
		[theme.breakpoints.down('sm')]: {
			height: '125vh',
		},
	},
	SectionHeadingDiv: {
		margin: '20px',
		color: '#FFF',
	},
	SectionHeading: {
		color: '#fff',
		fontStyle: 'italic',
		//color: '#212121',
		// backgroundColor: '#212121',
	},
	innerDiv: {
		padding: '0',
		marginTop: '10vh',
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

function SignUp() {
	const classes = useStyles();
	const [fnameReg, SetFnameReg] = useState();
	const [lnameReg, SetLnameReg] = useState();
	const [usernameReg, SetUsernameReg] = useState();
	const [emailReg, SetEmailReg] = useState();
	const [passwordReg, SetPasswordReg] = useState();

	const Register = () => {
		axios({
			method: 'post',
			url: 'http://localhost:3000/users/create',
			data: qs.stringify({
				fname: fnameReg,
				lastname: lnameReg,
				username: usernameReg,
				email: emailReg,
				password: passwordReg,
			}),
			headers: {
				'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
			}
		})
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<CssBaseline />
			{/* header */}
			{/* <Navbar /> */}
			<main className={classes.mainDiv}>
				<Container component="div" className={classes.innerDiv}>
					<Typography
						component="h4"
						variant="h4"
						color="textSecondary"
						className={classes.SectionHeading}
						style={{ marginTop: '15vh' }}
						gutterBottom>
						A world of great photo contests and awards, in one place
					</Typography>
					<Typography
						component="h1"
						variant="h5"
						className={classes.SectionHeading}
						gutterBottom>
						~Join Us today
					</Typography>
				</Container>

				<div align="center" xs={12}>
					<Container
						maxWidth="xs"
						justify="center"
						className={classes.outterDiv}>
						<div className={classes.paper}>
							<Avatar className={classes.avatar}>
								{/* <LockOutlinedIcon /> */}
							</Avatar>
							<Typography component="h1" variant="h5">
								Sign up
							</Typography>
							<form className={classes.form} noValidate>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											autoComplete="fname"
											name="firstName"
											variant="outlined"
											required
											fullWidth
											id="firstName"
											onChange={(event) =>
												SetFnameReg(event.target.value)
											}
											label="First Name"
											autoFocus
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											variant="outlined"
											required
											fullWidth
											id="lastName"
											onChange={(event) =>
												SetLnameReg(event.target.value)
											}
											label="Last Name"
											name="lastName"
											autoComplete="lname"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant="outlined"
											required
											fullWidth
											onChange={(e) =>
												SetEmailReg(e.target.value)
											}
											id="email"
											type='email'
											label="Email Address"
											name="email"
											autoComplete="email"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant="outlined"
											required
											fullWidth
											onChange={(event) =>
												SetUsernameReg(
													event.target.value
												)
											}
											type="text"
											label="Username"
											name="username"
											autoComplete="username"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant="outlined"
											required
											fullWidth
											name="password"
											label="Password"
											type="password"
											onChange={(event) =>
												SetPasswordReg(
													event.target.value
												)
											}
											id="password"
											autoComplete="current-password"
										/>
									</Grid>
									<Grid item xs={12}>
										<TextField
											variant="outlined"
											required
											fullWidth
											name="Password"
											label="Re-Password"
											type="password"
											id="Re-password"
											autoComplete="current-password"
										/>
									</Grid>
									<Grid item xs={12}>
										<FormControlLabel
											control={
												<Checkbox
													value="allowExtraEmails"
													color="primary"
												/>
											}
											label="I want to receive updates."
											color="Secondry"
										/>
									</Grid>
								</Grid>
								<Button
									type="submit"
									fullWidth
									variant="contained"
									color="primary"
									className={classes.submit}
									onClick={Register}>
									Sign Up
								</Button>
								<Grid
									container
									justify="center"
									m="10px"
									gutterBottom>
									<Grid item>
										<Link href="#" variant="body2">
											Already have an account? Sign in
										</Link>
									</Grid>
								</Grid>
							</form>
						</div>
					</Container>
				</div>
			</main>
		</>
	);
}

export default SignUp;
