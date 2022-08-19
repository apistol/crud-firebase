const { db, storage } = require("../utils/firbase-utils-fn")

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
    const userId = req.params.id;

    const userFbData = await db.doc(`/users/${userId}`).get()
    const userData = await userFbData.data()
    let newUserData = userData;
    if(newUserData.socials){
        newUserData.socials.push(req.body)
    }else{
        newUserData.socials= [{...req.body}]
    }
    await db.doc(`/users/${userId}`).set(newUserData)
    res.status(200).send("Succes")
}