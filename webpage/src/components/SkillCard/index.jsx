import { Grid } from "@mui/material"
import {Box} from "@mui/material"

function SkillCard (props) {
    return(
        <Grid container direction='column' justifyContent={'space-between'} sx={{width: '340px', height: '300px', bgcolor: '#F5FCFF', borderRadius: 5}}>
            <Grid item xs={4}>
                <Box sx={{ml: 3, mt: 3, width: '80px', height: '80px', boxShadow: 3, borderRadius: '10%', bgcolor: '#FFFFFF', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <img src={props.icon} alt="" />
                </Box>
                
            </Grid>
            <Grid item xs={1} sx={{ml:3}}>
                <p style={{fontSize: '20px', fontWeight: '700', color:'#282938'}}>{props.title}</p>
            </Grid>
            <Grid item xs={3} sx={{ml:3, mr:5, mb: 3}}>
                <p style={{fontSize: '16px', color:'#1C1E53'}}>{props.content}</p>
            </Grid>
        </Grid>
    )
}

export default SkillCard