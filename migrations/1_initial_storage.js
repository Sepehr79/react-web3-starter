const Strorage = artifacts.require("./Storage")

module.exports = function(deployer) {
    deployer.deploy(Strorage)
}