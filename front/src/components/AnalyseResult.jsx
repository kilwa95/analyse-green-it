import React from "react";

const AnalyseResult = ({ result }) => {
  return (
    <>
      {result && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Code postal</th>
              <th scope="col">Commune</th>
              <th scope="col">Département</th>
              <th scope="col">Région</th>
              <th scope="col">Population</th>
              <th scope="col">SCORE GLOBAL departement</th>
              <th scope="col">SCORE GLOBAL region</th>
              <th scope="col">ACCES A L'INFORMATION departement</th>
              <th scope="col">ACCES A L'INFORMATION region</th>
              <th scope="col">ACCÈS AUX INTERFACES NUMERIQUES departement</th>
              <th scope="col">ACCÈS AUX INTERFACES NUMERIQUES region</th>
              <th scope="col">COMPETENCES ADMINISTATIVES departement</th>
              <th scope="col">COMPETENCES ADMINISTATIVES region</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td>{result.code_postal}</td>
              <td>{result.commune}</td>
              <td>{result.dep}</td>
              <td>{result.region}</td>
              <td>{parseFloat(result.pop).toFixed(0)}</td>
              <td>{parseFloat(result.score_global_dep).toFixed(2)}</td>
              <td>{parseFloat(result.score_global_region).toFixed(2)}</td>
              <td>{parseFloat(result.acces_information_dep).toFixed(2)}</td>
              <td>{parseFloat(result.acces_information_region).toFixed(2)}</td>
              <td>{parseFloat(result.acces_interface_numerique_dep).toFixed(2)}</td>
              <td>{parseFloat(result.acces_interface_numerique_region).toFixed(2)}</td>
              <td>{parseFloat(result.competence_admin_dep).toFixed(2)}</td>
              <td>{parseFloat(result.competence_admin_region).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </>
  );
};

export default AnalyseResult;
