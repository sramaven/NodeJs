const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

var promotionsSchema = new Schema({

    name:{
        type:String,
        require:true,
        unique: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: Currency,
        required: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default:false      
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

var Promotions = mongoose.model('Promotion',promotionsSchema);

module.exports = Promotions;

