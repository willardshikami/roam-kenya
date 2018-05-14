const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

//connect to Mlab
mongoose.connect('mongodb://shikami:shikami@ds251179.mlab.com:51179/roamkenya');
mongoose.connection.once('open', () => {
  console.log('connected to DB');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server Running on port 4000')
})