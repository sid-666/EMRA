const db = require("../model");
const sequelize = require("sequelize");
const { Op } = sequelize;
const bcrypt = require("bcryptjs");

module.exports = {
    findDashBoardData: function (req, res) {

            db.Transactions
                .findAll({
                    attributes: {
                        include: [[sequelize.fn('YEAR', sequelize.col('createdAt')), 'year'],
                        [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                        [sequelize.fn('DAY', sequelize.col('createdAt')), 'day'],
                        [sequelize.fn('DATE', sequelize.col('createdAt')), 'date']]
                    },
                    where: { user_id: req.user.id },
                    order: [['createdAt', 'ASC']]
                }).then((db) => {
                    console.log("this is the 2 data", db)
                    res.json(db)
                })



    },
    findUserTransactions: function (req, res) {
        console.log("im at backend")
        if (req.user) {
            db.Transactions
                .findAll({
                    attributes: {
                        include: [[sequelize.fn('DATE', sequelize.col('createdAt')), 'date']]
                    },
                    where: { user_id: req.user.id },
                    limit: 20,
                    order: [["createdAt", "DESC"]]
                })
                .then(data => {
                    console.log(data)
                    res.json(data)
                })
        }
    },
    create: async function (req, res) {
        let data = await db.User.findOne({ where: { username: req.body.username } });
        if (data) {
            res.send("User Already Exists")
        }
        else {
            const newUser = new db.User({
                username: req.body.username,
                password: req.body.password,
            });
            await newUser.save();
            res.send("User Created");
        }
    }

}

// Defining methods for the booksController
// module.exports = {
//     findDashBoardData: function (req, res) {
//         let filterParam = {
//             $gt: req.query.startDate,
//             $lt: req.query.endDate
//         }
//         if(!filterParam[$gt]) return filterParam[$gt]
//             // returnfilterParam[$gt] = [[sequelize.fn('min', sequelize.col('created_at'))]

//         if(!filterParam[$lt]) return filterParam[$lt] = [[sequelize.fn('max', sequelize.col('created_at'))]
//     },
//     findUserTransactions: function (req, res) {
//         console.log("im at backend")
//         if (req.user) {
//             db.Transactions
//                 .findAll({
//                     attributes: {
//                         include: [[sequelize.fn('DATE', sequelize.col('createdAt')), 'date']]
//                     },
//                     where: { user_id: req.user.id },
//                     limit: 20,
//                     order: [["createdAt", "DESC"]]
//                 })
//                 .then(data => {
//                     console.log(data)
//                     res.json(data)
//                 })
//         }
//     },
//     create: async function (req, res) {
//         let data = await db.User.findOne({ where: { username: req.body.username } });
//         if (data) {
//             res.send("User Already Exists")
//         }
//         else {
//             const newUser = new db.User({
//                 username: req.body.username,
//                 password: req.body.password,
//             });
//             await newUser.save();
//             res.send("User Created");
//         }
//         // db.User.findOne({where:{ name: req.body.username }}, async (err, doc) => {
//         //     if (err) throw err;
//         //     if (doc) res.send("User Already Exists");
//         //     if (!doc) {
//         //         const hashedPassword = await bcrypt.hash(req.body.password, 10);

//         //         const newUser = new db.User({
//         //             name: req.body.username,
//         //             password: hashedPassword,
//         //         });
//         //         await newUser.save();
//         //         res.send("User Created");
//         //     }
//         // });
//     }
// };