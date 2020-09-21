import { DB_ELEMENT_TYPES, getElementsByType } from "../data";
import { Element, convertDbArrayToElements } from "../graphql-models";

export const otherElements = (dbElementType: DB_ELEMENT_TYPES) => async (
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

export const NobleGas = {
  otherNobleGasses: otherElements(DB_ELEMENT_TYPES.NOBLE_GAS),
};

export const AkaliMetal = {
  otherAkaliMetals: otherElements(DB_ELEMENT_TYPES.ALKALI_METAL),
};

export const AlkalineEarthMetal = {
  otherAlkalineEarthMetals: otherElements(
    DB_ELEMENT_TYPES.ALKALINE_EARTH_METAL
  ),
};

export const Metalloid = {
  otherMetalloids: otherElements(DB_ELEMENT_TYPES.METALLOID),
};

export const Halogen = {
  otherHalogens: otherElements(DB_ELEMENT_TYPES.HALOGEN),
};

export const Metal = {
  otherMetals: otherElements(DB_ELEMENT_TYPES.METAL),
};

export const TransitionMetal = {
  otherTransitionMetals: otherElements(DB_ELEMENT_TYPES.TRANSITION_METAL),
};

export const Lanthanide = {
  otherLanthanides: otherElements(DB_ELEMENT_TYPES.LANTHANIDE),
};

export const Transactinide = {
  otherTransactinides: otherElements(DB_ELEMENT_TYPES.TRANSACTINIDE),
};
