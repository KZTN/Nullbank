import { action } from "typesafe-actions";
import { TranslatesTypes } from "./types";

export const LoadRequest = (entry: string) =>
  action(TranslatesTypes.LOAD_REQUEST, entry);
export const LoadSucess = (data: string) =>
  action(TranslatesTypes.LOAD_SUCCESS, data);
export const LoadFailure = (error: string) =>
  action(TranslatesTypes.LOAD_FAILURE, error);
