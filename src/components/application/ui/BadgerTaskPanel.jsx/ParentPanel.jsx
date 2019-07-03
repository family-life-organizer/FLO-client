import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import FloNav from '../navbar/FloNav';
import Footer from '../footer/Footer';
import Grid from '@material-ui/core/Grid';

const ContentContainer = styled.div``;

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
	form      : {
		width        : '100%', // Fix IE 11 issue.
		marginTop    : theme.spacing(1),
		marginBottom : theme.spacing(1),
	},
	submit    : {
		margin : theme.spacing(3, 0, 2),
	},
}));

function ParentPanel(props) {
	const [ catName, setCatName ] = useState('');
	const [ description, setDescription ] = useState('');
	const classes = useStyles();

	return (
		<ContentContainer>
			<h2>Create Task Category</h2>
		</ContentContainer>
	);
}
