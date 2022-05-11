import companies from "./company.model.js";

export async function getAllCompanies(req, res) {
  const response = await companies.find();
  return res.json(response);
}

export async function getCompany(req, res) {
  const response = await companies.findOne({ owner: req.params.owner });
  return res.json(response);
}
