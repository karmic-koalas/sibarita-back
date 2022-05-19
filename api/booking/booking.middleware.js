import companies from "../company/company.model.js";

export const checkIfOwnerExistMiddleware = async (req, res, next) => {
  const { owner } = req.body;
  // Inicializo company a false para poder comparar. Si no me ha cambiado el valor es que no me ha llegado nada y hago lo del if.
  let company = false;
  try {
    company = await companies.findOne({ owner: owner });
  } catch (error) {
    console.error(error);
  }

  if (company == null || company == false) {
    return res.status(400).send({
      error: 400,
      msg: "No pusiste un owner o el owner introducido no existe",
    });
  }

  next();
};

// export default checkIfOwnerExistMiddleware; Si falla el check descomentamos esto
