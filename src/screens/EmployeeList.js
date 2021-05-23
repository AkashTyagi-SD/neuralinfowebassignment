import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'email', numeric: false, disablePadding: false, label: 'Email' },
    {
        id: 'designation',
        numeric: false,
        disablePadding: false,
        label: 'Designation',
    },
    { id: 'location', numeric: false, disablePadding: false, label: 'Location' },
    { id: 'edit', numeric: false, disablePadding: false, label: 'Edit' },
    { id: 'delete', numeric: false, disablePadding: false, label: 'Delete' },
];

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: -1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
    },
}));

export const EmployeeList = () => {
    const classes = useStyles();
    const { employees, removeEmployee } = useContext(GlobalContext);
    return (
        <Fragment>
            {employees.length > 0 ? (
                <Fragment>
                    <TableContainer>
                        <Table className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
                            <TableHead>
                                <TableRow>
                                    {headCells.map((headCell) => (
                                        <TableCell
                                            key={headCell.id}
                                            align={headCell.numeric ? 'right' : 'left'}
                                            padding={headCell.disablePadding ? 'none' : 'default'}
                                        >
                                            {headCell.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {employees.map((employee) => {
                                    return (
                                        <TableRow hover key={employee.id}>
                                            <TableCell component="th" scope="row" padding="none">
                                                {employee.name}
                                            </TableCell>
                                            <TableCell align="right">{employee.email}</TableCell>
                                            <TableCell align="right">{employee.designation}</TableCell>
                                            <TableCell align="right"> {employee.location}</TableCell>
                                            <TableCell align="right">
                                                {' '}
                                                {
                                                    <Link to={`/edit/${employee.id}`} title="Edit Employee">
                                                        <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="24"
                                                                height="24"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                strokeWidth="2"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                className="feather feather-edit"
                                                            >
                                                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                                            </svg>
                                                        </div>
                                                    </Link>
                                                }
                                            </TableCell>
                                            <TableCell align="right">
                                                {' '}
                                                {
                                                    <button
                                                        onClick={() => removeEmployee(employee.id)}
                                                        className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                                                        title="Remove Employee"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="feather feather-trash-2"
                                                        >
                                                            <polyline points="3 6 5 6 21 6" />
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                            <line x1="10" y1="11" x2="10" y2="17" />
                                                            <line x1="14" y1="11" x2="14" y2="17" />
                                                        </svg>
                                                    </button>
                                                }
                                            </TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Fragment>
            ) : (
                <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
            )}
        </Fragment>
    );
};
