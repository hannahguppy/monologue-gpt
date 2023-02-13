import { Provider } from "react-redux";
import store from './store'

import { DarkModeScript } from '../features/window-scripts/DarkModeScript';
import { ChatBody } from '../components/ChatBody';
import { CloudFlareScript } from '../features/window-scripts/CloudFlareScript';
import { NextRouteAnnouncer } from '../features/window-scripts/NextRouteAnnouncer';

const App = () => {
  return(
    <Provider store={store}>
      <div id="__next">
        <DarkModeScript />
        <ChatBody />
        <div className="absolute top-0 left-0 right-0 z-[2]"></div>
      </div>
      <CloudFlareScript />
      <NextRouteAnnouncer />
    </Provider>
  )
}

export default App