import { Card } from "@mui/material"
import {CardContent} from "@mui/material"
import {CardHeader} from "@mui/material"
import {Typography} from "@mui/material"
import {Avatar} from "@mui/material"

import StarIcon from '@mui/icons-material/Star'
import StarBorderIcon from '@mui/icons-material/StarBorder';


function CustomerCard(props){
    const handleStar = () => {
        let res = []
        for (let i = 0; i<props.star; i++){
            res.push(<StarIcon key={i}/>)
        }
        if (props.star < 5){
            for (let i=res.length; i<5; i++){
                res.push(<StarBorderIcon key={i}/>)
            }
        }
        
        return res
    }
    
    return(
        <Card sx={{bgcolor: '#F5FCFF', border: 1, borderRadius: 2, borderColor: '#006B6A'}}>
            <CardContent>
                <div style={{display: 'flex', color:'#006B6A', paddingBottom: '1rem'}}>{handleStar()}</div>
                <Typography variant="body2" color="#1C1E53">
                    {props.content}
                </Typography>

            </CardContent>
            <CardHeader
                avatar={ <Avatar src={ props.image}/>}
                title={props.title}
                subheader={props.subheader}
            />

            
        </Card>
    )
}

export default CustomerCard

