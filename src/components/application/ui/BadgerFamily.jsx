import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { doUpdateTask } from "../../../actions/userActions";
import FloNav from "../navbar/FloNav";
import Footer from "../footer/Footer";
import styled from "styled-components";
import FamilyCard from "../card/FamilyCard";
import Person from "@material-ui/icons/Person";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { toast } from "react-toastify";

const ImgStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 128px;
    height: 112px;
    margin: 0 auto;
    @media screen and (max-width: 500px) {
      width: 86px;
      height: 78px;
    }
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 340px;
  flex-wrap: wrap;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 100%;
  width: 100%;
  h2 {
    width: 100%;
    text-align: center;
  }
  form {
    width: 70%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    button {
      width: 50%;
      margin: 50px 0 50px 0;
      @media screen and (max-width: 500px) {
        width: 80%;
      }
    }
    p {
      width: 100%;
      text-align: center;
    }
  }
`;

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: "#FFFFFF"
    }
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function BadgerFamily(props) {
  const [taskId, setTaskid] = useState(0);
  const [childId, setChildId] = useState(0);
  const [memberId, setMemberid] = useState(0);

  const classes = useStyles();

  const clickHandler = (e, id) => {
    e.preventDefault();
    setMemberid(id);
  };

  const handleAssign = e => {
    e.preventDefault();
    props.doUpdateTask(taskId, childId);
    // setMemberid(0);
    // setTaskid(0);
  };

  if (props.isTaskAssigned) {
	  toast.success("Task Assigned Successfully");
  }
  return (
    <ContentContainer>
      <FloNav />
      <ImgStyle>
        <img src={process.env.PUBLIC_URL + "/Badger.jpg"} />
      </ImgStyle>
      <h2>Family</h2>
      <Icons>
        {props.family.map(member => (
          <FamilyCard
            text={member.username}
            id={member.id}
            Icon={Person}
            clickHandler={clickHandler}
          />
        ))}
      </Icons>
      <h2 style={{ paddingTop: "30px" }}>Assign Task</h2>
      <form className={classes.form} onSubmit={handleAssign}>
        <FormControl style={{ width: "60%" }} className={classes.formControl}>
          <InputLabel shrink>Task</InputLabel>

          <FormHelperText>Select a task</FormHelperText>

          <Select
            value={taskId}
            onChange={e => setTaskid(e.target.value)}
            // input={<Input name='category' id='category-input' />}
            className={classes.selectEmpty}
          >
            {props.familyTasks.map(task => (
              <MenuItem key={task.id} value={task.id}>
                {task.description}
              </MenuItem>
            ))}
          </Select>

          <FormHelperText>Select a family member</FormHelperText>
          <Select
            value={taskId}
            onChange={e => setChildId(e.target.value)}
            className={classes.selectEmpty}
          >
            {props.family.map(family => (
              <MenuItem key={family.id} value={family.id}>
                {family.username}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          style={{ color: "#FFFFFF", backgroundColor: "#2439A8" }}
          className={classes.submit}
        >
          Assign
        </Button>
      </form>
      <Footer />
    </ContentContainer>
  );
}

const mapStateToProps = state => ({
  family: state.users.family,
  categories: state.tasks.categories,
  tasks: state.users.user.tasks,
  familyTasks: state.tasks.familyTasks,
  isTaskAssigned: state.tasks.isTaskAssigned
});

export default connect(
  mapStateToProps,
  { doUpdateTask }
)(BadgerFamily);
