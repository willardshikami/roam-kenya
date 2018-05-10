const graphql = require('graphql');

const { GraphQLObjectType,
        GraphQLString } = graphql;

const FoodieType = new GraphQLObjectType({
  name: 'Foodie',
  fields: () => ({
    id: { type: GraphQLString },
    category_title: { type: GraphQLString },
    category_subtitle: { type: GraphQLString },
    category_description: { type: GraphQLString },
  })
});