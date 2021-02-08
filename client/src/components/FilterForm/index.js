import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    formControl: {
        display: 'flex',
        alignContent: 'centre',
        margin: theme.spacing(2),
        width: '100vw',
        minWidth: 120,
        [theme.breakpoints.down(('sm'))]: {
            display: 'block',
            width: '100%',
            marginLeft: '30px'
        }
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    selectField: {
        width: '40vw',
        justifyContent: 'centre',
        [theme.breakpoints.down(('sm'))]: {
            width: '100%',
            marginLeft: '10px'
        }
    },
    gap: {
        margin: '10px'
    }
}));

export default function FilterForm(props) {
    const classes = useStyles();

    return (
        <div className={classes.formControl}>

            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
                className={classes.selectField}
                native
                onChange={props.setStartDate}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
            >
                {props.filterdates.map((item) => {
                    return (
                        <option>{item}</option>
                    )
                })}
            </Select>
            <InputLabel htmlFor="filled-age-native-simple">Age</InputLabel>
            <Select
                className={classes.selectField}
                native
                onChange={props.setEndDate}
                inputProps={{
                    name: 'age',
                    id: 'filled-age-native-simple',
                }}
            >
                {props.filterdates.map((item) => {
                    return (
                        <option>{item}</option>
                    )
                })}
            </Select>
            <div className={classes.gap}></div>
            <Button variant='contained' color='secondary' onClick={props.submit}>Submit</Button>
        </div>
    );
}