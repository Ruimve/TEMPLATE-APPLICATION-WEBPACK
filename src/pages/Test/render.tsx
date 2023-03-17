import { render as rtlRender, RenderOptions } from '@testing-library/react';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import { RootState } from '../../redux/store';
import { reducer } from '../reducer';

interface CustomRenderOptions extends RenderOptions {
  preloadedState?: RootState;
  store?: ReturnType<typeof configureStore>;
}

const render = (ui: React.ReactElement, options: CustomRenderOptions) => {
  const {
    preloadedState = {},
    store = configureStore({ reducer, preloadedState }),
    ...renderOptions
  } = options;

  const Wrapper: React.FC<{ children: JSX.Element }> = (props: { children: JSX.Element }) => {
    return (
      <Provider store={store}>
        {props.children}
      </Provider>
    )
  };

  rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export {
  render
}