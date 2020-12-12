const express = require('express');
const { sayHello, uppercase, lowercase, firstCharacter, firstCharacters } = require('./lib/strings');
const { add, subtract, multiply } = require ('./lib/numbers')

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  res.json({result: sayHello(req.params.string)});
});
app.get('/strings/upper/:HELLO', (req, res) => {
    //console.log(req.params.string)
  res.json({result: uppercase(req.params.HELLO)});
});
app.get('/strings/lower/:HELLO', (req, res) => {
  res.json({result: lowercase(req.params.HELLO)})
});
app.get('/strings/first-character/:h', (req, res) => {
  res.json({result: firstCharacter(req.params.h)})
});
app.get('/strings/first-characters/:string', (req, res) => {
  console.log(req.params.string)
  res.json({result: firstCharacters(req.params.string, req.query.length)})
});
//numbers section
app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  if (Number.isNaN(a) || Number.isNaN(b))
  {
    res.status(400).send({error: 'Parameters must be valid numbers.'})
  }
  else 
  {
    res.json({result: add(a, b)})
  }
})
app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const a = Number(req.params.a)
  const b = Number(req.params.b)
  if (Number.isNaN(a) || Number.isNaN(b))
  {
    res.status(400).send({error: 'Parameters must be valid numbers.'})
  }
  else
  {
    res.json({result: subtract(b, a)})
  }
})
app.post('/numbers/multiply', (req, res) => {
  const a = Number(req.body.a)
  const b = Number(req.body.b)
  if (!a || !b)
  {
    res.status(400).send({error: 'Parameters "a" and "b" are required.'})
  }
  else if
    (Number.isNaN(a) || Number.isNaN(b))
    res.status(400).send({error: 'Parameters "a" and "b" must be valid numbers.' })
  
  res.json({result: multiply(a, b)})

})



module.exports = app;




























/*Notes for me 
app.get('/numbers/add/:a/and/:b', (req, res) => {
  //const {a, b} = req.params
  //step 1 save parameters as numbers
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  //console.log(Number.isNaN(a))
  //step 2 check variables are not numbers (NaN)
  if (Number.isNaN(a) || Number.isNaN(b))
  // step 3 sending error if they are not numbers 
  {
    res.status(400).send({error: 'Parameters must be valid numbers.'})
  }
  else 
  {
    res.json({result: add(a, b)})
  }
  */