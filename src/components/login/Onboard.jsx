import React, {useState} from 'react';
import {doLogin, doRegisterAccount} from '../../actions/authActions';
import {connect} from 'react-redux';

const Onboard = ({doLogin, doRegisterAccount}) => {
    const [isLogin, setisLogin] = useState(true);
    const handleSubmit = values => {
      isLogin ? 
    }
    <>
     {isLogin ? <Login login={isLogin} handleSubmit={handleSubmit} handleToggle={setsLogin(!isLogin)} /> : <Register login={isLogin} handleSubmit={handleSubmit} handleToggle={setsLogin(!isLogin)}/>}
    </>
}

export default connect(null, {doLogin, doRegisterAccount});