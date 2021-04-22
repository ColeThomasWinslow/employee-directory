import React, { Component } from 'react'

export class SearchForm extends Component {
    render() {
        return (
          <div class="form-group">
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
           </div>
       
        )
    }
}

export default SearchForm
