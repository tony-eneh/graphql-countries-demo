import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { ApplicationConfig, inject } from '@angular/core';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';

const uri = 'https://geodb-cities-graphql.p.rapidapi.com'; // <-- add the URL of the GraphQL server here
export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({
      uri,
      headers: {
        // @ts-expect-error no worry
        'x-rapidapi-host': 'geodb-cities-graphql.p.rapidapi.com',
        'x-rapidapi-key': '48ec90f547msh9a83ac5eb84df4ap197941jsndb89d4dc19c4', // <-- replace with your RapidAPI key
      },
    }),
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig['providers'] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
