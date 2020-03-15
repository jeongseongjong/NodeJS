const path = require("path")
// __dirname : 메인페이지의 경로
const configPath = path.join(__dirname,"..","config","dataGoKr.json")
const config = require(configPath)

module.exports = config