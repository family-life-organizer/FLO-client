import React, { Component } from 'react';
// import styled from 'styled-components';
import Calendar from 'react-material-ui-calendar';
import { connect } from 'react-redux';
import FloNav from '../navbar/FloNav';
import Footer from '../footer/Footer';

class BadgerCalendar extends Component {
	dateSelection = value => {
		//This is where we want to do some sort of redirect to a list of tasks for that particular date
		//the value that's being passed in to this function is the date -> you can check the console for this
		//ultimately, whatever tasks are associated with the user will be passed down to the task viewer component
		console.log('The return value here is', value);
		console.log(this.props.user);
	};
	render() {
		return (
			<div>
				<FloNav />
				<Calendar
					generalStyle={{
						maxWidth        : '80%',
						margin          : '80px auto 0 auto',
						backgroundColor : 'rgba(256,256,256,1)',
						height          : '80%',
						overflow        : 'auto',
					}}
					light={true}
					selection={this.dateSelection}
				/>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	user : state.users.user,
});

export default connect(mapStateToProps, {})(BadgerCalendar);
