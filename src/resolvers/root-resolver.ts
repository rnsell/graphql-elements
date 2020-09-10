import { Element } from "../models";
import { GraphqlType } from "../typedefs";

const elements: any[] = [
  {
    atomicNumber: 1,
    name: "Hydrogen",
    symbol: "H",
  },
  {
    atomicNumber: 2,
    name: "Helium",
    symbol: "He",
  },
].map((element) => {
  return new Element(element);
});

type Resolver<T> = (obj: T, context: any, info: any) => Promise<any> | any;

export const resolvers = {
  Query: {
    hello: () => "Hello world!",
    elements: () => elements,
  },
  IAtomicElement: {
    __resolveType: (obj: any) => {
      return obj.__resolveType();
    },
  },
};
