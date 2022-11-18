import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from '@mui/material/Link';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function ProjectCard({project}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <Card sx={{ maxWidth: 345, margin: "20px" , fontSize: "10px" }}>
      <CardHeader
        sx={{fontSize: "12px"}}
        title={project.name}
        subheader={project.teamsize}
      />
      <Link href={project.github} underline="none" color="inherit">
        <CardMedia
          component="img"
          height="194"
          image={project.image}
          alt={project.name}
        />
      </Link>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.technologies}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="source code">
            <Link href={project.github} underline="none" color="inherit">
                <GitHubIcon />
            </Link>
        </IconButton>
        <IconButton aria-label="link">
            <Link href={project.deployed} underline="none" color="inherit">
                <LinkIcon />
            </Link>          
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="caption">
            {project.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}