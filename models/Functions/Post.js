let PersonModel = require('../person')

//Create and Save a Record of a Model
var CreatOoneperson=function (newperson){
  PersonModel.create(newperson,(err, data) => {
    if(err) {
       console.log(err); 
    }
  return(data);
  }) 
}

//Create Many Records with model.create()
var CreatManyperson = function(arrayOfPeople) {
  PersonModel.create(arrayOfPeople, (err, data) => {
    if(err) {
       console.log(err); 
    }
  return(data);
  }) 
};

//Add food to Favorite Foods
var AddFood = function(docs,newfood) {
  PersonModel.update({$push: { favoriteFoods: newfood }},(err)=>{
    if(err){
        console.log(err)

    }
})
};

//Update age
var UpdateAge = function (name,newAge) {

PersonModel.findOneAndUpdate({name:name},{$set: { age: newAge }}, {new: true},(err,doc)=>{
    if(err){
       console.log(err)

    }
    console.log(doc)
})
};


//Delete One Document Using Id
var RemovebyId = function (id) {

  PersonModel.findByIdAndRemove(id,(err)=>{
      if(err){
         console.log(err)
  
      }
  })
  };

//Delete all the people by gven name
var removeManyPeople = function(name) {
  const $regex =  new RegExp(name,'g')
  PersonModel.deleteMany({"name":{$regex}}, (err,result)=>{
    if (err){
    console.log(err)
    }  
    console.log(result)
    })
  }

module.exports = { CreatOoneperson ,CreatManyperson,AddFood,UpdateAge,RemovebyId,removeManyPeople};