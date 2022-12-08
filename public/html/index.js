const express = require("express")
const app = express()

var cors = require('cors')
app.use(cors())

const mongoose = require('mongoose');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect().catch(err => console.log(err))

async function connect() {
  await mongoose.connect('') 
}

const foodSchema = new mongoose.Schema({
    name: String,
    calories: String,
    dayEaten: String

}); 


const Foods = mongoose.model('Foods', foodSchema);

app.post("/new", async (req, res) => {
    const newFood = new Foods({name:req.body.name, calories:req.body.calories, dayEaten:req.body.dayEaten}); 
    await newFood.save();
    return res.send(newFood);

})

app.get("/allFood", async (req, res) => {
    const foundFoods = await Foods.find();
    return res.send(foundFoods);
})


app.get("/food/:id", async (req, res) => {
    let id = req.params.id
    const foundFood = await Foods.findById(req.params.id);
    return res.send(foundFood);
})


app.get("/delete/:id", async (req, res) => {
    let id = req.params.id
    const foundFood = await Foods.findById(req.params.id); 
    await Foods.deleteOne({ id: foundFood.id });
    return res.send(foundFood)
})


app.listen(3000, () => {
    console.log("Listening on port 3000")
})