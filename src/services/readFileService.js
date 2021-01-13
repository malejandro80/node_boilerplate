const funct = {}
const fs = require("fs");

funct.readUser = async (user) =>{

    file_name = "./src/txt/"+user;

  return new Promise((resolve, reject) => {
    
    fs.readFile(file_name, 'utf8', (err, res) => {
      if (err) reject(err);
      else resolve(res.split(','));
    });
  
  });
}

module.exports = funct;