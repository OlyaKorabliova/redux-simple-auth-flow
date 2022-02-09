import { Provider } from "react-redux";
import ToDoList from "./components/ToDoList";
import configureStore from "./store";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ToDoList />
    </Provider>
  );
}

export default App;
