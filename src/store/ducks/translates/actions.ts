import { action } from "typesafe-actions";
import { TranslatesActions } from "./types";

export const LoadRequest = (literal_number: number) =>
  action(TranslatesActions.LOAD_REQUEST, literal_number);
export const LoadSucess = (extented_number: String) =>
  action(TranslatesActions.LOAD_SUCCESS, extented_number);
export const LoadFailure = (error: string) =>
  action(TranslatesActions.LOAD_FAILURE, error);
