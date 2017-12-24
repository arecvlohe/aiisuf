const axios = require("axios");
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
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
      url: process.env.MAILCHIMP_SUBSCRIBE_ENDPOINT,
      method: "post",
      data: body,
      auth: {
        username: process.env.MAILCHIMP_USER,
        password: process.env.MAILCHIMP_API_KEY
      }
    })
    .then(({ response: { data } }) => {
      return res.status(data.status).json(data);
    })
    .catch(({ response: { data } }) => {
      return res.status(data.status).json(data);
    });
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000");
});
