const { db, auth } = require("../utils/firbase-utils-fn")

exports.getUsers = async (req, res) => {
    const usersRefs = await db.collection('users').get()
    const usersData = usersRefs.docs.map( doc => doc.data())

    return res.status(200).json({result:usersData});
}

exports.createUser = async (req, res) => {
    await db.collection('users').add({
        name:req.body.name,
        email:req.body.email,
    })

    return res.status(200).send("Success");
}


exports.login = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    if (!password) {
        return res.status(300).send("Empty password")
    }

    // verifica daca exista userul cu emailul respectiv si parola din db e egala cu ce am trimis
    const userFBDoc = await db.collection("users").where("email", "==", email).limit(1).get();
    const userData = userFBDoc.docs[0].data()
    const userId = userFBDoc.docs[0].id

    if (userData.password !== password) {
        return res.status(300).send("Wrong password")
    }

    // returneaza userul plus id-ul userului
    return res.status(200).json({ result: { ...userData, userId } })
}


exports.register = async (req, res) => {
    const {name, email, password} =  req.body

    try{

        const userRecord = await auth.createUser({
            email,
            emailVerified: true,
            password,
            displayName: name,
            disabled: false,
          })

        // Create user
        await db.collection('users').add({name,email,password, uid: userRecord.uid, socials: []})
        
        // Search for registered user
        const userFbDoc = await db.collection('users').where("email", "==", email).limit(1).get()
        
        // Get user id
        const userId = userFbDoc.docs[0].id


        return res.status(200).send({name,email,userId});
    }catch(err){
        console.error(err)
        return res.status(400).send(err);
    }
    
}