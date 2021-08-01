module.exports = (sequelize, Sequelize) => {
  const Store = sequelize.define("store", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    storeName: {
      type: Sequelize.STRING,
    },
    storeImg: {
      type: Sequelize.STRING,
    },
  });

  return Customer;
};
