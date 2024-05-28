const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const PORT = 3000;
const mainRouter = require("./routes/index");
const cors = require("cors");
require("dotenv").config();

// app.use(cors());
app.use(express.json());

app.use(
    cors({
        origin: ["https://payment-wallet-kv.vercel.app"],
        credentials: true,
    })
);

dbConnect();
app.get("/", (req, res) => {
    res.json(`Server is Up and Running...`);
})

app.use("/api", mainRouter);

app.listen(PORT, () => {
    console.log(`Server is Running at ${PORT}`);
})