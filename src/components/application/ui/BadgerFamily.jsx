import React, { Component } from 'react';
import { connect } from 'react-redux';

class BadgerFamily extends Component {
	render() {
		return (
			<div>
				<p> Placeholder </p>
			</div>
		);
	}
}

const mapStateToProps = state => ({ family: state.users.user.family });

export default connect(mapStateToProps, {})(BadgerFamily);
