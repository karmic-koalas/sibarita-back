import companies from "./company.model.js";

export function getAllCompanies(req, res) {
  return companies.find().then((response) => {
    return res.json(response);
  });
}

export function getCompany(req, res) {
  return companies.findOne({ owner: req.params.owner }).then((response) => {
    return res.json(response);
  });
}
