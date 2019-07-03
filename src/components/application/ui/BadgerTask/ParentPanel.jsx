import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";
import FloNav from "../../navbar/FloNav";
import Footer from "../../footer/Footer";
import { withRouter } from "react-router-dom";
import { customAuth } from "../../../../api/customAuth";
import Button from "@material-ui/core/Button";

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
  padding: 20px;
  padding-top: 100px;
  position: relative;
  background-color: #ffffff;
  h2 {
    width: 100%;
    text-align: center;
  }
`;
const ActionContainer = styled.div`
  display: inline-block;
  position: absolute;
  right: 50px;
  top: 20px;
`;

class ParentPanel extends Component {
  state = {
    isLoading: false,
    tasks: []
  };

  componentDidMount() {
    this.fetchTasks()
  }
  createTask = () => {
    this.props.history.push("/manage/tasks");
  };
  approveTask = (taskId, status) => {
    customAuth().patch(`/tasks/${taskId}/approve`, { status })
    .then(res => {
      this.fetchTasks()
    })
    .catch(err => console.log(err))
  }
  fetchTasks = () => {
    customAuth()
      .get("/tasks/family")
      .then(res => {
        this.setState({ isLoading: false, tasks: res.data.data });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <ContentContainer>
        <FloNav />
        <ActionContainer>
          <Button
            fullWidth
            variant="contained"
            style={{ color: "#FFFFFF", backgroundColor: "#2439A8" }}
            size="medium"
            onClick={this.createTask}
          >
            Manage Tasks
          </Button>
        </ActionContainer>
        {!this.state.isLoading && !this.state.tasks.length && (
          <TaskComponent
            isAdmin={this.props.user.isAdmin}
            createTask={this.createTask}
          />
        )}
        {this.state.tasks &&
          this.state.tasks.map(task => (
            <TaskComponent
              key={task.id}
              task={task}
              isAdmin={this.props.user.isAdmin}
              approveTask={this.approveTask}
            />
          ))}
        <Footer />
      </ContentContainer>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.users.user };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(ParentPanel));
