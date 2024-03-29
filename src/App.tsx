import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import {combinedReducers} from './redux_store/reducers';

import GlobalStyle from './styles/global/reset';
import FontStyle from './styles/global/fonts';
import SplitStructure from './styles/global/styled_containers/split/SplitStructure';

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combinedReducers,
  composeEnhancers(applyMiddleware(thunk))
);

function App() {

  return (
    <>
      <GlobalStyle />
      <FontStyle />
      <Provider store={store}>
        <SplitStructure />
      </Provider></>
  );
}

export default App;
