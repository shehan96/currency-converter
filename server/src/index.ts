import { Login } from './Mutations/Login';
import 'dotenv/config';
import { GetCountryDetails, GetAllCountries } from './Queries/Country';
import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { Auth } from './Middleware/auth';
import cors from 'cors';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(cors());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 30,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

app.use(Auth);

const rootQuery = new GraphQLObjectType({
  name: 'Query',
  fields: {
    GetCountryDetails,
    GetAllCountries,
  },
});

const rootMutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    Login,
  },
});

const schema = new GraphQLSchema({
  description: 'This is main schema',
  query: rootQuery,
  mutation: rootMutation,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

const port: number = 5000;

app.listen(port, () => {
  console.log('🚀 Server is running under port number 5000 🚀');
});
