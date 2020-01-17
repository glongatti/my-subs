import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { AppNavigator } from './app/actions/navigator';
import NavigatorService from './services/navigator';

import Store from './app/store';

const store = Store;

export default class App extends React.PureComponent {
  render() {
    return (
      <StoreProvider store={store}>
        <AppNavigator ref={() => NavigatorService.setContainer(store)} />
        {/* <AppNavigator /> */}
      </StoreProvider>
    );
  }
}
