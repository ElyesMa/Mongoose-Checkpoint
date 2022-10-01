let PersonModel = require('../person')
var data


//Use model.find() to Search datatbase by name
getPersonbyName = function(key){

        PersonModel.find({name:key},(err,docs)=>{
            if(err){
                console.log(err)

            }
            console.log(docs)
          
        })
    
        
        
}


//Find one person by favoriteFoods
getOnePersonbyFoods = function(key){
    PersonModel.findOne({favoriteFoods:key},(err,docs)=>{
        if(err){
            console.log(err)

        }
     
        console.log(docs)   
    })
    
}
//Find  person by _id
getPersonbyid = function(key){
    PersonModel.findById(key,(err,docs)=>{
        if(err){
            console.log(err)

        }
        console.log(docs)   
        return(docs)    

    })
    
}

//Find one person by Foods,Sort them by name,limit the results to two documents, and hide their age
getPersonbyFoods = function(key){ 
     PersonModel.find({favoriteFoods:key})
                .sort({name: 'asc'})
                .limit(2)
                .select('-age')        
                .exec((err,docs)=>{
                if(err){
                    console.log(err)

                }
            
                console.log(docs)   
            })
            
}

module.exports = { getPersonbyName,getOnePersonbyFoods,getPersonbyid,getPersonbyFoods};