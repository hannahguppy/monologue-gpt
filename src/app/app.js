import { Provider } from "react-redux";

import store from './store'
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from '../components/Home';

const App = () => {
  return(
    <Provider store={store}>
      <Header />
      <Home />
      <Footer />
    </Provider>
  )
}

export default App