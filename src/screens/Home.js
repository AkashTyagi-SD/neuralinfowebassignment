import React, { Fragment } from 'react';
import { Heading } from '../common/Heading';
import { EmployeeList } from './EmployeeList';

export const Home = () => {
    return (
        <Fragment>
            <Heading />
            <EmployeeList />
        </Fragment>
    );
};
