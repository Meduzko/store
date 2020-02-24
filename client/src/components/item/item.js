import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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

  //  console.log(props);

    const defaultUrl = 'https://res.cloudinary.com/practicaldev/image/fetch/s--bIcIUu5D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg';

    // const { thumbnailUrl } = this.props.props;
    return (
        <Card className={classes.card } data-id={props.id}>
            <CardActionArea data-item={'gallery-item'} onClick={props.selectItem}>
                <CardMedia
                    className={classes.media}
                    image={props.image || defaultUrl }
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
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button variant="contained" size="small" color="primary" className={classes.button}>
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
