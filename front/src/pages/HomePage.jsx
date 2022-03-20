import React from "react";
import ReactSearchBox from "react-search-box";
import { useState, useEffect } from "react";
import dataINRApi from "../services/dataINRApi";
import AnalyseResult from "../components/AnalyseResult";

const HomePage = (props) => {
  const [dataINRCommune, setDataINRCommune] = useState([
    {
      key: "COM",
      value: "common",
    },
  ]);

  const [dataINR, setDataINR] = useState([
    {
      code_postal: "COM",
      commune: "Libcom",
      dep: "Libdep",
      region: "Libreg",
      pop: "P16 Pop",
      score_global_dep: "SCORE GLOBAL departement",
      score_global_region: "SCORE GLOBAL region",
      acces_information_dep: "ACCES A L'INFORMATION departement",
      acces_information_region: "ACCES A L'INFORMATION region",
      acces_interface_numirique_dep: "ACCÈS AUX INTERFACES NUMERIQUES departement",
      acces_interface_numirique_region: "ACCÈS AUX INTERFACES NUMERIQUES region",
      competence_admin_dep: "COMPETENCES ADMINISTATIVES departement",
      competence_admin_region: "COMPETENCES ADMINISTATIVES region",
    },
  ]);

  const [result, setResult] = useState(null);

  const fetchDataINR = async () => {
    try {
      const data = await dataINRApi.findAll();
      setDataINR(data);

      let formatted = data.map((commune) => ({
        key: `${commune.code_postal}`,
        value: `${commune.commune}`,
      }));
      setDataINRCommune(formatted);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchDataINR();
  }, []);

  const handleSelect = (obj) => {
    const result = dataINR.filter(
      (data) => data.code_postal === obj.item.key
    );
    setResult(result[0]);
    console.log(result);
  };

  return (
    <>
      <div>
        <div className="card mb-5">
          <h3 className="card-header text-center">
            INDICE NATIONAL DE FRAGILITÉ NUMÉRIQUE
          </h3>
          <div className="card-body">
            <p className="card-text">
              Cet outil permet la visualisation d'indices de fragilité numérique
              territoire par territoire, que vous soyez une commune, un
              département ou une région et de le comparer avec les autres
              territoires.
            </p>
            <h5 className="card-title">Quelques images:</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <img src={require("../images/img1.jpeg")} />
                <img src={require("../images/img2.jpeg")} />
                <img src={require("../images/img3.jpeg")} />
              </li>
            </ul>
          </div>
          <div className="card-body">
            <ReactSearchBox
              placeholder="Recherchez une commune"
              data={dataINRCommune}
              onSelect={(obj) => handleSelect(obj)}
              onFocus={() => {
                console.log("This function is called when is focussed");
              }}
              onChange={(value) => console.log(value)}
              autoFocus
              iconBoxSize="48px"
            />
          </div>
          <div className="card-footer">
            <AnalyseResult result={result} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
