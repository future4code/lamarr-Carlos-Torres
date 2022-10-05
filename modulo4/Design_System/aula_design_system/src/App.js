
import * as React from "react";
import { Pagina } from "./Pagina";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
function App() {
  return(

  <>

    <ChakraProvider theme={theme}>

      <Pagina />

    </ChakraProvider>

  </>


  )

}
export default App;