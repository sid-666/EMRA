import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, IconButton } from '@material-ui/core'
import { Edit, Delete } from '@material-ui/icons'
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
export default function TransactionList() {
    const classes = useStyles();

    return (
        <div className={classes.gridList}>
            <div>
                {top100Films.map((item) => {

                    return (
                        <>
                            <Paper className={classes.transactionPaper} elevation={6}>
                                <div className="row" style={{ padding: '10px' }}>
                                    <div className="columns small-3 large-3" contentEditable style={{ padding: '3px' }}>2020-03-5</div>
                                    <div className="columns small-3 large-3" contentEditable style={{ padding: '3px' }}>Joe sug</div>
                                    <div className="columns small-2 large-2" contentEditable style={{ padding: '3px' }}>$400</div>
                                    < div className="columns small-2 large-2" >
                                        <IconButton>
                                            <Edit />
                                        </IconButton>
                                    </div>
                                    <div className="columns small-2 end large-2">
                                        <IconButton>
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