import { Grid } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import logoipsum from '../../assets/logoipsum.svg'

function Footer() {
    return (
        <Grid container justifyContent="space-between" alignItems="center">
            <Grid item xs={3}>
                <img src={logoipsum} alt="No image" />
            </Grid>
            <Grid item container xs={6} justifyContent={"center"} spacing={3}>
                <Grid item>
                    <p>Home</p>
                </Grid>
                <Grid item>
                    <p>Portfolio</p>
                </Grid>
                <Grid item>
                    <p>About me</p>
                </Grid>
                <Grid item>
                    <p>Testimonials</p>
                </Grid>
                <Grid item>
                    <p>Portfolio</p>
                </Grid>
            </Grid>
            <Grid item container xs={3} justifyContent={"flex-end"}>
                <Grid item>
                    <FacebookIcon />
                    <InstagramIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </Grid>

            </Grid>

        </Grid>
    )
}

export default Footer