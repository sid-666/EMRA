const db = require("../model");
const sequelize = require("sequelize");
const { Op } = sequelize;
const bcrypt = require("bcryptjs")

// Defining methods for the booksController
module.exports = {
    findDashBoardData: function (req, res) {
        let filterParam = {
            'YEAR(createdAt)': req.query.year,
            'MONTH(createdAt': req.query.month,
            'DAY(createdAt)': req.query.day,
            type: req.query.type
        }
        // function renameKey(obj, old_key, new_key) {
        //     console.log("I am here")
        //     // check if old key = new key   
        //     if (old_key !== new_key) {
        //         Object.defineProperty(obj, new_key, // modify old key 
        //             // fetch description from object 
        //             Object.getOwnPropertyDescriptor(obj, old_key));
        //         delete obj[old_key];                // delete old key 
        //     }
        // }
        // renameKey(filterParam, 'day', 'DAY(createdAt)')
        // renameKey(filterParam, 'month', 'DAY(createdAt)')
        // renameKey(filterParam, 'year', 'DAY(createdAt)')
        console.log(filterParam)
        let wherePortion = {
            user_id: req.user.id
        }
        for (const param in filterParam) {
            if (filterParam[param] !== "") {
                console.log(typeof param)
                wherePortion[param] = filterParam[param]
                if (param === 'DAY(createdAt)' || param === 'MONTH(createdAt)' || param === 'YEAR(createdAt)') {
                    wherePortion[param] = parseInt(filterParam[param])
                }
            }
        }
        console.log("wherePortion", wherePortion)

        const whereClause = [{ user_id: req.user.id }];

        if (req.query.year) {
            whereClause.push({ createdAt: sequelize.where(sequelize.fn('YEAR', sequelize.col('createdAt')), req.query.year) });
        }
        if (req.query.month) {
            whereClause.push({ createdAt: sequelize.where(sequelize.fn('MONTH', sequelize.col('createdAt')), req.query.month) });
        }
        if (req.query.day) {
            whereClause.push({ createdAt: sequelize.where(sequelize.fn('DAY', sequelize.col('createdAt')), req.query.day) });
        }
        if (req.query.type) {
            whereClause.push({ type: req.query.type })
        }


        db.Transactions
            .findAll({
                attributes: {
                    include: [[sequelize.fn('YEAR', sequelize.col('createdAt')), 'year'],
                    [sequelize.fn('MONTH', sequelize.col('createdAt')), 'month'],
                    [sequelize.fn('DAY', sequelize.col('createdAt')), 'day'],
                    [sequelize.fn('DATE', sequelize.col('createdAt')), 'date']
                    ]
                },
                where: {
                    [Op.and]: whereClause
                },
                order: [['createdAt', 'ASC']]
            })
            .then((db) => {
                console.log(req.query.day)
                console.log(wherePortion)
                console.log("this is the data", db)
                res.json(db)
            })
    },
    findUserTransactions: function (req, res) {
        if (req.user) {
            db.sequelize.query(`SELECT
            createdAt, MONTH(createdAt), value
            FROM
            Transactions
            WHERE user_id = ${req.user.id}
            ORDER BY createdAt;`, {
                type: sequelize.QueryTypes.SELECT
            }).then(data => {
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
        // db.User.findOne({where:{ name: req.body.username }}, async (err, doc) => {
        //     if (err) throw err;
        //     if (doc) res.send("User Already Exists");
        //     if (!doc) {
        //         const hashedPassword = await bcrypt.hash(req.body.password, 10);

        //         const newUser = new db.User({
        //             name: req.body.username,
        //             password: hashedPassword,
        //         });
        //         await newUser.save();
        //         res.send("User Created");
        //     }
        // });
    }
};