import { Element, convertDbArrayToElements } from "../graphql-models";
import { getElements, getElementsByType, DB_ELEMENT_TYPES } from "../data";

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
    hello: () => "Hello world!",
    elements: async () => {
      const allElements = await getElements();
      const boop = new Set();

      const elements = convertDbArrayToElements(allElements);

      return elements;
    },
  },
  IAtomicElement: {
    __resolveType: (obj: any) => {
      return obj.__resolveType();
    },
  },
  NobleGas: {
    otherNobleGasses: otherElements(DB_ELEMENT_TYPES.NOBLE_GAS),
  },
  AkaliMetal: {
    otherAkaliMetals: otherElements(DB_ELEMENT_TYPES.ALKALI_METAL),
  },
  AlkalineEarthMetal: {
    otherAlkalineEarthMetal: otherElements(
      DB_ELEMENT_TYPES.ALKALINE_EARTH_METAL
    ),
  },
};
