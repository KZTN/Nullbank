import { createStore, Store } from "redux";
import { TranslatesState } from "./ducks/translates/types";
import rootReducer from "./ducks/rootReducer";
export interface ApplicationState {
  translate: TranslatesState;
}
const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
