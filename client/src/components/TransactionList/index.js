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
export default function TransactionList(props) {
    const classes = useStyles();

    return (
        <div className={classes.gridList}>
            <div>
                {props.data.map((item) => {

                    return (
                        <>
                            <Paper className={classes.transactionPaper} elevation={6}>
                                <div className="row" style={{ padding: '10px' }}>
                                    <div className="columns small-3 large-2" style={{ padding: '3px' }}>{item.date}</div>
                                    <div className="columns small-1 large-3" onChange={props.onChange} contentEditable style={{ padding: '3px' }}>{item.type}</div>
                                    <div className="columns small-3 large-3" onChange={props.onChange} contentEditable style={{ padding: '3px' }}>{item.name}</div>
                                    <div className="columns small-1 large-2" onChange={props.onChange} contentEditable style={{ padding: '3px' }}>{item.amount}</div>
                                    < div className="columns small-2 large-2" >
                                        <IconButton onClick={props.submitupdate}>
                                            <Edit />
                                        </IconButton>
                                    </div>
                                    <div className="columns small-2 end large-2">
                                        <IconButton onClick={props.submitupdate}>
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
