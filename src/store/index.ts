import { createStore, Store, applyMiddleware } from "redux";
import { TranslatesState } from "./ducks/translates/types";
import rootReducer from "./ducks/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/rootSaga";
const sagaMiddleware = createSagaMiddleware();
export interface ApplicationState {
  translate: TranslatesState;
}
const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
export default store;
