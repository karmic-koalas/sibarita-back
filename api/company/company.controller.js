import companiesModel from "./company.model.js";

export async function getAllCompanies(req, res) {
  const response = await companiesModel.find();
  return res.json(response);
}


export async function getCompany(req, res) {
  // Lo que hace el response es buscar LA PRIMERA propiedad owner que coincida con lo que llegue por el req.params.owner.
  const response = await companiesModel.findOne({ owner: req.params.owner });
  return res.json(response);
}

// **req.params** para enviar lo que mandan desde el form en forma de parámetros para que el mongoDB pueda hacer los cálculos.
// El **req.body** es para comparar con algo que está fuera de la base de datos