import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MovieCard({movie}) {
    const navigate=useNavigate();
    const goToDetailsPage=()=>{
        navigate("/movies/"+ movie._id,{state:{movie}});
    }
    // console.log(movie);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={movie.posterUrl}
        title={movie.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {movie.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goToDetailsPage}>Show Details</Button>
      </CardActions>
    </Card>
  );
}
