import React from "react";

const AnalyseResult = ({ result }) => {
  return (
    <>
      {result && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Code</th>
              <th scope="col">Code département</th>
              <th scope="col">Code région</th>
              {/* <th scope="col">Code postaux</th> */}
              <th scope="col">Nom</th>
              <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td>{result.code}</td>
              <td>{result.codeDepartement}</td>
              <td>{result.codeRegion}</td>
              {/* <td>{result.codesPostaux}</td> */}
              <td>{result.nom}</td>
              <td>{result.population}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default AnalyseResult;
