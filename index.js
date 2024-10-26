const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        let users = [
            {
                name: "Mangesh",
            },
        ];
        console.log("user");

        return res.status(200).json({ message: "data fetched", users });
    } catch (error) {
        return res.status(500).json({ error: error.stack, message: "unable to get data" });
    }
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
