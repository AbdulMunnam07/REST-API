const express = require('express')
const req = require('express/lib/request')
const users = require('./MOCK_DATA.json')
const app = express()
const port = 3000

// Respond with Hello World! on the homepage:

app.get((req, res, next) => {
  console.log("Middleware working there....... Hurahh!!!");
  next()
})

app.get('/users', (req, res) => {
  res.send('Hello Abdul Munnam!')
  res.setHeader("myName", "X-AbdulMunnam")
  return res.json(users)
})

app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id)
    const user = users.find((user) => user.id == id);
    return res.json(user)
  })
 
// Respond to POST request on the root route (/), the application’s home page:

app.post('/users', (req, res) => {
  res.send('Got a POST request')
})
// Respond to a PUT request to the /user route:

app.put('/users', (req, res) => {
  res.send('Got a PUT request at /user')
})
// Respond to a DELETE request to the /user route:

app.delete('/users', (req, res) => {
  res.send('Got a DELETE request at /user')
})


// MARK: - You can manage get, put, post request indvisually as:
// app.route('/users').get((req, res) => {}).put((req, res) => {}).post((req, res) => {}).delete((req, res) => {})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})