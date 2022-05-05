import tablesModel from "./tables.model.js";

export function getAllTablesByOwner(owner) {
  return tablesModel.find({ owner: owner }).then((response) => {
    if (response === null) {
      return [];
    } else {
      return response;
    }
  });
}

function getAllTables(req, res) {
  return tablesModel.find().then((response) => response);
}

/**
 * EXPRESS
 */

// Get all Tables from one company!!!
export function getAllTablesByOwnerAPI(req, res) {
  return getAllTablesByOwner(req.params.owner).then((response) =>
    res.json(response)
  );
}

export function getAllTablesAPI(req, res) {
  return getAllTables().then((response) => res.json(response));
}
