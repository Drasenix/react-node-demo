import CategoryMenuComponent from "./features/category/CategoryMenuComponent";
import "../src/styles/App/App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <CategoryMenuComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
