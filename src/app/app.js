import { Provider } from "react-redux";
import store from './store'

import { DarkModeScript } from '../features/DarkModeScript';
import { ChatBody } from '../components/ChatBody';
import { CloudFlareScript } from '../features/CloudFlareScript';
import { NextRouteAnnouncer } from '../features/NextRouteAnnouncer';

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