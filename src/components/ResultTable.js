import React from "react";

function ResultTable(props) {
  return (<div>
    
        
   {props.results.map(result => (
         <table className="table">  <tr>
            <th scope="col"></th>
          <th scope="col"> Name</th>
          <th scope="col"> Telephone</th>
          <th scope="col">Email</th>
         
        </tr>
   
        <tr>   <img src={result.picture.large} alt={result.name.first} ></img>
          <td scope="row">{result.name.first}</td>
          <td scope="row">{result.cell}</td>
          <td scope="row">{result.email}</td>
         
        </tr>
     </table>
      ))} 
   </div>
  );
}

export default ResultTable;
