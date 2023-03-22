import React from 'react';
import {QueryClient, QueryClientProvider, useInfiniteQuery} from "react-query";
import BaseLayout from "./components/base-layout";

function App() {


    const queryClient = new QueryClient()
  return (
      <QueryClientProvider client={queryClient}>
      <BaseLayout />
      </QueryClientProvider>
  );
}

export default App;
