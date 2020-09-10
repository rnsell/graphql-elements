import { GraphqlType } from "../typedefs";

interface IAtomicElement {
  atomicNumber: number;
  name: string;
  symbol: string;
}

interface IResolverModel {
  __resolveType: () => GraphqlType;
}

export class Element implements IAtomicElement, IResolverModel {
  atomicNumber: number;
  name: string;
  symbol: string;

  constructor(object: any) {
    this.atomicNumber = object?.atomicNumber;
    this.name = object?.name;
    this.symbol = object?.symbol;
  }

  __resolveType() {
    return GraphqlType.Element;
  }
}
