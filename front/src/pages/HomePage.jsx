import React from "react";
import ReactSearchBox from "react-search-box";
import { useState, useEffect } from "react";
import dataINRApi from "../services/dataINRApi";
import AnalyseResult from "../components/AnalyseResult";

const HomePage = (props) => {
  const [dataINRCommune, setDataINRCommune] = useState([
    {
      key: "code",
      value: "commune",
    },
  ]);

  const [dataINR, setDataINR] = useState([
    {
      commune: "commune",
      departement: "departement",
      region: "region",
      scoreCommune: "score commune",
      scoreDepartement: "score departement",
      scoreRegion: "score region",
    },
  ]);

  const [dataINRPrototype, setDataINRPrototype] = useState([
    {
      code: "00000",
      codeDepartement: "00",
      codeRegion: "00",
      codesPostaux: ["00000"],
      nom: "Example commune",
      population: 1234,
    },
  ]);

  const [result, setResult] = useState(null);

  const fetchDataINR = async () => {
    try {
      const data = await dataINRApi.findAll();
      setDataINRPrototype(data);

      let formatted = data.map((commune) => ({
        key: `${commune.code}`,
        value: `${commune.nom}`,
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
    const result = dataINRPrototype.filter(
      (data) => data.code === obj.item.key
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
