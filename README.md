# esptest
node proj for esp test

endpoints => { /, products, /:productId, orders,/:orderId}
methods => {GET, POST, PATCH, DELETE}
Model => { name: String,
    price: Number }
base => { https://blushing-sun-hat-lion.cyclic.app }
