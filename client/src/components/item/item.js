import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { openItemInPopup } from '../common/events';
import store from "../../store";
import {handleOpening, openProduct} from "../../actions";

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        display : 'inline-block',
        margin: 1 + 'em'

    },
    media: {
        height: 140,
    },
});

export default function Item(props) {
    const classes = useStyles();
    const { id } = props.opts;
    const getCardId = () => {
        store.dispatch(handleOpening(id));
        console.log( store.getState());
    };
    console.log(props);
    const defaultUrl = 'https://res.cloudinary.com/practicaldev/image/fetch/s--bIcIUu5D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg';
    // store.dispatch(handleOpening({ type: 'HANDLE_OPENING', payload: props.opts.id }));
    return (
        <Card className={classes.card } >
            <CardActionArea onClick={getCardId} data-item={'gallery-item'} data-id={props.opts.id} data-open={props.opts.isChecked}>
            {/*<CardActionArea onClick={ openItemInPopup } data-item={'gallery-item'} data-id={props.opts._id} data-open={props.opts.isChecked}>*/}
                <CardMedia
                    className={classes.media}
                    image={props.opts.thumbnailUrl ? props.opts.thumbnailUrl : defaultUrl}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button onClick={() => props.onItemClick(props.opts.id)} size="small" color="primary">
                    Share
                </Button>
                <Button variant="contained" size="small" color="primary" className={classes.button}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}





// function Item(props) {
//     console.log(props);
//     let defaultUrl = 'https://res.cloudinary.com/practicaldev/image/fetch/s--bIcIUu5D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg';
//     return (
//         <div className="item">
//         {/*<input*/}
//     {/*    type="checkbox"*/}
//     {/*    checked={props.item.completed}*/}
//     {/*    onChange={() => props.handleChange(props.item.id)}*/}
//     {/*/>*/}
//     {/*<p>{props.item.text}</p>*/}
//
//     <div>
//         <img alt={props.opts.poster} src={props.opts.poster ? props.opts.poster : defaultUrl}/>
//     </div>
//         <p> {props.opts.plot} </p>
//     </div>
//     )
// }
//
// export default Item;