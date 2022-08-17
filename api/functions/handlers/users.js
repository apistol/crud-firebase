const { db } = require("../utils/firbase-utils-fn")

exports.getUsers = async (req, res) => {
    const usersRefs = await db.collection('users').get()
    const usersData = usersRefs.docs.map( doc => doc.data())

    return res.status(200).json({result:usersData});
}

exports.createUser = async (req, res) => {
     await db.collection('users').add({
        name:req.body.password,
        email:req.body.email,
    })

    return res.status(200).send("Success");
}