
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const basketSchema = new Schema({
    uid: { type: String, required:true},
    iid:{
        type:Schema.Types.ObjectId,
        ref:'Product'
    },
    quantity:{
        type:Number,
        default:1,
        min:1
    }
   
})
 
module.exports = mongoose.model('Basket',basketSchema);
 