const path = require('path');

function goContacto(req, res){
    const filePath = path.join(__dirname, '../../client/index.html')
    res.sendFile(filePath);
}

module.exports = {
    goContacto
}