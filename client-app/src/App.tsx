import React, { Component } from "react";
import { Header, Icon, List } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    Values: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/api/Values").then((response) => {
      this.setState({
        Values: response.data,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <Header as="h2">
          <Icon name="users" />
          <Header.Content>Reactivities</Header.Content>
        </Header>
        <List>
          {this.state.Values.map((value: any) => (
            <List.Item key={value.id}>{value.name}</List.Item>
          ))}
        </List>
      </div>
    );
  }
}

export default App;
