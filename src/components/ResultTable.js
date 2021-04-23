import React from "react";

function ResultTable(props) {
  return (
 <div> 
   
   {props.results.map(result => (
          <table className="table">
          <tr>
          <th></th>
          <th>Name</th>
          <th>Telephone</th>
          <th>Email</th>
         </tr>
          <img src={result.picture.large} alt={result.name.first} ></img>
          <td >{result.name.first} {result.name.last}</td>
          <td >{result.cell}</td>
          <td >{result.email}</td>
    </table> 
      ))} 
     </div> 
  );
}

export default ResultTable;
