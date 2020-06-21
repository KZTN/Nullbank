import { action } from "typesafe-actions";
import { TranslatesActions } from "./types";

export const LoadRequest = (literal_number: number) =>
  action(TranslatesActions.LOAD_REQUEST, literal_number);
export const LoadSucess = (data: string[]) =>
  action(TranslatesActions.LOAD_SUCCESS, data);
export const LoadFailure = (error: string) =>
  action(TranslatesActions.LOAD_FAILURE, error);

export const LoadReset = () => action(TranslatesActions.LOAD_RESET);
