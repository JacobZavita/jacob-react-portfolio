import '@fontsource/roboto'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const Portfolio = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        variant='h2'
        marginLeft='15px'
        marginBottom='30px'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        Portfolio
      </Typography>
      <br></br>
    <Container maxWidth='lg' style={{ display: 'flex' }}>
      <Card className={classes.root} style={{ margin: '15px' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.ibb.co/fn2t0LY/currency-converter.png"
            title="Currency Converter"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Currency Converter
          </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              See the value of fiat and crypto currencies in the top 40 fiat assets and crypto assets.
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href='https://charlottefrancis.github.io/CurrencyConverter/index.html'>
              See it live
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link href='https://charlottefrancis.github.io/CurrencyConverter/index.html'>
              github repo
            </Link>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root} style={{ margin: '15px' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.ibb.co/Jc7TzS1/password-generator.png"
            title="Password Generator"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                Password Generator
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Generate a random password between 8 and 128 characters based on user's character requirements.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Link href='https://alwayssmellitfirst.github.io/password_generator/'>
              See it live
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link href='https://github.com/alwayssmellitfirst/password_generator'>
              github repo
            </Link>
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root} style={{ margin: '15px' }}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.ibb.co/YX6RVFm/comiccol.png"
            title="ComiCol"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ComicCol
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              A full stack app for comic collectors to showcase their collection with ratings and reviews.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
              <Link href='https://comiccol.herokuapp.com/'>
              See it live
            </Link>
          </Button>
          <Button size="small" color="primary">
            <Link href='https://github.com/alwayssmellitfirst/ComicCol'>
              github repo
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Container>
   </>
  )
}

export default Portfolio