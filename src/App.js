import React from "react";
import API from "./utils/API";

import ResultTable from "./components/ResultTable";
import SearchForm from "./components/SearchForm";





class App extends React.Component {
  state = {
   results: [],
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = async () => {
    const { data } = await API.getUsers();
    this.setState({ results: data.results });
  };

  render() {
    console.log(this.state);
  
   
    return <div>
      <h1>Employees go here</h1>   
       <SearchForm/>
      <ResultTable results={this.state.results}/>
  
      </div>
  }
}

export default App;
