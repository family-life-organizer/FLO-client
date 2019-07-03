import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import FloNav from '../navbar/FloNav';
import Spinner from '../../../utils/Spinner';
import Footer from '../footer/Footer';
import { toast } from "react-toastify";
import { makeStyles } from '@material-ui/core/styles';
import {  doAddFamilyMember } from '../../../actions/userActions';
import { withRouter } from 'react-router-dom'

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

function AddBadger(props) {
	const [ badgerUser, setBadgerUser ] = useState('');
	const [ badgerPassword, setBadgerPassword ] = useState('');
	const [ badgerPassword2, setBadgerPassword2 ] = useState('');

	const classes = useStyles();

	const handleBadgerSubmit = e => {
		e.preventDefault();
		props.doAddFamilyMember({ username: badgerUser, password: badgerPassword, password2: badgerPassword2 })
		.then(() => {
      toast.success("Badger added successfully.")
      props.history.goBack()
		});
	};

	return (
		<ContentContainer>
			<FloNav />
			<ImgStyle>
				<img src={process.env.PUBLIC_URL + '/Badger.jpg'} alt="user avatar" />
			</ImgStyle>
		
			<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
				{props.isLoading && <Spinner /> }
			</div>
			
			<h2> Add New Badger </h2>
			<div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
				{props.isLoading && <Spinner /> }
			</div>
			<form className={classes.form} onSubmit={handleBadgerSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							name='badgerUsername'
							variant='outlined'
							fullWidth
							id='badgerUsername'
							label='Username'
							autoFocus
							autoComplete='Username'
							value={badgerUser}
							onChange={e => setBadgerUser(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant='outlined'
							fullWidth
							id='badgerPassword'
							label='Badger Password'
							name='badgerpassword'
							type='password'
							autoComplete='Password'
							value={badgerPassword}
							onChange={e => setBadgerPassword(e.target.value)}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant='outlined'
							fullWidth
							id='badgerPassword2'
							label='Confirm Badger Password'
							name='badgerPassword2'
							type='password'
							autoComplete='Password2'
							value={badgerPassword2}
							onChange={e => setBadgerPassword2(e.target.value)}
						/>
					</Grid>
				</Grid>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
					className={classes.submit}>
					Add New Badger
				</Button>
			</form>
			<Footer />
		</ContentContainer>
	);
}

const mapStateToProps = state => ({ user: state.users.user, isLoading: state.auth.isLoading, addBadger: state.auth.addBadger });

export default connect(mapStateToProps, { doAddFamilyMember })(withRouter(AddBadger));
