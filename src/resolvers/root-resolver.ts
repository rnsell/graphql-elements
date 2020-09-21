import { Element, convertDbArrayToElements } from "../graphql-models";
import { getElements, getElementsByType, DB_ELEMENT_TYPES } from "../data";
import {
  NobleGas,
  AkaliMetal,
  AlkalineEarthMetal,
  Metalloid,
  Halogen,
  Metal,
  TransitionMetal,
  Lanthanide,
  Transactinide,
} from "./element-type-resolvers";

const otherElements = (dbElementType: DB_ELEMENT_TYPES) => async (
  parent: Element
) => {
  const dbElements = await getElementsByType(dbElementType);
  const domainElements: Element[] = convertDbArrayToElements(dbElements);
  const nobleGasElementsWithoutCurrentElement = domainElements.filter(
    (element) => {
      return element.atomicNumber !== parent.atomicNumber;
    }
  );

  return nobleGasElementsWithoutCurrentElement;
};

export const resolvers = {
  Query: {
    elements: async () => {
      const allElements = await getElements();

      const elements = convertDbArrayToElements(allElements);

      return elements;
    },
  },
  IAtomicElement: {
    __resolveType: (obj: any) => {
      return obj.__resolveType();
    },
  },
  NobleGas,
  AkaliMetal,
  AlkalineEarthMetal,
  Metalloid,
  Halogen,
  Metal,
  TransitionMetal,
  Lanthanide,
  Transactinide,
};
