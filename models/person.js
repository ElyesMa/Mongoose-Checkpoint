let mongoose=require('mongoose')

//Create a person with this prototype
let personSchema = new mongoose.Schema({
    name: { type: String, required: true } ,
    age: Number,    
    favoriteFoods:[String],
})


module.exports=mongoose.model('person',personSchema)