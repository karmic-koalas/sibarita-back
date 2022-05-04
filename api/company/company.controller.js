import companies from "./company.model.js";

export function getAllCompanies(req, res) {
  return companies.find().then((response) => {
    return res.json(response);
  });
}
