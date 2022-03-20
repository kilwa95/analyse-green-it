const express = require("express");
const Exel = require("./service/Exel");
const path = require("path");
const csv = require("csv-parser");
const fs = require("fs");
const { table } = require("console");
const router = express.Router();
router.use(express.json());

// Swagger UI
router.get("/indice", (req, res, next) => {
  const json = path.join(__dirname, "./content/data.json");
  let rawdata = fs.readFileSync(json);
  let r = JSON.parse(rawdata);

  const data = r.find(com => com.code_postal === req.query.codePost);

  res.json(data);

  // const results = [];
  // const file = path.join(__dirname, "./content/data.csv");
  // fs.createReadStream(file, { encoding: "utf-16le" })
  //   .pipe(csv({ separator: "\t" }))
  //   .on("data", (data) => results.push(data))
  //   .on("end", () => {
  //     const resultFinal = results.map((item) => {
  //       return {
  //         code_postal: item['COM'],
  //         commune: item[Object.keys(item)[0]],
  //         dep: item["Libdep"],
  //         region: item["Libreg"],
  //         pop: item["P16 Pop"],
  //         score_global_dep: item["SCORE GLOBAL departement"],
  //         score_global_region: item["SCORE GLOBAL region"],
  //         acces_information_dep: item["ACCES A L'INFORMATION departement"],
  //         acces_information_region: item["ACCES A L'INFORMATION region"],
  //         acces_interface_numerique_dep: item["ACCÈS AUX INTERFACES NUMERIQUES departement"],
  //         acces_interface_numerique_region: item["ACCÈS AUX INTERFACES NUMERIQUES region"],
  //         competence_admin_dep: item["COMPETENCES ADMINISTATIVES departement"],
  //         competence_admin_region: item["COMPETENCES ADMINISTATIVES region"],
  //       };
  //     });
  //     res.json(resultFinal);
  //     // res.json(results[0])
  //     // console.log(results[0])
  //     console.log(resultFinal);
  //   });
});

router.get("/communes", (req, res, next) => {
  const json = path.join(__dirname, "./content/data.json");
  let rawdata = fs.readFileSync(json);
  let r = JSON.parse(rawdata);
  
  let list = [];

  r.forEach((com, i) => list.push({
    key: `${com.code_postal}-${i}`,
    value: com.commune,
    codePost: com.code_postal
  }));

  res.json(list);
});

module.exports = router;