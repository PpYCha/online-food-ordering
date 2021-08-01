const express = require("express");
const app = express();

var bodyParser = require("body-parser");

global.__basedir = __dirname;

const db = require("./db.config");

const Customer = db.Customer;

let router = require("./router");

const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(express.static("resources"));
app.use("/", router);

// Create a Server
const server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
  Customer.sync().then(() => {
    const customers = [
      {
        storeId: "1",
        storeName: "Store 1",
        storeImg: "Img 1",
      },
      {
        storeId: "2",
        storeName: "Store 2",
        storeImg: "Img 2",
      },
      {
        storeId: "3",
        storeName: "Store 3",
        storeImg: "Img 3",
      },
    ];

    for (let i = 0; i < customers.length; i++) {
      Customer.create(customers[i]);
    }
  });
});
