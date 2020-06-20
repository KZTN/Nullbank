export enum TranslatesTypes {
  LOAD_REQUEST = "@repositories/LOAD_REQUEST",
  LOAD_SUCCESS = "@repositories/LOAD_SUCCESS",
  LOAD_FAILURE = "@repositories/LOAD_FAILURE",
}

export interface Entry {
  id: number;
  literal_number: number;
  extented_number: string;
}

export interface TranslatesState {
  readonly history: Entry[];
  readonly error: boolean;
  readonly msgerror: string;
}
