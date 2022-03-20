import React from "react";
import ReactSearchBox from "react-search-box";
import { useState, useEffect } from "react";
import dataINRApi from "../services/dataINRApi";
import AnalyseResult from "../components/AnalyseResult";

const HomePage = () => {
  const [dataINRCommune, setDataINRCommune] = useState([
    {
      key: "COM",
      value: "common",
    },
  ]);

  const [result, setResult] = useState(null);

  const fetchDataINR = async () => {
    try {
      const data = await dataINRApi.findCommunes();
      setDataINRCommune(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchDataINR();
  }, []);

  const handleSelect = async (obj) => {
    const data = await dataINRApi.getIndice(obj.item.codePost);
    setResult(data);
  };

  return (
    <>
      <h1>
        INDICE NATIONAL DE <span>FRAGILITÉ NUMÉRIQUE</span>
      </h1>

      <p className="subtitle">
        L'indice de fragilité numérique révèle les zones d'exclusion numérique sur un territoire donné. 
        Cet outil permet de comparer votre indice de fragilité numérique avec les autres territoires de France.
      </p>

      <picture>
        <source type="image/webp" srcSet={require("../images/img1.webp")}/>
        <img src={require("../images/img1.jpeg")} alt="img1" height="300" width="500"/>
      </picture>

      <h2>
        Je cherche l'indice de fragilité de ma commune
      </h2>

      <div className="commune-search">
        <ReactSearchBox
          placeholder="Recherchez une commune"
          data={dataINRCommune}
          onSelect={(obj) => handleSelect(obj)}
          autoFocus
          iconBoxSize="48px"
        />
      </div>

      <AnalyseResult
        result={result}
      />

      <picture>
        <source type="image/webp" srcSet={require("../images/img2.webp")}/>
        <img src={require("../images/img2.jpeg")} alt="img2" loading="lazy"/>
      </picture>

      <picture>
        <source type="image/webp" srcSet={require("../images/img3.webp")}/>
        <img src={require("../images/img3.jpeg")} alt="img3" loading="lazy"/>
      </picture>
    </>
  );
};

export default HomePage;