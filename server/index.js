const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const locationRouter = require("./routes/location");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json())
app.use(cors()); //registering cors
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // configire morgan


// define first route
app.get("/", (req, res) => {
    console.log("Hello MEVN Soldier");
    res.status(201).json({ message: "working" });
});

app.use("/locations", locationRouter)

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});