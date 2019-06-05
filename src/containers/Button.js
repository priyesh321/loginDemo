import React from 'react';
import { connect } from 'react-redux';
import { getRegister, getEmployee } from '../actions/index'

// let Button = ({ getRegister }) => (
//     <button onClick={getRegister} style={{ marginTop: 20 }}>Register</button>
// )
let Button = ({ getEmployee }) => (
    <button onClick={getEmployee} style={{ marginTop: 20 }}>Employee List</button>
)

const mapDispatchToProps = {

    getEmployee: getEmployee
};
Button = connect(null, mapDispatchToProps)(Button);
export default Button