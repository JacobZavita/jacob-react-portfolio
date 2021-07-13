import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'


const Footer = () => {

  return (
    <footer>
      <Box
        px={{ xs: 2, sm: 5}}
        py={{ xs: 4, sm: 5 }}
        bgcolor="#66b3ff"
        color="white"
        position='sticky'
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box marginBottom='10px'>Check out my work</Box>
                <Link href='https://github.com/alwayssmellitfirst' color='#ffffff'>
                  <GitHubIcon></GitHubIcon>
                </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>Take a look at my work history</Box>
              <Link href='https://www.linkedin.com/in/jacob-zavita-34518b13/' color='#ffffff'>
                <LinkedInIcon></LinkedInIcon>
              </Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>Follow me as I learn @NewDevJourney</Box>
                <Link href='https://twitter.com/NewDevJourney' color='#ffffff'>
                  <TwitterIcon></TwitterIcon>
                </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer