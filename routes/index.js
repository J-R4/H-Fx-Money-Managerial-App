const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({
        msg: 'running'
    })
})


module.exports = router