import React, {useState, useEffect} from "react";
// import { makeStyles } from "@material-ui/core/styles"
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Paper } from "@material-ui/core";
import TransactionList from "../components/TransactionList"
import TransactionForm from "../components/TransactionForm";
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
    const [transactionData, setTransactionData] = useState({})
    const [postObject, setPostObject] = useState({})
    const [updateObject, setUpdateObject] = useState({})
    const classes = useStyles()

    function handlePostInputChange(event) {
        const { name, value } = event.target;
        setPostObject({...formObject, [name]: value})
     };

    function handleUpdateChange(event) {
        const { name, value } = event.target;
        setUpdateObject({...formObject, [name]: value})
    };
    const uploadTransaction = (e) => {
        e.preventDefault()
        if(postObject.type && postObject.name && postObject.amount){
            Axios({
                method: "POST",
                data: {
                    type: postObject.type,
                    name: postObject.name,
                    value: postObject.amount
                },
                withCredentials: true,
                url: "http://localhost:3001/api/auth/transaction",
            }).then(res => {
                console.log(res)
                changeFalseStatus();
            })
        }
    }
    const loadData = () => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: "http://localhost:3001/api/auth/transaction",
        }).then(res => {
            console.log(res)
            setTransactionData(res)
        })
    }
    const deleteData = (id) => {
        Axios({
            method: "DELETE",
            withCredentials: true,
            url: "http://localhost:3001/api/auth/transaction/" + id,
        }).then(res => {
            console.log(res)
            loadData()
        })
    }
    const updateData = (id) => {
        if(updateObject.type || updateObject.name || updateObject.amount){
            Axios({
                method: "PUT",
                data: {
                    type: updateObject.type,
                    name: updateObject.name,
                    value: updateObject.value
                },
                withCredentials: true,
                url: "http://localhost:3001/api/auth/transaction/"+id,
            }).then(res => {
                console.log(res)
                loadData()
            })
        }
    }
    useEffect(() => {
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
                                onChange={handlePostInputChange}
                                submitForm={uploadTransaction} 
                            />
                        </div>

                    </Paper>
                </Grid>
                <Grid item lg={8} sm={12} xs={12}>
                    <Paper className={classes.paper} elevation={6} >
                        <TransactionList
                            data={transactionData}
                            onChange= {handleUpdateChange}
                            submitupdate={()=>updateData(item._id)} 
                            submitdelete = {()=>deleteData(item._id)}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default TransactionPage