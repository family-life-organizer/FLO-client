import React, { useState } from 'react';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormHelperText from '@material-ui/core/FormHelperText';
import styled from 'styled-components';

const ImgStyle = styled.div`
	img {
		width: 86px;
		height: 72px;
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
		marginTop    : theme.spacing(3),
		marginBottom : theme.spacing(3),
	},
	submit    : {
		margin : theme.spacing(3, 0, 2),
	},
}));

function SignUp(props) {
	const classes = useStyles();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ username, setUsername ] = useState('');
	const [ firstName, setFirstName ] = useState('');
	const [ lastName, setLastName ] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		props.handleSubmit({ email, password, password2, username, firstName, lastName });
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<ImgStyle>
					<img src={process.env.PUBLIC_URL + '/Badger.jpg'} alt='Badger' />
				</ImgStyle>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								autoComplete='fname'
								name='firstName'
								variant='outlined'
								required
								fullWidth
								id='firstName'
								label='First Name'
								autoFocus
								value={firstName}
								onChange={e => setFirstName(e.target.value)}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='lastName'
								label='Last Name'
								name='lastName'
								autoComplete='lname'
								value={lastName}
								onChange={e => setLastName(e.target.value)}
							/>
							{props.errors &&
							props.errors.first_name && <span style={{ backgroundColor: 'red' }}>{props.errors.first_name}</span>}
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='username'
								label='Username'
								name='username'
								autoComplete='Username'
								value={username}
								onChange={e => setUsername(e.target.value)}
							/>
						</Grid>
						{props.errors && props.errors.userName && <span>{props.errors.username}</span>}
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='email'
								label='Email Address'
								name='email'
								autoComplete='email'
								value={email}
								error={props.errors && props.errors.email ? true : false}
								onChange={e => setEmail(e.target.value)}
							/>
							{props.errors && props.errors.email && <FormHelperText>{props.errors.email}</FormHelperText>}
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='Current Password'
								value={password}
								onChange={e => setPassword(e.target.value)}
							/>
							{props.errors && props.errors.password && <span>{props.errors.password}</span>}
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								name='confirmpassword'
								label='Confirm Password'
								type='password'
								id='confirmpassword'
								autoComplete='Confirm Password'
								value={password2}
								onChange={e => setPassword2(e.target.value)}
							/>
							{props.errors && props.errors.password2 && <span>{props.errors.password2}</span>}
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
						className={classes.submit}>
						Sign Up
					</Button>
					<Grid container justify='flex-end'>
						<Grid item>
							<Link onClick={() => props.handleToggle()} variant='body2' style={{ cursor: 'pointer' }}>
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

const mapStateToProps = state => ({ errors: state.auth.errors });

export default connect(mapStateToProps)(SignUp);

