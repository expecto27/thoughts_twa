var db = require('../config/db.config.js');
var requests = db.requests;

exports.fingByTelegram = (req, res) => {
    requests.findAll({
        where: {
            telegramId: req.params.telegramId
        }
    })
        .then(objects => {
            console.log(objects);
            res.status(200).send(objects);
        }).catch(err => {
            res.status(500).send(err);
        })
};

exports.findAll = (req, res) => {
    requests.findAll()
        .then(objects => {
            res.status(200).send(objects);
        }).catch(err => {
            res.status(500).send(err);
        })
};



const { Op } = require("sequelize"); 

exports.create = (req, res) => {
    const { telegramId, thought } = req.body;

    requests.count({
        where: {
            telegramId: telegramId,
            createdAt: {
                [Op.gte]: new Date(new Date() - 24 * 60 * 60 * 1000),
            },
        }
    })
    .then(count => {
        if (count >= 10) {
            return res.status(400).send({ message: "Вы превысили дневной лимит в 10 мыслей" });
        }

        requests.create({
            telegramId: telegramId,
            message: thought,
        })
        .then(object => {
            res.status(200).send(object);
        })
        .catch(err => {
            res.status(500).send(err);
        });
    })
    .catch(err => {
        res.status(500).send(err);
    });
};