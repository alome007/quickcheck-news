import React, {useEffect} from 'react';
import {useState} from 'react';
import {Provider} from 'react-redux';

import RootNavigator from './src/navigation';
import generateStore from './src/redux/store';
import {WithSplashScreen} from './src/screens/splashscreen/WithSplashScreen';

//store & customTypes
const store = generateStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  useEffect(() => {
    setIsAppReady(true);
  }, []);
  return (
    <WithSplashScreen isAppReady={true}>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </WithSplashScreen>
  );
}
