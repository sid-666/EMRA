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
    console.log(props)
    return (
        <form style={{ padding: "5px" }} className={classes.root} >

            <strong><h1 className={classes.headerFont}>Transaction Input</h1></strong>
            <div className={classes.breaks} />

            <TextField
                onChange={props.setType}
                style={{ width: '80%', height: '60px' }}
                className={classes.inputArea}
                label="Category"
                variant="outlined"
            />
            {/* {props.data.map((item) => {
                return (<p value={item.type}>{item.type}</p>)
            })} */}
            <TextField
                onChange={props.setName}
                style={{ width: '80%', height: '60px' }}
                className={classes.inputArea}
                label="Name"
                variant="outlined"
            />
            <div className={classes.breaks}></div>
            <div className={classes.breaks}></div>
            <TextField
                onChange={props.setAmount}
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