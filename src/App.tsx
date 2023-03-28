import React,{useEffect,useState} from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import AllRoutes from "./routes";
import Header from "./components/Header";
import backgroundImg from "./assets/background.jpg";
import { CasinuFinanceProvider } from "./casinu-provider";

function App() {
  
  const [zoom, setZoom] = useState((window.devicePixelRatio*100-7<94?93.5:window.devicePixelRatio*100-7).toFixed(1)+"vh");

  useEffect(() => {
    const handleResize = () => {
      const height = window.devicePixelRatio*100-7<94?93.5:window.devicePixelRatio*100-7
      setZoom((height).toFixed(0)+"vh");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [window.devicePixelRatio]);
  //
  return (
    <CasinuFinanceProvider>
      <Flex flexDir="column" w="100%">
        <Header />
        <Flex h={zoom}>
          <Sidebar />
          <Flex
            w={"100%"}
            flexDir="column"
            background="#181A25"
          >
            <Box>
              <AllRoutes />
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </CasinuFinanceProvider>
  );
}

export default App;

/*
w={"100%"}
flexDir="column"
backgroundImage="radial-gradient(at 2rem 2rem ,rgb(41, 36, 31),rgb(7, 7, 7),rgb(133, 123, 123)) !important"
backgroundSize="cover !important"


w={"100%"}
flexDir="column"
backgroundImage={`url(${backgroundImg})`}
backgroundPosition="center"
backgroundSize="cover"
backgroundRepeat="no-repeat"
*/
