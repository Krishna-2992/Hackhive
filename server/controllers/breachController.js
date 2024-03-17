const Breach = require('../models/breach')

exports.createBreach = async (req, res) => {
    try {
        const breaches = req.body.map((breach) => ({
            address: breach.Address,
            value: breach.Value
        }))
        await Breach.insertMany(breaches)
        res.status(201)
        res.json({
            status: 'success',
            data: {
                breaches: 'done',
            },
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getBreach = async (req, res) => {
    try {
        console.log('query is: ', req.query)
        const allBreachs = await Breach.find()
        res.send(allBreachs)
    } catch (error) {
        console.log('💥💥💥💥😒😒😒😒😒💥💥💥💥')
        console.log(error)
    }
}
