// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export enum GraphqlType {
  Element = "Element",
}

export const typeDefs = gql`
  type Query {
    hello: String
    elements: [IAtomicElement]
  }

  interface IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
  }

  type Element implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
  }
`;
