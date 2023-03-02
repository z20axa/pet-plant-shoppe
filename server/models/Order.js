const mongoose = require('mongoose');

const { Schema } = mongoose;
/// code for Order wiht plants to be used in Stripe setup
const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Plant'
    }
  ]
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
