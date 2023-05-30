const Event = require('../models/events');

const createEvent = async (req, res) => {

    try {
        const event = new Event({
            name: req.body.name,
            tagline: req.body.tagline,
            file: 'http://localhost:8000/api/v3/app/' + req.file.filename,
            schedule: req.body.schedule,
            descrption: req.body.descrption,
            moderator: req.body.moderator,
            category: req.body.category,
            sub_category: req.body.sub_category,
            rigor_rank: req.body.rigor_rank
        });
        const eventData = await event.save();
        res.status(400).send({ success: true, msg: 'Event data', data: eventData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const updateUIDEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.uid, req.body);
        res.status(200).send({ success: true, msg: 'Post updated' });
    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const deleteUIDEvent = async (req, res) => {
    try {
        const event = await Event.deleteOne({ _id: req.params.uid });
        res.status(200).send({ success: true, msg: 'Post deleted' });
    }
    catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const getEvent = async (req, res) => {

    try {
        if (req.query.page) {
            const page = parseInt(req.query.page); // Current page number, defaulting to 1
            const limit = parseInt(req.query.limit);
            const totalCount = await Event.countDocuments();
            const totalPages = Math.ceil(totalCount / limit);

            const event = await Event.find().sort({ createdAt: -1 }).skip((page - 1) * limit).limit(limit);
            res.status(200).send({ success: true, msg: 'Data paginated retrive', data: event });
        }
        else if (req.query.id) {
            const uid = req.query.id;
            const event = await Event.find({ _id: uid });
            res.status(200).send({ success: true, msg: 'Event data', data: event });
        }
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

module.exports = {
    createEvent,
    updateUIDEvent,
    deleteUIDEvent,
    getEvent
}