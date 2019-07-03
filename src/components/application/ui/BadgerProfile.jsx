import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import { doUpdateAccount} from '../../../actions/userActions';
import FloNav from '../navbar/FloNav';
import Spinner from '../../../utils/Spinner';
import Footer from '../footer/Footer';
import { toast } from "react-toastify";

const ImgStyle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	img {
		width: 128px;
		height: 112px;
		margin: 0 auto;
		@media screen and (max-width: 500px) {
			width: 86px;
			height: 78px;
		}
	}
`;

const ContentContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
	justify-content: center;
	margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 100px;
    height: 100%;
	clear: both;
	background-color: #FFFFFF;
	width: 100%;
    @media screen and (max-width: 500px) {
        padding-left: 0px;
	}
	form {
		width: 70%;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		text-align: center;
		button {
			width: 50%;
			margin-bottom: 50px;
			@media screen and (max-width: 500px) {
				width: 80%;
			}
		}
		p {
			width: 100%;
			text-align: center;
		}
	}
    h2 {
        margin: 5px 0 40px 0;
        font-family: 'Nunito', sans-serif;
        font-weight: bolder;
        font-size: 2.2rem;
        width: 100%;
        text-align: center;
        @media screen and (max-width: 500px) {
            font-size: 1.8rem;
        }
    }
`;

const useStyles = makeStyles(theme => ({
	'@global' : {
		body : {
			backgroundColor : '#FFFFFF',
		},
	},
	paper     : {
		marginTop     : theme.spacing(2),
		display       : 'flex',
		flexDirection : 'column',
		alignItems    : 'center',
	},
	avatar    : {
		margin          : theme.spacing(1),
		backgroundColor : '#27AF55',
	},
	form      : {
		width        : '100%', // Fix IE 11 issue.
		marginTop    : theme.spacing(1),
		marginBottom : theme.spacing(1),
	},
	submit    : {
		margin : theme.spacing(3, 0, 2),
	},
}));

function BadgerProfile(props) {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ firstName, setfirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');
	const [ email, setEmail ] = useState('');

	const classes = useStyles();

	const handleUpdateSubmit = e => {
		e.preventDefault();
		if (firstName === '') {
			setfirstName(props.user.firstName)
		}
		if (lastName === '') {
			setLastName(props.user.lastName)
		}
		if (email === '') {
			setEmail(props.user.email)
		}
		if (username === '') {
			setUsername(props.user.username)
		}
		if (password === password2) {
			props.doUpdateAccount({ firstName, lastName, email, password, username })
			.then(() => toast.success("Account update successfully."))
		} else {
			toast.error('Password must match')
		}
	};

	return (
		<ContentContainer>
			<FloNav />
			<ImgStyle>
				<img src={process.env.PUBLIC_URL + '/Badger.jpg'} alt="user avatar" />
			</ImgStyle>
			<h2>Update Profile</h2>
			<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
				{props.isLoading && <Spinner /> }
			</div>
			<form className={classes.form} onSubmit={handleUpdateSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<TextField
							name='firstName'
							variant='outlined'
							fullWidth
							id='firstName'
							label='First Name'
							autoFocus
							autoComplete={props.user.firstName}
							value={firstName}
							onChange={e => setfirstName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant='outlined'
							fullWidth
							id='lastName'
							label='Last Name'
							name='lastName'
							autoComplete={props.lastName}
							value={lastName}
							onChange={e => setLastName(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							fullWidth
							id='username'
							label='Username'
							name='username'
							autoComplete={props.username}
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete={props.email}
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='Password'
							required
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							fullWidth
							name='confirmpassword'
							label='Confirm Password'
							type='password'
							id='confirmpassword'
							autoComplete='Password'
							required
							value={password2}
							onChange={e => setPassword2(e.target.value)}
						/>
					</Grid>
					<p>
						{!firstName && !lastName && !email && !password && !password2 && !username ? (
							'Must fill out atleast one field to update'
						) : null}
					</p>
				</Grid>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
					className={classes.submit}>
					Update Profile
				</Button>
			</form>
			<Footer />
		</ContentContainer>
	);
}

const mapStateToProps = state => ({ user: state.users.user, isLoading: state.auth.isLoading, updateAccount: state.auth.updateAccount, addBadger: state.auth.addBadger });

export default connect(mapStateToProps, { doUpdateAccount})(BadgerProfile);
