// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export enum GraphqlType {
  Element = "Element",
  NobleGas = "NobleGas",
  AkaliMetal = "AkaliMetal",
  AlkalineEarthMetal = "AlkalineEarthMetal",
  Metalloid = "Metalloid",
  Halogen = "Halogen",
  Metal = "Metal",
  TransitionMetal = "TransitionMetal",
  Lanthanide = "Lanthanide",
  Transactinide = "Transactinide",
}

export const typeDefs = gql`
  type Query {
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
    otherAlkalineEarthMetals: [AlkalineEarthMetal]!
  }

  type Metalloid implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherMetalloids: [Metalloid]!
  }

  type Halogen implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherHalogens: [Halogen]!
  }

  type Metal implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherMetals: [Metal]!
  }

  type TransitionMetal implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherTransitionMetals: [TransitionMetal]!
  }

  type Lanthanide implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherLanthanides: [Lanthanide]!
  }

  type Transactinide implements IAtomicElement {
    atomicNumber: Int!
    name: String!
    symbol: String!
    atomicMass: Float!
    period: Int!
    group: Int!
    electronegativity: Float!
    elementType: ElementTypes!
    otherTransactinides: [Transactinide]!
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
