const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var leadersSchema = new Schema({

    name:{
        type:String,
        require:true,
        unique: true
    },

    designation:{

        type:String,
        require:true
    },

    abbr:{

        type:String,
        require:true
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

var Leaders = mongoose.model('Leader',leadersSchema);
module.exports = Leaders;