import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function Parameters(props) {
  const classes = useStyles();
  const parameters = props.parameters;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Parameter Name</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Required Parameter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parameters.map((parameter) => (
            <TableRow key={parameter.ParameterName}>
              <TableCell component="th" scope="row">
                {parameter.ParameterName}
              </TableCell>
              <TableCell align="right">{parameter.ParameterDescription}</TableCell>
              <TableCell align="right">{parameter.ParameterIsRequiredFlag == 1 ? 'True' : 'False'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Parameters;
