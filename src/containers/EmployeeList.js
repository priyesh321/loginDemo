import React from 'react';
import { connect } from 'react-redux'
const imgStyle = {
    hight: 'auto',
    width: '80%',
    border: '4px solid RebeccaPurple ',
    borderRadius: '5%'
};
const articleStyle = {
    width: '50%',
    margin: '0 auto',
    color: 'olive'
}

let EmployeeList = ({ dataList = [] }) => {
    if (dataList.length !== 0) {
        return (
            dataList.map((data, index) => {
                return (
                    <article key={index} style={articleStyle} >
                        <div>
                            <h1>{data.employee_name}</h1>
                            <a href={data.id} target="_blank">Employee Details</a>
                        </div>
                    </article>
                )
            }))
    } else {
        return null
    }

}

const mapStateToProps = (state) => ({
    dataList: state.data,
})

export default connect(mapStateToProps, null)(EmployeeList);
