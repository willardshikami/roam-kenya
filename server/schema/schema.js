const graphql = require('graphql');

const { GraphQLObjectType,
        GraphQLString,
        GraphQLSchema } = graphql;


//Types
const FoodieType = new GraphQLObjectType({
  name: 'Foodie',
  fields: () => ({
    id: { type: GraphQLString },
    category_title: { type: GraphQLString },
    category_subtitle: { type: GraphQLString },
    category_description: { type: GraphQLString },
  })
});


//Relationships


//Queries
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    foodie: { type: FoodieType },
    args: {id: {type: GraphQLString} },
    resolve(parent, args){
      //get data from db
    }
  } 
})

module.exports = new GraphQLSchema({
  query: RootQuery
})