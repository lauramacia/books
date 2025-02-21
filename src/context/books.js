import { createContext, useState } from "react";

const BooksContext = createContext();

// although named Provider, this is not same as context provider, this is a "wrapper" provider
function Provider({ children }) {
  

  return <BooksContext.Provider value={{}}>
    {children}
  </BooksContext.Provider>;
}

export { Provider };
export default BooksContext;