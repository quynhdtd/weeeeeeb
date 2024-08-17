import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import logo from '../../assets/logoipsum.svg'

function Menu() {
  return (
      <Grid container justifyContent="space-between" alignItems="center" spacing={40} style={{padding: '1rem 2rem'}}>
        <Grid item xs={3}> 
            <img src={logo} alt="No iumage" />
        </Grid>
        
        <Grid container item xs={6} style={{color: '#1C1E53'}}>
            <Grid item xs={3}>
                <p>Home</p>
            </Grid>
            <Grid item xs={3}>
                <p>Portfolio</p>
            </Grid>
            <Grid item xs={3}>
                <p>About me</p>
            </Grid>
            <Grid item xs={3}>
                <p>Testimonials</p>
            </Grid>
        </Grid>
        <Grid item xs={3}>
            <Button variant="outlined" style={{textTransform: 'none', borderColor: '#5E3BEE', color: "#5E3BEE"}}>Contact Me</Button>    
        </Grid>
      </Grid>
  );
}

export default Menu