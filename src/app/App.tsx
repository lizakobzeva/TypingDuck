import { QueryClient, QueryClientProvider } from "react-query";
import TypingText from "../entities/TypingText";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TypingText />
    </QueryClientProvider>
  );
}

export default App;
