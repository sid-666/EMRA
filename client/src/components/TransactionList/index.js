import React from "react";
import { Paper, IconButton } from '@material-ui/core'
import { Delete } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';


const useStyles = makeStyles((theme) => ({
    gridList: {
        padding: '10px',
        maxHeight: '90%',
        overflowY: 'scroll'
    },
    paper: {
        borderRadius: '20px',
        position: 'relative',
        height: '90vh',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    transactionPaper: {
        marginBottom: '10px',
        paddingTop: '10px',
        background: 'rgb(245, 245, 220)',
        height: '70px',
        justifyContent: 'centre'
    }
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function TransactionList(props) {
    const classes = useStyles();

    return (
        <div className={classes.gridList}>
            <div>
                {props.data.map((item) => {

                    return (
                        <>
                            <Paper className={classes.transactionPaper} elevation={6}>
                                <div key={item.id.toString()} className="row" style={{ padding: '10px' }}>
                                    <div className="columns small-4 large-3" value={item._id} style={{ padding: '3px' }}>{item.type}</div>
                                    <div className="columns small-3 large-3" value={item._id} style={{ padding: '3px' }}>{item.name}</div>
                                    <div className="columns small-2 large-2" value={item._id} style={{ padding: '3px' }}>{item.value}</div>
                                    <div className="columns small-2 end large-2">
                                        <IconButton value={item.id} onClick={() => props.submitdelete(item.id)}>
                                            <Delete />
                                        </IconButton>
                                    </div>
                                </div>
                            </Paper>
                        </>

                    )
                })}
            </div>
        </div>
    );
}
