import React from "react";
import API from "./utils/API";

// import SearchBar from "./components/Search";



class App extends React.Component {
  state = {
    employees: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ employees: data.results });
  };

  render() {
    console.log(this.state);
    return <h1>Employees go here</h1>;
  }
  render() {
    return (
      <div>
       <SearchResultContainer />
      </div>
    );
  }
}

export default App;
