const db = require("../model");
const bcrypt = require("bcryptjs")

// Defining methods for the booksController
module.exports = {
    findById: function (req, res) {
        db.sequelize.query(`SELECT
        SUM(value),MONTH(createdAt)
        FROM
        Transactions
        WHERE user_id = ${req.user.id}
        GROUP BY MONTH(joining_date_time );`, {
            type: sequelize.QueryTypes.SELECT
        }).then(data => {
            res.json(data)
        })

    },
    create: async function (req, res) {
        let data = await db.User.findOne({where:{name: req.body.username}});
        if (data){
            res.send("User Already Exists")
        }
        else {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);

            const newUser = new db.User({
                name: req.body.username,
                password: hashedPassword,
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