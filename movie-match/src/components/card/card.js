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
    maxWidth: "50em"
  },
  media: {
    height: "20em",
  }
}));

export default function MovieCard() {
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
                image="data:image/jpeg;base64,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"
              />
            </CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                The Matrix (1999)
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.
              </Typography>
              {/* <Button onClick={useEffect()}>
                Click
              </Button> */}
            </CardContent>
          </Card>

            </Grid>
          </Grid>
    </>
  )
}