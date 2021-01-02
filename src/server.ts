import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import { buildSchema } from 'type-graphql';

import './utils/connection';

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [],
  });
}

const server = new ApolloServer({ schema });

server.listen({ port: 4100 }, () => {
  console.log('Server Start.');
});

bootstrap();
