import React from 'react';
import { connect } from 'react-redux';
import ParentPanel from './ParentPanel';
import MemberPanel from './MemberPanel';

function BadgerTask(props) {
    return (
        <div>
        {props.user.isAdmin ? <ParentPanel /> : <MemberPanel />}
        </div>
    );
}

const mapStateToProps = state => ({user: state.users.user})

export default connect(mapStateToProps, {})(BadgerTask);