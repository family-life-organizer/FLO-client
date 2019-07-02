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
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
		backgroundColor : '#27AF55',
	},
	form      : {
		width     : '100%', // Fix IE 11 issue.
		marginTop : theme.spacing(1),
	},
	submit    : {
		margin : theme.spacing(3, 0, 2),
	},
}));

function SignIn(props) {
	const classes = useStyles();
	const handleSubmit = async e => {
		e.preventDefault();
		props.handleSubmit({ user, password });
	};

	const [ user, setUser ] = useState('');
	const [ password, setPassword ] = useState('');
	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<ImgStyle>
					<img src={process.env.PUBLIC_URL + '/Badger.jpg'} />
				</ImgStyle>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form className={classes.form} noValidate onSubmit={handleSubmit}>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='user'
						label='Email or Username'
						name='user'
						autoComplete='user'
						autoFocus
						value={user}
						onChange={e => setUser(e.target.value)}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
					<FormControlLabel control={<Checkbox value='remember' color='primary' />} label='Remember me' />
					<Button
						type='submit'
						fullWidth
						variant='contained'
						style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
						className={classes.submit}>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='#' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link onClick={() => props.handleToggle()} variant='body2' style={{ cursor: 'pointer' }}>
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}

const mapStateToProps = state => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps)(SignIn);
