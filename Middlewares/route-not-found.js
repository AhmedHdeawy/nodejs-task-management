const routeNotFound = (req, res) => res.status(404).send("Route doens't exist")

module.exports = routeNotFound