import Menu from "../../components/Menu";
import SkillCard from "../../components/SkillCard";
import ProjectCard from "../../components/ProjectCard";
import CustomerCard from "../../components/CustomerCard";
import SimpleTextField from "../../components/SimpleTextField";
import SelectField from "../../components/SelectField";
import MessageTextField from "../../components/MessageTextField";

import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { createSvgIcon } from "@mui/material/utils";
import {Checkbox} from "@mui/material";
import {FormControlLabel} from "@mui/material";

import avatar from "../../assets/avatar.svg";
import avatar2 from "../../assets/avatar2.svg";
import strat from "../../assets/strat-logo.svg";
import brand from "../../assets/brand-logo.svg";
import ui from "../../assets/ui-ux-logo.svg";
import webflow from "../../assets/webflow-logo.svg";
import Social from "../../assets/socialicon.svg?react"
import ahuse from "../../assets/ahuse.svg"
import appDashboard from "../../assets/app-dashboard.svg"
import easyRent from "../../assets/easy-rent.svg"
import cus1 from "../../assets/cus1.svg"
import cus2 from "../../assets/cus2.svg"
import cus3 from "../../assets/cus3.svg"

const SocialIcon = createSvgIcon(
  <Social viewBox="0 0 50 50" />, 'Social'
)

function Home() {
  return (
    <Grid container direction="column" >
      <Grid item>
        <Menu />
      </Grid>

      <Grid item container justifyContent="space-between" alignItems="center" style={{ background: "#F5FCFF", padding: '2.5rem' }}>
        <Grid item container xs={6} direction="column" spacing={2}>
          <Grid item>
            <p style={{ fontSize: '16px', fontWeight: '500', color: '#282938' }}>
              Hey, I am John
            </p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: '56px', fontWeight: '900', color: '#282938' }}>
              I create <span style={{ color: '#5E3BEE' }}>product design</span>
            </p>
            <p style={{ fontSize: '56px', fontWeight: '700', color: '#282938' }}>and brand experience</p>
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
          <img src={avatar} style={{ width: '100%', height: '100%' }} />
        </Grid>
      </Grid>

      {/* Skill */}
      <Grid item container direction={"column"} style={{ padding: '2.5rem', marginTop: '5rem' }}>
        <Grid item>
          <p style={{ fontSize: '16px', color: '#282938', fontWeight: '500' }}>My Skills</p>
        </Grid>
        <Grid item>
          <p style={{ fontSize: '56px', fontWeight: '700', color: '#282938' }}>My Expertise</p>
        </Grid>
        <Grid item container columnSpacing={46} sx={{ my: '5rem' }}>
          <Grid item xs={2}>
            <SkillCard icon={strat} title='Strategy & Direction' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          </Grid>
          <Grid item xs={2}>
            <SkillCard icon={brand} title='Branding & Logo' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          </Grid>
          <Grid item xs={2}>
            <SkillCard icon={ui} title='UI & UX Design' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          </Grid>
          <Grid item xs={2}>
            <SkillCard icon={webflow} title='Webflow Development' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.' />
          </Grid>
        </Grid>
      </Grid>

      {/* About me */}
      <Grid item container justifyContent={'space-between'} alignItems="center" sx={{ my: '5rem' }} >
        <Grid item xs={6}>
          <img src={avatar2} style={{ width: '75%', height: '75%', paddingLeft: '2.5rem' }} />
        </Grid>
        <Grid item container xs={6} direction="column" spacing={2} sx={{ pr: '5rem' }}>
          <Grid item>
            <p style={{ fontSize: '16px', fontWeight: '500', color: '#282938' }}>
              About
            </p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: '56px', fontWeight: '900', color: '#282938' }}>
              About Me</p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: '20px', color: '#1C1E53' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
            </p>
          </Grid>
          <Grid item>
            <p style={{ fontSize: '20px', color: '#1C1E53' }}>
              Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae. Amet pellentesque sit pulvinar lorem mi a, euismod risus r.
            </p>
          </Grid>
        </Grid>
      </Grid>

      {/* Portforlio */}
      <Grid item container direction={"column"} sx={{ my: '5rem', px: '2.5rem' }}>
        <Grid item>
          <p style={{ fontSize: '16px', color: '#282938', fontWeight: '500' }}>Recent Projects</p>
        </Grid>
        <Grid item container alignItems={'center'} justifyContent={'space-between'}>
          <Grid item>
            <p style={{ fontSize: '56px', fontWeight: '700', color: '#282938' }}>My Portfolio</p>
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<SocialIcon />} style={{ textTransform: 'none', background: '#E62872' }} >Visit My Dribbble</Button>
          </Grid>
        </Grid>
        <Grid item container justifyContent={'space-between'} sx={{ mt: '5rem' }}>
          <Grid item xs={3.5}>
            <ProjectCard image={ahuse} title="Ahuse" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
          </Grid>
          <Grid item xs={3.5}>
            <ProjectCard image={appDashboard} title="App Dashboard" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
          </Grid>
          <Grid item xs={3.5}>
            <ProjectCard image={easyRent} title="Easy Rent" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros." />
          </Grid>
        </Grid>
      </Grid>

      {/* Customer */}
      <Grid item container direction={"column"} sx={{ py: '5rem', px: '2.5rem', bgcolor: '#F5FCFF' }}>
        <Grid item>
          <p style={{ fontSize: '16px', color: '#282938', fontWeight: '500' }}>Clients Feedback</p>
        </Grid>
        <Grid item>
          <p style={{ fontSize: '56px', fontWeight: '700', color: '#282938' }}>Customer testimonials</p>
        </Grid>
        <Grid item container justifyContent={'space-between'} sx={{ mt: '5rem' }}>
          <Grid item xs={3}>
            <CustomerCard star={5} image={cus1} title="Dianne Russell" subheader="Starbucks" content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.' />
          </Grid>
          <Grid item xs={3}>
            <CustomerCard star={5} image={cus2} title="Kristin Watson" subheader="Louis Vuitton" content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.' />
          </Grid>
          <Grid item xs={3}>
            <CustomerCard star={0} image={cus3} title="Kathryn Murphy" subheader="McDonald's" content='"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.' />
          </Grid>
        </Grid>
      </Grid>

      {/* Contact form */}
      <Grid item container direction={"column"} alignItems={"center"} spacing={1} sx={{ my: '5rem', px:'8rem' }}>
        <Grid item>
          <p style={{ fontSize: '16px', color: '#282938', fontWeight: '500' }}>Get In Touch</p>
        </Grid>
        <Grid item>
          <p style={{ fontSize: '56px', fontWeight: '700', color: '#282938' }}>Contact me</p>
        </Grid>
        <Grid item>
          <p style={{ fontSize: '20px', color: '#1C1E53' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Grid>
        <Grid item container justifyContent={"space-between"} sx={{mt:'2.5rem'}}>
          <Grid item xs={5}>
            <SimpleTextField title="First name" type="text" />
          </Grid>
          <Grid item xs={5}>
            <SimpleTextField title="Last name" type="text" />
          </Grid>
        </Grid>
        <Grid item container justifyContent={"space-between"} sx={{mt:'1.5rem'}}>
          <Grid item xs={5}>
            <SimpleTextField title="Email" type="text" />
          </Grid>
          <Grid item xs={5}>
            <SimpleTextField title="Phone number" type="tel" />
          </Grid>
        </Grid>
        <Grid item sx={{width:'100%' ,mt:'1.5rem'}}>
          <SelectField title="Choose a topic"/>
        </Grid>
        <Grid item sx={{width:'100%' ,mt:'1.5rem'}}>
          <MessageTextField title="Message" type="text"/>
        </Grid>
        <Grid item sx={{width:'100%'}}>
        <FormControlLabel required control={<Checkbox />} label="I accept the terms" />
        </Grid>
        <Grid item >
          <Button variant="contained" style={{textTransform: 'none', background: '#5E3BEE', width:'6rem', height:'3rem'}}>Submit</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;