import React from "react";

const AnalyseResult = ({ result }) => {
  return (
    <>
      {result && <>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Code postal</th>
              <th scope="col">Commune</th>
              <th scope="col">Département</th>
              <th scope="col">Région</th>
              <th scope="col">Population</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-success">
              <td>{result.code_postal}</td>
              <td>{result.commune}</td>
              <td>{result.dep}</td>
              <td>{result.region}</td>
              <td>{parseFloat(result.pop).toFixed(0)}</td>
            </tr>
          </tbody>
        </table>

        <div className="score-result global">
          <h3>
            Score global
          </h3>

          <div className="depart-reg">

            <div className="departement">
              <span className="score">{parseFloat(result.score_global_dep).toFixed(0)}</span>
              {result.dep}
            </div>

            <div className="region">
              <span className="score">{parseFloat(result.score_global_region).toFixed(0)}</span>
              {result.region}
            </div>

          </div>

        </div>

        <div className="score-result">
          <h3>
            Accès à l'information
          </h3>

          <div className="depart-reg">

            <div className="departement">
              <span className="score">{parseFloat(result.acces_information_dep).toFixed(0)}</span>
              {result.dep}
            </div>

            <div className="region">
              <span className="score">{parseFloat(result.acces_information_region).toFixed(0)}</span>
              {result.region}
            </div>

          </div>

        </div>

        <div className="score-result">
          <h3>
            Accès aux interfaces numériques
          </h3>

          <div className="depart-reg">

            <div className="departement">
              <span className="score">{parseFloat(result.acces_interface_numerique_dep).toFixed(0)}</span>
              {result.dep}
            </div>

            <div className="region">
              <span className="score">{parseFloat(result.acces_interface_numerique_region).toFixed(0)}</span>
              {result.region}
            </div>

          </div>

        </div>

        <div className="score-result">
          <h3>
            Compétences administratives
          </h3>

          <div className="depart-reg">

            <div className="departement">
              <span className="score">{parseFloat(result.competence_admin_dep).toFixed(0)}</span>
              {result.dep}
            </div>

            <div className="region">
              <span className="score">{parseFloat(result.competence_admin_region).toFixed(0)}</span>
              {result.region}
            </div>

          </div>

        </div>
      </>}
    </>
  );
};

export default AnalyseResult;
