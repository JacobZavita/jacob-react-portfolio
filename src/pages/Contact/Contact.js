import { makeStyles } from '@material-ui/core/styles'
import { Typography, Card, CardContent, Grid, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '89vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#042A2B',
  },
  headerText: {
    color: '#FCF7F8',
    textAlign: 'center',
    margin: '0 0 30px 15px'
  }
}))

const Contact = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Grid spacing={3}>
        <Grid item xs={12}>
          <Typography variant='h3' className={classes.headerText}>
            Let's Talk!
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Card style={{ maxWidth:500, margin:'0 auto', padding:'20px 5px' }}>
            <CardContent>
              <Typography variant='h5'>Contact Me</Typography>
                <Typography
                  variant='body2'
                  component='p'
                  gutterBottom
                  color='textSecondary'
                >
                  Send me an email and we'll go from there
                </Typography>
                  <form>
                    <Grid container spacing={1}>
                      <Grid
                        xs={12}
                        sm={6}
                        item
                      >
                        <TextField
                          label='First Name'
                          placeholder='Enter first name'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid
                        xs={12}
                        sm={6}
                        item
                      >
                        <TextField
                          label='Last Name'
                          placeholder='Enter last name'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type='email'
                          label='Email'
                          placeholder='Enter email address'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          type='number'
                          label='Phone Number'
                          placeholder='Enter phone number'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <TextField
                          label='Message'
                          multiline
                          rows={4}
                          placeholder='Type your message here'
                          variant='outlined'
                          fullWidth
                          required
                        />
                      </Grid>
                      <Grid xs={12} item>
                        <Button
                          type='submit'
                          variant='contained'
                          color='primary'
                          fullWidth
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default Contact
