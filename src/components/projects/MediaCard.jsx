import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Chip, Grid, Link } from '@mui/material';

const MediaCard = ({ project }) => {
  return (
    <Grid item xs={4}>
      <Card sx={{ maxWidth: 300 }} className = "project-card">
        <CardMedia
          sx={{ height: 140 }}
          component="img"
          src={project.imgPath}
          alt={project.imgAlt}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {project.title}
          </Typography>
            {project.tags.map((tag) => { return (
                <Chip label={tag} variant="outlined" color="secondary" size="small"
                  style={{ marginRight: "2%" }} /> )
            })}
          <Typography variant="body2" color="text.secondary" style={{ padding: "2%" }} >
            {project.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link href={project.url} target="_blank" rel="noopener">
            {project.urlType}
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MediaCard