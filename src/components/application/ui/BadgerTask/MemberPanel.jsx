import React, {Component} from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import TaskComponent from './TaskComponent';
import FloNav from '../../navbar/FloNav';
import Footer from '../../footer/Footer';

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
`;

class MemberPanel extends Component {
    render() {
    return (
        <ContentContainer>
            <FloNav />
                {props.tasks.map(task => <TaskComponent task={task} />)}
            <Footer />
        </ContentContainer>
    );
    }
}

const mapStateToProps = state => ({ tasks: state.users.user.tasks })

export default connect(mapStateToProps, {})(MemberPanel);