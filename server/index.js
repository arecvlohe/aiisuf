const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const info = require("debug")("app:info");
require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.post("/api/mailchimp", (req, res) => {
  const { body } = req;
  return axios
    .request({
      url: process.env.MAILCHIMP_URL,
      method: "post",
      data: body,
      auth: {
        username: process.env.MAILCHIMP_USER,
        password: process.env.MAILCHIMP_PASSWORD
      }
    })
    .then(response => {
      if (response.status === 200) {
        return res.status(200).json({ message: "user successfully added" });
      }
    })
    .catch(({ response: { data } }) => {
      return res.status(data.status).json(data);
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  info(`Server listening on localhost:${PORT}`);
});
