import React from 'react';
import { makeStyles, useTheme} from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  mainContainer: {

  },
  card: {
    marginTop: "10em",
    maxWidth: "35em",
    [theme.breakpoints.down("md")]: {
      marginTop: "6em",
      width: "30em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "17.5em"
    }
  },
  media: {
    height: "20em",
    [theme.breakpoints.down("md")]: {
      height: "17.5"
    },
    [theme.breakpoints.down("xs")]: {
      height: "15em"
    }
  },
  buttonContainer: {
    margin: theme.spacing(1)
  },
  buttonYes: {
    ...theme.typography.buttonMain,
    marginTop: "2em",
    marginLeft: "13em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "9em"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "2.3em"
    }
  },
  buttonNo: {
    ...theme.typography.buttonSecondary,
    marginTop: "2em",
    marginLeft: "4.5em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "3em"
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-.75em"
    }
  }
}));

export default function MovieCard(props) {
  const classes = useStyles();

  return (
    <>
      <Grid 
        container 
        direction="column"
        justify="flex-end"
        alignItems="center"
        >
        <Grid 
          item 
          >
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia 
                className={classes.media}
                image={props.poster}
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
               {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
             {props.overview}
              </Typography>
              <Grid container>
                <Grid item direction="row" className={classes.buttonContainer}>
              <Button className={classes.buttonNo}>
                Pass!
              </Button>
              <Button className={classes.buttonYes}>
                Watch!
              </Button>
                </Grid>

              </Grid>
            </CardContent>
          </Card>

            </Grid>
          </Grid>
    </>
  )
}