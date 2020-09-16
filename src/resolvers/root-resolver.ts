import { Element, convertDbArrayToElements } from "../graphql-models";
import { getElements, getElementsByType, DB_ELEMENT_TYPES } from "../data";

type Resolver<T> = (obj: T, context: any, info: any) => Promise<any> | any;

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
  NobleGasElement: {
    otherNobleGasElements: async (parent: Element) => {
      const nobleGasDbElements = await getElementsByType(
        DB_ELEMENT_TYPES.NOBLE_GAS
      );
      const nobleGasElements: Element[] = convertDbArrayToElements(
        nobleGasDbElements
      );
      const nobleGasElementsWithoutCurrentElement = nobleGasElements.filter(
        (element) => {
          return element.atomicNumber !== parent.atomicNumber;
        }
      );

      return nobleGasElementsWithoutCurrentElement;
    },
  },
};
