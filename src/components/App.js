import { Provider } from "react-redux";
import store from "../Redux/store";
import Weather from "./Weather";

function App() {
  return (
    <Provider store={store}>
      <Weather />
    </Provider>

  );
}

export default App;
