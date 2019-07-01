import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
	'@global' : {
		body : {
			backgroundColor : theme.palette.common.white,
		},
	},
	paper     : {
		marginTop     : theme.spacing(8),
		display       : 'flex',
		flexDirection : 'column',
		alignItems    : 'center',
	},
	avatar    : {
		margin          : theme.spacing(1),
		backgroundColor : theme.palette.secondary.main,
	},
	form      : {
		width     : '100%', // Fix IE 11 issue.
		marginTop : theme.spacing(3),
	},
	submit    : {
		margin : theme.spacing(3, 0, 2),
	},
}));

export default function SignUp(props) {
	const classes = useStyles();
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ password2, setPassword2 ] = useState('');
	const [ userName, setUserName ] = useState('');
	const handleSubmit = e => {
		e.preventDefault();
		if (password === password2) {
			this.props.handleSubmit({ email, password, userName });
		}
	};
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign up
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='username'
								label='Username'
								name='username'
								autoComplete='Username'
								value={userName}
								onChange={e => setUserName(e.target.value)}
							/>
						</Grid>
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
								onChange={e => setEmail(e.target.value)}
							/>
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
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value='allowExtraEmails' color='primary' />}
								label='I want to receive inspiration, marketing promotions and updates via email.'
							/>
						</Grid>
					</Grid>
					<Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
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
