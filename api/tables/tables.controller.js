import tablesModel from "./tables.model.js";

export function getAllTables(req, res) {
  return tablesModel.find().then((response) => {
    return res.json(response);
  });
}

// Get all Tables from one company!!!
export function getAllTablesByOwner(req, res) {
  return tablesModel.find({ owner: req.params.owner }).then((response) => {
    if (response === null) {
      return [];
    } else {
      return res.json(response);
    }
  });
}
