require('dotenv').config();
const mongoose=require('mongoose')
const express=require('express');
const app=express();
const { CreatOoneperson ,CreatManyperson,AddFood,UpdateAge,RemovebyId,removeManyPeople} = require("./models/Functions/Post")
const { getPersonbyName,getOnePersonbyFoods,getPersonbyid,getPersonbyFoods} = require("./models/Functions/Get")

//Connect to the database on Mango Atlas
mongoose.connect(process.env.DATABASE_URI, {
          useUnifiedTopology: true,
          useNewUrlParser: true
      })

//Connect to server once we are connected to the database
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => console.log(`Server running on port 3000`));
})

/*
//Create and Save a Record of a Model
CreatOoneperson({name:'Nizar MANI', age:37, favoriteFoods:'Pizza', })
*/

/*
//Create several people with Model.create()
CreatManyperson(
[{name:'Mohamed SALAH',
  age:30,
  favoriteFoods:'Gaufre'},
{name:'Neymar JUNIOR',
  age:30,
  favoriteFoods:'Spaghetti'},
{name:'Cristiano RONALDO',
  age:37,
  favoriteFoods:'Paella'},
{name:'Lionel MESSI',
  age:35,
  favoriteFoods:'Hot-dog'},
{name:'Kylian MBAPPE',
  age:23,
  favoriteFoods:'Hamburger'}
])
*/


/*
//Find person by name
getPersonbyName('Elyes MANI')
*/

/*
//Find one person by favoriteFoods
getOnePersonbyFoods('Pizza')
*/

/*
//Find one person by id
getPersonbyid('63361b54a98418eb97a9a501')
*/

/*
//Find a person by _id & Add food to favoriteFoods
AddFood(getPersonbyid('63361b54a98418eb97a9a501'),'hamburger')
*/

/*
//Find a person by name & update age
UpdateAge('Kylian MBAPPE',20)
*/

/*
//Delete One Document Using Id
RemovebyId('633766005aad7a71b8db4eb5')
*/

/*
//Delete all the people by gven name
removeManyPeople('Mohamed')
*/

/*
//Find one person by favoriteFoods
getPersonbyFoods('Pizza')
*/