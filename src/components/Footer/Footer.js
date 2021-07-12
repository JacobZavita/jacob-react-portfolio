import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'


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
              <Box borderBottom={1}>Github</Box>
                <Link href='https://github.com/alwayssmellitfirst' color='#ffffff'>AlwaysSmellItFirst</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>LinkedIn</Box>
              <Link href='https://www.linkedin.com/in/jacob-zavita-34518b13/' color='#ffffff'>Jacob Zavita</Link>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Twitter</Box>
                <Link href='https://twitter.com/NewDevJourney' color='#ffffff'>@NewDevJourney</Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer