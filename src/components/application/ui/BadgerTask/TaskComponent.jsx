import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const TaskCard = styled.div`

`;

function TaskComponent(props) {
    return (
        <TaskCard>
            <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                be
                {bull}
                nev
                {bull}o{bull}
                lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                adjective
                </Typography>
                <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Complete</Button>
            </CardActions>
            </Card>
        </TaskCard>
    );
}

export default TaskComponent;