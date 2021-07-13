import '@fontsource/roboto'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      // width: theme.spacing(80),
      // height: theme.spacing(50),
    },
  },
}));

const About = () => {
  const classes = useStyles()

  return (
    <>
      <Container
        maxWidth='lg'
        className={classes.root}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <Typography 
          variant='h2'
          marginLeft='15px'
          marginBottom='20px'
        >
          Hi, I'm Jacob. I'm a...
          </Typography>
        <Paper elevation={3} style={{ padding: '15px', display: 'flex' }}>
          <Typography variant='h4'>
            Fullstack developer in training with a background in SaaS sales. I'm building out my portfolio as I finish up UCI's coding bootcamp so hang tight for more updates.
            <br/>
            <br/>
            Also an avid runner and mountain biker who knows way too much about Star Wars, Marvel, and the Cosmere so feel free to geek out.
            <br/>
            <br/>
            Interested in all things fin-tech, B2B Marketing and RevOps, blockchain, smart contracts, Ethereum and DeFi.
          </Typography>
          <img src='https://i.postimg.cc/Njfzsfyv/00100lr-PORTRAIT-00100-BURST20200828161547179-COVER.jpg' alt='Jacob Zavita' />
        </Paper>

      </Container>
    </>
  )
}

export default About
