import { Grid } from "@mui/material"
import {TextField} from "@mui/material"
import {Autocomplete} from "@mui/material"

function SelectField(props){
    const topics = ['Web Design', 'Web Development', 'App Development', 'UI Design', 'UX Design'];

    return(
        <div>
            <p style={{ fontSize: '16px', color: '#1C1E53', paddingBottom:'10px' }}>
                {props.title}
            </p>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={topics}
                sx={{  border: 1, borderColor: '#5E3BEE', borderRadius: '10px' }}
                renderInput={(params) => <TextField {...params} placeholder="Select one..." />}
            />
        </div>
    )
}

export default SelectField