import React from "react";
import { TextField, Button, makeStyles, InputAdornment } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        '&. MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        }
    },
    button: {
        borderColor: 'black',
        marginTop: theme.spacing(2),
        width: '20%'
    },
    breaks: {
        marginBottom: '40px'
    },
    headerFont: {
        fontStyle: 'italic'
    }

}));
const TransactionForm = (props) => {
    const classes = useStyles();

    return (
        <form style={{ padding: "5px" }} className={classes.root}>

            <strong><h1 className={classes.headerFont}>Transaction Input</h1></strong>
            <div className={classes.breaks} />
            <TextField
                onChange = {props.onChange}
                style={{ width: '80%', height: '60px' }}
                className={classes.inputArea}
                variant="outlined"
                name="category"
                size={'small'}
                label="Category"
                InputProps={{
                    endAdornment: (
                        <datalist id="category">
                            {props.data.map((item)=>{
                                return(<option value={item.type}>{item.type}</option>)
                            })}
                        </datalist>
                    ),
                    inputProps: {
                        list: "rfc"
                    }
                }}
            />
            <TextField
                onChange = {props.onChange}
                style={{ width: '80%', height: '60px' }}
                className={classes.inputArea}
                label="Name"
                variant="outlined"
            />
            <div className={classes.breaks}></div>

            <TextField
                onChange = {props.onChange}
                style={{ width: '80%', height: '60px' }}
                label="Amount"
                id="outlined-start-adornment"
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                variant="outlined"
            />
            <div className={classes.breaks}></div>
            <Button label="Submit" variant='contained' color='primary' className={classes.button} onClick={props.submitForm} >
                Submit
            </Button>
        </form>

    )
}
export default TransactionForm