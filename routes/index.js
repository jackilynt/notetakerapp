const {Router} = require("express")

const apiRoutes = require("./apiRoutes")
const htmlRoutes = require("./htmlRoutes")

const router = Router()

// your api routes
router.use("/api", apiRoutes)
router.use("/", htmlRoutes)

module.exports = router