/** @format */

const funct = {};

const readFile = require('../services/readFileService');

funct.example = (req, res) => {
  response = {
    status: 200,
    color: '#23DE2D',
  };
  return res.status(200).json(response);
};

funct.auth = async (req, res) => {
  headers = req.headers;
  let user = await readFile.readUser('user1.txt');

  if (headers.user === user[0] && headers.password === user[1]) {
    response = {
      status: 200,
      message: 'bienvendo de regreso ' + user[2],
    };
  } else if (headers.user === user[0] && headers.password !== user[1]) {
    response = {
      status: 403,
      message: 'contraseña incorrecta',
    };
  } else if (headers.user !== user[0] || headers.password !== user[1]) {
    response = {
      status: 404,
      message: 'usuario no registrado',
    };
  }

  response = {
    status: 200,
    message: 'usuario no registrado',
  };
  return res.status(response.status).json(response);
};

module.exports = funct;
