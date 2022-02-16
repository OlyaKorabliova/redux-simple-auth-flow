import { Provider } from "react-redux";
import ToDoList from "./components/ToDoList";
import configureStore from "./store";
import configAxios from "./configAxios";

const store = configureStore();
configAxios();

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
