import React from 'react';
import Registration from '../containers/Registration';
import Button from '../containers/Button';
import NewsItem from '../containers/NewsItem';
import EmployeeList from '../containers/EmployeeList';

let App = () => (
    <div>
        <Registration />
        <Button />
        <NewsItem />
        <EmployeeList />
    </div>
);
export default App;