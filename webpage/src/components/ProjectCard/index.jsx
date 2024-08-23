import { Card } from "@mui/material"
import { CardMedia } from "@mui/material";
import {CardContent} from "@mui/material";
import {CardActions} from "@mui/material"
import {Button} from "@mui/material";

import { Typography } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';


function ProjectCard(props) {
    console.log(props.image)
    return (
        <Card sx={{boxShadow: 4}}>
            <CardMedia src={props.image} component={"img"}/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" color={"#282938"} sx={{fontWeight: '700'}}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="#1C1E53">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" endIcon={<ArrowOutwardIcon />}>View In Dribbble</Button>
            </CardActions>
        </Card>
    )
}

export default ProjectCard