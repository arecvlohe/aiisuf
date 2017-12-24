const axios = require("axios");
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.static(path.resolve(__dirname, "..", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

app.post("/mailchimp", (req, res) => {
  const { body } = req;
  return axios
    .request({
      url: process.env.MAILCHIMP_SUBSCRIBE_ENDPOINT,
      method: "post",
      data: body,
      auth: {
        apikey: process.env.MAILCHIMP_API_KEY
      }
    })
    .then(response => {
      console.log("response", response);
      return response;
    })
    .catch(err => {
      console.error("error", err);
      return error;
    });
});

app.listen(3000, () => {
  console.log("Server listening on localhost:3000");
});
