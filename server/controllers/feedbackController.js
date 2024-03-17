const Feedback = require('../models/feedback')

exports.createFeedback = async (req, res) => {
    try {
        console.log(req.body)
        const newFeedback = await Feedback.create(req.body)
        console.log(newFeedback)
        res.status(201)
        res.json({
            status: 'success',
            data: {
                feedback: newFeedback,
            },
        })
    } catch (error) {
        console.log(error)
    }
}

exports.getFeedback = async (req, res) => {
    try {
        const allFeedbacks = await Feedback.find()
        res.send(allFeedbacks)
    } catch (error) {
        console.log(error)
    }
}
