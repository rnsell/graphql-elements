// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export enum GraphqlType {
  Element = "Element",
  NobleGas = "NobleGas",
  AkaliMetal = "AkaliMetal",
  AlkalineEarthMetal = "AlkalineEarthMetal",
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

  type NobleGas implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherNobleGasses: [NobleGas]!
  }

  type AkaliMetal implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherAkaliMetals: [AkaliMetal]!
  }

  type AlkalineEarthMetal implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherAlkalineEarthMetal: [AlkalineEarthMetal]!
  }

  enum ElementTypes {
    NONMETAL
    NOBLE_GAS
    ALKALI_METAL
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
