import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const TaskCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    backgroundColor: "#A8A8A8"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  submit: {
    borderRadius: 2,
    width: "50%"
  }
});

function TaskComponent(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <TaskCard>
      <Card className={classes.card}>
        {!props.task && !props.isAdmin && (
          <React.Fragment>
            <CardContent>
              <Typography
                style={{ fontWeight: "bolder" }}
                variant="h5"
                component="h2"
              >
                You have No assigned task at the moment
              </Typography>
              <br />
              <Typography variant="h6" component="h3">
                Now you can go and play
              </Typography>
            </CardContent>
          </React.Fragment>
        )}
        {!props.task && props.isAdmin && (
          <React.Fragment>
            <CardContent>
              <Typography
                style={{ fontWeight: "bolder" }}
                variant="h5"
                component="h2"
              >
                Your Family has no Task at the moment
              </Typography>
              <br />
              <Typography variant="h6" component="h3">
                You can start by creating tasks
              </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              <Button
                fullWidth
                variant="contained"
                style={{ color: "#FFFFFF", backgroundColor: "#2439A8" }}
                className={classes.submit}
                size="medium"
                onClick={props.createTask}
              >
               Create Tasks
              </Button>
            </CardActions>
          </React.Fragment>
        )}
        {props.task && (
          <React.Fragment>
            <CardContent>
              <Typography
                style={{ fontWeight: "bolder" }}
                variant="h5"
                component="h2"
              >
                {props.task.description}
              </Typography>
              <br />
              <Typography variant="h6" component="h3">
                {moment(props.task.dueDate).format("llll")}
              </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
              {!props.isAdmin && (
                <Button
                  fullWidth
                  variant="contained"
                  style={{ color: "#FFFFFF", backgroundColor: "#2439A8" }}
                  className={classes.submit}
                  size="small"
                  onClick={props.completeTask}
                >
                  Complete
                </Button>
              )}
              {props.isAdmin && props.task.status !== "approved" ? (
                <Button
                  fullWidth
                  variant="contained"
                  style={{ color: "#FFFFFF", backgroundColor: "#2439A8" }}
                  className={classes.submit}
                  size="small"
                  onClick={() => props.approveTask("approved")}
                >
                  Approve
                </Button>
              ) : (
                ""
              )}
              {props.isAdmin && props.task.status === "completed" ? (
                <Button
                  fullWidth
                  variant="contained"
                  style={{ color: "#FFFFFF", backgroundColor: "#2439A8" }}
                  className={classes.submit}
                  size="small"
                  onClick={() => props.approveTask("declined")}
                >
                  Reject
                </Button>
              ) : (
                ""
              )}
            </CardActions>
          </React.Fragment>
        )}
      </Card>
    </TaskCard>
  );
}

export default TaskComponent;
