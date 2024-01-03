const router = require('express').Router();
// const { User } = require('../../models');

router.get('/', async (req, res) => {
    res.status(200).json({ message: "It works!" });
    return;
})

router.post('/', async (req, res) => {

})

module.exports = router;