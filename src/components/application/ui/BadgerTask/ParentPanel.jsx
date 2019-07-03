import React, { useState } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { doCreateCategory, doCreateTask } from '../../../../actions/userActions';
import DatePicker from 'react-datepicker';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import FloNav from '../../navbar/FloNav';
import Footer from '../../footer/Footer';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';

const ContentContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	margin-top: 100px;
	margin-bottom: 100px;
	height: 100%;
	width: 100%;
	h2 {
		width: 100%;
		text-align: center;
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
`;

const useStyles = makeStyles(theme => ({
	'@global' : {
		body : {
			backgroundColor : '#FFFFFF',
		},
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
	const [ dueDate, setDueDate ] = useState(Date.now());
	const [ categoryId, setCategoryId ] = useState(0);
	const classes = useStyles();
	const handleNewCategory = e => {
		e.preventDefault();
		props.doCreateCategory({ name: catName });
		setCatName('');
	};

	const handleNewTask = e => {
		e.preventDefault();
		const { assigneeId } = props;
		const newTask = { description, dueDate, categoryId, assigneeId };
		props.doCreateTask(newTask);
	};

	return (
		<ContentContainer>
			<FloNav />
			<h2>Create Task Category</h2>
			<form className={classes.form} onSubmit={handleNewCategory}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							name='catName'
							variant='outlined'
							fullWidth
							id='catName'
							label='Category Name'
							autoFocus
							autoComplete='Category'
							value={catName}
							onChange={e => setCatName(e.target.value)}
						/>
					</Grid>
				</Grid>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
					className={classes.submit}>
					Create Category
				</Button>
			</form>
			<h2>Create Task</h2>
			<form className={classes.form} onSubmit={handleNewTask}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<TextField
							name='description'
							variant='outlined'
							fullWidth
							id='description'
							label='Task Description'
							autoFocus
							autoComplete='description'
							value={description}
							onChange={e => setDescription(e.target.value)}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={4}>
					<Grid style={{ marginTop: '10px' }} item xs={12}>
						<FormControl className={classes.formControl}>
							<InputLabel shrink>Category</InputLabel>
							<Select
								value={categoryId}
								onChange={e => setCategoryId(e.target.value)}
								// input={<Input name='category' id='category-input' />}
								className={classes.selectEmpty}>
								{props.categories.map(category => (
									<MenuItem key={category.id} value={category.id}>
										{category.name}
									</MenuItem>
								))}
							</Select>
							<FormHelperText>Select a category</FormHelperText>
						</FormControl>
					</Grid>
					<Grid style={{ marginBottom: '10px' }} item xs={12}>
						<FormControl style={{ width: '100%' }} className={classes.formControl}>
							<DatePicker
								style={{ width: '100%' }}
								selected={dueDate}
								onChange={date => setDueDate(date)}
								showTimeSelect
								dateFormat='Pp'
							/>
							<FormHelperText>Select a due date</FormHelperText>
						</FormControl>
					</Grid>
				</Grid>
				<Button
					type='submit'
					fullWidth
					variant='contained'
					style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
					className={classes.submit}>
					Create Task
				</Button>
			</form>
			<Footer />
		</ContentContainer>
	);
}

const mapStateToProps = state => ({ categories: state.tasks.categories, assigneeId: state.auth.token.id });

export default connect(mapStateToProps, { doCreateCategory, doCreateTask })(ParentPanel);
