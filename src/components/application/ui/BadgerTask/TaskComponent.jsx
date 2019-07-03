import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TaskCard = styled.div`

`;

const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    submit: {
        borderRadius: 2,
    }
  });

function TaskComponent(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <TaskCard>
            <Card className={classes.card}>
            <CardContent>
                <Typography variant="h5" component="h2">
                {bull}{props.task.description} 
                </Typography>
                <br />
            </CardContent>
            <CardActions>
                <Button
                    fullWidth
                    variant='contained'
                    style={{ color: '#FFFFFF', backgroundColor: '#2439A8' }}
                    className={classes.submit}
                    size="small">
                    Complete
                </Button>
            </CardActions>
            </Card>
        </TaskCard>
    );
}

export default TaskComponent;