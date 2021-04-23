import React, { Component } from "react";
import SearchForm from "./SearchForm";
import ResultTable from "./ResultTable"
import API from "../utils/API";

class SearchResultContainer extends Component {

    state = {
        results: [],  
        search: "",
       };


       getEmployees = async () => {
         const { data } = await API.getUsers();
         this.setState({ results: data.results });
       }; 

        componentDidMount() {
         this.getEmployees();
       };
   
     handleInputChange = event => {
       // Getting the value and name of the input which triggered the change
       const name  = event.target.name;
       const search = event.target.value
     console.log(search);
       // Updating the input's state
       this.setState({
         [name]: search
       });
       }; 
       handleFormSubmit = event => {
       event.preventDefault();
       this.getEmployees(this.state.search);
       };
       render() {
         
         return (
         <div>
             <h1 className="display-4" >Searching For {this.state.search}</h1>  
           <h1 className="display-4" >Employee Directory</h1>   
            <SearchForm  search={this.state.search}
               handleFormSubmit={this.handleFormSubmit}
               handleInputChange={this.handleInputChange}/>
           <ResultTable search={this.state.search} results={this.state.results}/>
       </div>
           );
        }  
       }
export default SearchResultContainer;
