const env = {
  database: "onlinw_food_ordering_db",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
