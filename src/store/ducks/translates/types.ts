export enum TranslatesActions {
  LOAD_RESET = "@translate/LOAD_RESET",
  LOAD_REQUEST = "@translate/LOAD_REQUEST",
  LOAD_SUCCESS = "@translate/LOAD_SUCCESS",
  LOAD_FAILURE = "@translate/LOAD_FAILURE",
}

export interface Entry {
  id: number;
  literal_number: number;
  extented_number: string;
}

export interface TranslatesState {
  readonly history: Entry[];
  readonly error: boolean;
  readonly msg: string;
}
