import { Element } from "./element";

export const convertDbArrayToElements = (dbElement: Array<any>): Element[] => {
  const elements = dbElement.map((e: any) => {
    return new Element(e);
  });

  return elements;
};
