const path = require('path');

function goIndex(req, res){
    const filePath = path.join(__dirname, '../../client/index.html')
    res.sendFile(filePath);
}

function goNosotros(req, res){
    const filePath = path.join(__dirname, '../../client/nosotros.html')
    res.sendFile(filePath);
}

module.exports = {
    goIndex,
    goNosotros
}