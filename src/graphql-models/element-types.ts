import { DB_ELEMENT_TYPES } from "../data";
import { match } from "ts-pattern";
import { GraphqlType } from "../typedefs";

export enum GRAPHQL_ELEMENT_TYPES {
  NONMETAL = "NONMETAL",
  NOBLE_GAS = "NOBLE_GAS",
  AlKALI_METAL = "AlKALI_METAL",
  ALKALINE_EARTH_METAL = "ALKALINE_EARTH_METAL",
  METALLOID = "METALLOID",
  HALOGEN = "HALOGEN",
  METAL = "METAL",
  TRANSITION_METAL = "TRANSITION_METAL",
  LANTHANIDE = "LANTHANIDE",
  TRANSACTINIDE = "TRANSACTINIDE",
  NO_TYPE = "NO_TYPE",
}

export const getGraphqlElementTypeFromDb = (input: DB_ELEMENT_TYPES) => {
  return match(input)
    .with(DB_ELEMENT_TYPES.NONMETAL, () => GRAPHQL_ELEMENT_TYPES.NONMETAL)
    .with(DB_ELEMENT_TYPES.NOBLE_GAS, () => GRAPHQL_ELEMENT_TYPES.NOBLE_GAS)
    .with(
      DB_ELEMENT_TYPES.AlKALI_METAL,
      () => GRAPHQL_ELEMENT_TYPES.AlKALI_METAL
    )
    .with(
      DB_ELEMENT_TYPES.ALKALINE_EARTH_METAL,
      () => GRAPHQL_ELEMENT_TYPES.ALKALINE_EARTH_METAL
    )
    .with(DB_ELEMENT_TYPES.METALLOID, () => GRAPHQL_ELEMENT_TYPES.METALLOID)
    .with(DB_ELEMENT_TYPES.HALOGEN, () => GRAPHQL_ELEMENT_TYPES.HALOGEN)
    .with(DB_ELEMENT_TYPES.METAL, () => GRAPHQL_ELEMENT_TYPES.METAL)
    .with(
      DB_ELEMENT_TYPES.TRANSITION_METAL,
      () => GRAPHQL_ELEMENT_TYPES.TRANSITION_METAL
    )
    .with(DB_ELEMENT_TYPES.LANTHANIDE, () => GRAPHQL_ELEMENT_TYPES.LANTHANIDE)
    .with(
      DB_ELEMENT_TYPES.TRANSACTINIDE,
      () => GRAPHQL_ELEMENT_TYPES.TRANSACTINIDE
    )
    .with(DB_ELEMENT_TYPES.NO_TYPE, () => GRAPHQL_ELEMENT_TYPES.NO_TYPE)
    .otherwise(() => GRAPHQL_ELEMENT_TYPES.NO_TYPE);
};

export const getGraphqlElementForResolver = (
  input: GRAPHQL_ELEMENT_TYPES
): GraphqlType => {
  return match(input)
    .with(GRAPHQL_ELEMENT_TYPES.NOBLE_GAS, () => GraphqlType.NobleGasElement)
    .otherwise(() => GraphqlType.Element);
};