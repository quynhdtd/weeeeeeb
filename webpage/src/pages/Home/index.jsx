import Menu from "../../components/Menu";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import avatar from "../../assets/avatar.svg";

function Home() {
  return (
    <Grid container direction="column" >
      <Grid item>
        <Menu />
      </Grid>
      <Grid item container justifyContent="space-between" alignItems="center" style={{ background: "#F5FCFF", padding: '2.5rem'}}>
        <Grid item container xs={6} direction="column" spacing={2}>
          <Grid item>
            <p style={{ fontSize: '16px', color: '#282938' }}>
              Hey, I am John
            </p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: '56px', fontWeight: '900', color: '#282938' }}>
              I create <span style={{ color: '#5E3BEE' }}>product design</span>
            </p>
            <p style={{ fontSize: '56px', fontWeight: 'bold', color: '#282938' }}>and brand experience</p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: '20px', color: '#1C1E53' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p style={{ fontSize: '20px', color: '#1C1E53' }}>
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </Grid>
          <Grid item>
            <Button variant="contained" style={{ textTransform: 'none', background: '#5E3BEE', marginTop: '40px' }}>Get in Touch</Button>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <img src={avatar} style={{width: '100%', height:'100%'}} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
