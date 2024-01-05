const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {
    res.status(200).json({ message: "It works!" });
    return;
})

router.get('/usersAll', async (req, res) => {

    try {

        const userData = await User.findAll();

        if (!userData) {
            res.status(400).json({ message: 'Something went wrong with the database.' });
            return;
        }

        res.status(200).json(userData);
        
    } catch (err) {
        res.status(400).json(err);
    }
})

router.post('/', async (req, res) => {

})

module.exports = router;