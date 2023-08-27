import express from 'express';
const app = express();
const port = 5000;

const billionaires = [
    {id:1,  name: "Jeff Bezos", age: 57 },
    {id: 2, name: "Elon Musk", age: 50 },
    {id:3, name: "Bernard Arnault", age: 72 },
    {id:4, name: "Bill Gates", age: 65 },
    {id:5,  name: "Mark Zuckerberg", age: 37 }
]

app.use(express.json());


app.get('/displayAll', (req, res) => {
    res.send(billionaires);
})

app.get('/displayOne/:id' , (req, res) => {
      let billionaire_id = req.params.id;
       console.log(billionaire_id);
       const billionaire = billionaires.filter((value)=> value.id == billionaire_id);
       console.log(billionaire[0]);
       if(billionaire.length == 0){
           return res.send("No billionaire with this id");
       }
       return res.send(billionaire[0]);
})

app.post('/addBillionaire', (req, res) => {
      const {name, age} = req.body;
      let billionaire_id = billionaires.length + 1;
      billionaires.push({id: billionaire_id, name, age});
     res.send(billionaires);
})

app.put('/updateBillionaire/:id', (req, res) => {
    const billionaire_id = req.params.id;
    console.log(billionaire_id);
       const billionaire = billionaires.filter((value)=> value.id == billionaire_id);
       console.log(billionaire[0]);
       if(billionaire.length == 0){
           return res.send("No billionaire with this id");
       }
       let toUpdate = req.body; {age: 61}
       for(let t in toUpdate){ // t = name, age
           billionaire[0][t] = toUpdate[t];
       }
         return res.send(billionaire[0]);
       
    
})

app.delete('/deleteBillionaire/:id', (req, res) => {
      // delete a thing in the apis
})

//install tools => sql and mongodb








app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})