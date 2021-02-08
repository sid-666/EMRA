import React, { useState, useEffect, useContext } from "react";
// import { makeStyles } from "@material-ui/core/styles"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
import TransactionList from "../components/TransactionList"
import TransactionForm from "../components/SearchForm";
import Axios from 'axios'
import DataContext from "../context/UserTransactionData"
// import DataGrid from "../components/DataGrid"

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            marginTop: '3%',
            padding: '1%'
        },
        paper: {
            position: 'relative',
            height: '80vh',
            padding: theme.spacing(1.5),
            paddingTop: theme.spacing(4),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        transactionPaper: {
            marginBottom: '10px',
            paddingTop: '10px',
            background: 'yellow',
            height: '50px',
            justifyContent: 'centre'
        }
    }),
);

const TransactionPage = () => {
    const { changeFalseStatus } = useContext(DataContext)
    const [transactionData, setTransactionData] = useState([])
    // const [postObject, setPostObject] = useState({})
    const [type, setType] = useState("")
    const [name, setName] = useState("")
    const [amount, setAmount] = useState("")
    const classes = useStyles()


    const uploadTransaction = (e) => {
        e.preventDefault()
        Axios({
            method: "POST",
            data: {
                type: type,
                name: name,
                value: amount
            },
            withCredentials: true,
            url: "http://localhost:3001/api/auth/transaction",
        }).then(res => {
            console.log(res)
            loadData()
            changeFalseStatus();
        })

    }
    const loadData = () => {
        console.log("I am here in LoadData")
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/api/auth/transaction",
        }).then(res => {
            console.log(res)
            setTransactionData(res.data)
        })
    }
    const deleteData = (id) => {
        console.log(typeof id)
        Axios({
            method: "DELETE",
            withCredentials: true,
            url: `http://localhost:3001/api/auth/transaction/${id}`,
        }).then(res => {
            console.log(res)
            loadData()
        })
    }

    useEffect(() => {
        console.log("I am here")
        loadData();
    }, [])
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item lg={4} sm={12} xs={12}>
                    <Paper className={classes.paper} elevation={6}>
                        <div className={classes.divScroller}>
                            <TransactionForm
                                data={transactionData}
                                setType={(e) => setType(e.target.value)}
                                setName={(e) => setName(e.target.value)}
                                setAmount={(e) => setAmount(e.target.value)}
                                submitForm={uploadTransaction}
                            />
                        </div>

                    </Paper>
                </Grid>
                <Grid item lg={8} sm={12} xs={12}>
                    <Paper className={classes.paper} elevation={6} >
                        <TransactionList
                            data={transactionData}
                            submitdelete={deleteData}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default TransactionPage