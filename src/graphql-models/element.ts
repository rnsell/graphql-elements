import { GraphqlType } from "../typedefs";
import {
  GRAPHQL_ELEMENT_TYPES,
  getGraphqlElementForResolver,
  getGraphqlElementTypeFromDb,
} from "./element-types";

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
  atomicMass: number;
  period: number;
  group: number;
  electronegativity: number;
  elementType: GRAPHQL_ELEMENT_TYPES;

  constructor(object: any) {
    this.atomicNumber = object?.AtomicNumber;
    this.name = object?.Element;
    this.symbol = object?.Symbol;
    this.atomicMass = object?.AtomicMass;
    this.period = Number(object?.Period);
    this.group = Number(object?.Group);
    this.electronegativity = Number(object?.Electronegativity);
    this.elementType = getGraphqlElementTypeFromDb(object.Type);
  }

  __resolveType() {
    return getGraphqlElementForResolver(this.elementType);
  }
}
