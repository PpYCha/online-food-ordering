exports.createStore = (req, res) => {
  let store = {};

  try {
    // Building Customer object from upoading request's body
    store.storeName = req.body.storeName;
    customer.storeImg = req.body.storeImg;

    // Save to MySQL database
    Customer.create(customer, {
      attributes: ["storeId", "storeName", "storeImg"],
    }).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({
      message: "Fail!",
      error: error.message,
    });
  }
};

exports.getStore = (req, res) => {
  Store.findByPk(req.params.id, {
    attributes: ["storeId", "storeName", "storeImg"],
  })
    .then((customer) => {
      res.status(200).json(customer);
    })
    .catch((error) => {
      // log on console
      console.log(error);

      res.status(500).json({
        message: "Error!",
        error: error,
      });
    });
};

exports.stores = async(req, res)  = (req, res) => {
    // find all Customer information from 
    try{
        Store.findAll({attributes: ['storeId', 'storeName', 'storeImg']})
        .then(customers => {
            res.status(200).json(customers);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}
exports.updateStore = async(req, res) => {
    try{
        let store = await Store.findByPk(req.body.id);
    
        if(!store){
            // return a response to client
            res.status(404).json({
                message: "Not Found for updating a customer with id = " + storeId,
                error: "404"
            });
        } else {    
            // update new change to database
            let updatedObject = {
                storeName: req.body.storeName,
                storeImg: req.body.storeImg,
            }
            let result = await Store.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['storeId', 'storeName', 'storeImg']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Can not update a customer with id = " + req.params.id,
                    error: "Can NOT Updated",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Can not update a customer with id = " + req.params.id,
            error: error.message
        });
    }
}

exports.deleteStore = async (req, res) => {
    try{
        let storeId = req.params.id;
        let store = await Store.findByPk(storeId);

        if(!store){
            res.status(404).json({
                message: "Does Not exist a Customer with id = " + storeId,
                error: "404",
            });
        } else {
            await store.destroy();
            res.status(200);
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Can NOT delete a customer with id = " + req.params.id,
            error: error.message
        });
    }
}
