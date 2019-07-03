import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";
import FloNav from "../../navbar/FloNav";
import Footer from "../../footer/Footer";
import { withRouter } from "react-router-dom";
import { customAuth } from "../../../../api/customAuth";
import Button from "@material-ui/core/Button";
import Spinner from "../../../../utils/Spinner";
import { toast } from "react-toastify";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 100px;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 100px;
  height: 100%;
  width: 100%;
  padding: 20px;
  padding-top: 100px;
  position: relative;
  text-align: center;
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
    isLoading: true,
    tasks: []
  };

  componentDidMount() {
    this.fetchTasks();
  }
  createTask = () => {
    this.props.history.push("/manage/tasks");
  };
  approveTask = (taskId, status) => {
    this.setState({ isLoading: true});
    customAuth()
      .patch(`/tasks/${taskId}/approve`, { status })
      .then(() => {
        toast.success('Task approved successfully')
        this.fetchTasks();
        this.setState({ isLoading: false});
      })
      .catch(err => {
        toast.error('Could not approve task')
        this.setState({ isLoading: false});
      });
  };
  fetchTasks = () => {
    customAuth()
      .get("/tasks/family")
      .then(res => {
        this.setState({ isLoading: false, tasks: res.data.data });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <React.Fragment>
        <FloNav />
        <Wrapper>
          {this.state.isLoading && <Spinner />}
          <ContentContainer>
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
          </ContentContainer>
        </Wrapper>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.users.user,
    error: state.error
   };
};

export default connect(
  mapStateToProps,
  {}
)(withRouter(ParentPanel));
