import React, {useState} from 'react';
import styled from 'styled-components';
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

const ImgStyle = styled.div`
	img {
		width: 128px;
		height: 112px;
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
    margin-top: 100px;
    height: 100%;
    clear: both;
    width: 100%;
    padding-left: 100px;
    @media screen and (max-width: 500px) {
        padding-left: 0px;
    }
    h2 {
        margin 5px 0 40px 0;
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
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [firstName, setfirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	
	const classes = useStyles();

    const handleSubmit = e => {
		e.preventDefault();
		console.log('Hi from submit!');
    };

    
	return (
	<ContentContainer>
		<ImgStyle>
			<img src={process.env.PUBLIC_URL + '/Badger.jpg'} />
		</ImgStyle>
		<h2>My Profile</h2>
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
						onChange={e => setfirstName(e.target.value)}
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
						error={
							!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
								String(email).toLowerCase(),
							)
						}
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
			</Grid>
		</form>
	</ContentContainer>
);
    
}

const mapStateToProps = state => ({ user: state.users.user })

export default connect(mapStateToProps, {})(BadgerProfile);