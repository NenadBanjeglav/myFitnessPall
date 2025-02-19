import { Stack } from "expo-router";
import React from "react";
import "../global.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://lasbiznagras.eu-central-a.ibm.stepzen.net/api/iron-crocodile/__graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization:
      "apiKey lasbiznagras::local.net+1000::9e354636e7afa6c476b06b2a7cfa561ff91b68c7a24729345927cc75ba1c5159",
  },
});

const RootLayout = () => {
  return (
    <ApolloProvider client={client}>
      <Stack />
    </ApolloProvider>
  );
};

export default RootLayout;
