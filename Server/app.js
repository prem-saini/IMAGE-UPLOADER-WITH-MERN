const express = require("express")
const app = express();
require("./db/conn")
const cors = require("cors")
const router = require("./routes/router")
const port = 4001;


// app.get('/', (req, res) => {
//     res.send("server start")
// })

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("./uploads"))
app.use(router);


app.listen(port, () => {
    console.log("server start");
})