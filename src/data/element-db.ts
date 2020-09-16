import csv from "csvtojson";
import path from "path";
import { DB_ELEMENT_TYPES } from "./db-element-types";

let cache: any;
export const getElements = async (): Promise<Array<any>> => {
  const filePath = path.resolve(__dirname, "./elements.csv");
  if (cache) {
    return cache;
  }
  const jsonObj = await csv().fromFile(filePath);
  cache = jsonObj;

  return jsonObj as Array<any>;
};

export const getElementsByType = async (elementType: DB_ELEMENT_TYPES) => {
  const allTheElements = await getElements();

  return allTheElements.filter((element) => {
    return element.Type === elementType;
  });
};
