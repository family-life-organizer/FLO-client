import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TaskComponent from "./TaskComponent";
import FloNav from "../../navbar/FloNav";
import Footer from "../../footer/Footer";
import { customAuth } from "../../../../api/customAuth";
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
  margin-top: 100px;
  margin-bottom: 100px;
  height: 100%;
  width: 100%;
  padding: 20px;
  background-color: #ffffff;
  h2 {
    width: 100%;
    text-align: center;
  }
`;

class MemberPanel extends Component {
  state = {
    isLoading: true,
    userDetails: null,
    tasks: []
  };

  componentDidMount() {
    this.fetchTasks();
  }
  fetchTasks = () => {
    this.setState({ isLoading: true });
    customAuth()
      .get(`/users/${this.props.user.id}`)
      .then(data => {
        this.setState({
          isLoading: false,
          userDetails: data.data.data,
          tasks: data.data.data.tasks
        });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  };
  completeTask = taskId => {
    customAuth()
      .patch(`/tasks/${taskId}`)
      .then(() => {
        toast.success("Submitted for approval");
        this.fetchTasks();
      })
      .catch(err => {
        toast.error("Failed to submit, try again");
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
            {!this.state.isLoading && !this.state.tasks.length && (
              <TaskComponent />
            )}
            {this.state.tasks &&
              this.state.tasks.map(task => (
                <TaskComponent
                  key={task.id}
                  task={task}
                  isAdmin={this.props.user.isAdmin}
                  completeTask={this.completeTask}
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
  return { user: state.users.user };
};

export default connect(
  mapStateToProps,
  {}
)(MemberPanel);
