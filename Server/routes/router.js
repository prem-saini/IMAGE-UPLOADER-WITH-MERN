const express = require("express")
const router = new express.Router();
const conn = require("../db/conn");
const multer = require("multer");
const moment = require("moment")
const users = require("../model/userSchema")



var imgconfig = multer.diskStorage({
    destination: (req, File, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowed"))
    }
}


var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})




router.post("/register", upload.single("photo"), async (req, res) => {
    // console.log(req.body)
    const { fname } = req.body;
    const { filename } = req.file;

    // console.log("data")
    if (!fname || !filename) {
        res.status(422).json({ status: 422, message: "fill all the data" })
    }

    try {

        date = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
        const userdata = new users({
            fname: fname,
            imgpath: filename,

            date: date
        })

        const finaldata = await userdata.save();

        res.status(201).json({ status: 201, finaldata });




    } catch (error) {

        res.status(422).json({ status: 422, error })

    }

})

router.get("/getdata", async (req, res) => {
    try {
        const getUser = await users.find();

        res.status(201).json({ status: 201, getUser })
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});

router.delete("/:id", async (req, res) => {

    try {
        const { id } = req.params;

        const dltUser = await users.findByIdAndDelete({ _id: id });

        res.status(201).json({ status: 201, dltUser });

    } catch (error) {
        res.status(401).json({ status: 401, error })
    }

})

module.exports = router;