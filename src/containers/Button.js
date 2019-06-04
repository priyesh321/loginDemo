import React from 'react';
import { connect } from 'react-redux';
import { getRegister } from '../actions/index'
let Button = ({ getRegister }) => (
    <button onClick={getRegister}>Register</button>
)
const mapDispatchToProps = {
    getRegister: getRegister,
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button;