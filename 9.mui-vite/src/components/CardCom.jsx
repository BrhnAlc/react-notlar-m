
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea,  } from '@mui/material';
import Grid from '@mui/material/Grid';

import data from './../data';

export default function CardCom() {
  return (
    <>
      <Grid container>
        {data.map((id,text,img,name)=>(
            <Grid item key={id}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="name"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
            </Grid>
        ))}
      </Grid>
    </>
  );
}
