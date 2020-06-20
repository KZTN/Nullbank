export enum TranslatesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

export interface Entry {
  id: number;
  literal_numer: number;
  extented_number: string;
}

export interface TranslatesState {
  readonly history: Entry[];
  readonly loading: boolean;
  readonly error: boolean;
  readonly msgerror: string;
}
