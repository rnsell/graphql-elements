// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export enum GraphqlType {
  Element = "Element",
  NobleGasElement = "NobleGasElement",
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
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
  }

  type Element implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
  }

  type NobleGasElement implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherNobleGasElements: [NobleGasElement]!
  }

  enum ElementTypes {
    NONMETAL
    NOBLE_GAS
    AlKALI_METAL
    ALKALINE_EARTH_METAL
    METALLOID
    HALOGEN
    METAL
    TRANSITION_METAL
    LANTHANIDE
    TRANSACTINIDE
    NO_TYPE
  }
`;

console.log(typeDefs);
