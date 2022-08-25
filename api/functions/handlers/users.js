const { db, storage, auth } = require("../utils/firbase-utils-fn")

const path = require("path");
const os = require("os");
const fs = require("fs");
const busboy = require("busboy");
// const { config } = require("../utils/config")

exports.getUsers = async (req, res) => {
    const usersRefs = await db.collection('users').get()
    const usersData = usersRefs.docs.map(doc => doc.data())

    return res.status(200).json({ result: usersData });
}

exports.createUser = async (req, res) => {
    await db.collection('users').add({
        name: req.body.password,
        email: req.body.email,
    })

    return res.status(200).send("Success");
}

exports.addAvatarImage = async (req, res) => {
    const bb = busboy({ headers: req.headers });

    let imageFileName;
    let imageToBeUploaded = {};
    let imageUrl;

    try {

        bb.on("file", (fieldname, file, filename, encoding, mimetype) => {
            const imageExtension = filename.filename.split(".")[filename.filename.split(".").length - 1];
            imageFileName = `${Math.round(Math.random() * 1000000000)}.${imageExtension}`;
            const filePath = path.join(os.tmpdir(), imageFileName);
            imageToBeUploaded = { filePath, mimetype: filename.mimetype };
            file.pipe(fs.createWriteStream(filePath));
        });

        bb.on("finish", async () => {
            await storage
                .bucket("ecommerce-2ebae.appspot.com")
                .upload(imageToBeUploaded.filePath, {
                    resumable: false,
                    metadata: {
                        metadata: {
                            contentType: imageToBeUploaded.mimetype
                        }
                    }
                })

            imageUrl = `https://firebasestorage.googleapis.com/v0/b/ecommerce-2ebae.appspot.com/o/${imageFileName}?alt=media`;

            return res.status(200).json({ image: imageUrl })
        })

    } catch (err) {
        console.error(err)
        return res.status(500).send("Eroare la upload");
    }
    bb.end(req.rawBody);
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

exports.addSocial = async (req, res) => {
    console.log(req.body)
    const userId = req.params.id;

    const userFbData = await db.doc(`/users/${userId}`).get()
    const userData = await userFbData.data()
    let newUserData = userData;
    newUserData.socials.push(req.body)
    await db.doc(`/users/${userId}`).set(newUserData)
    res.status(200).send({ socials: newUserData.socials })
}


exports.register = async (req, res) => {
    const { name, email, password } = req.body

    try {

        const userRecord = await auth.createUser({
            email,
            emailVerified: true,
            password,
            displayName: name,
            disabled: false,
        })

        // Create user
        await db.collection('users').add({ name, email, password, uid: userRecord.uid, socials: [] })

        // Search for registered user
        const userFbDoc = await db.collection('users').where("email", "==", email).limit(1).get()

        // Get user id
        const userId = userFbDoc.docs[0].id


        return res.status(200).send({ name, email, userId });
    } catch (err) {
        console.error(err)
        return res.status(200).send(err);
    }

}


exports.deleteSocial = async (req, res) => {
    try{
        const userId = req.params.userId;
        const socialsList = req.body;

        console.log(req.body)
        
        const userFbData = await db.doc(`/users/${userId}`).get()
        const userData = await userFbData.data()
        userData.socials= socialsList
        await await db.doc(`/users/${userId}`).set(userData)

        return res.status(200).send({socials:socialsList});

    }catch(err){
        console.error(err)
        return res.status(400).send(err);
    }




}