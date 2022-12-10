
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import RoutesMain from "./routes";
import { StyledText } from "./styles/typhography";


function App() {

  const {globalLoading} = useContext(UserContext)

  return (
    <div className="App">
      { globalLoading ? (
        <StyledText tag="h1" color="black" textAlign="center">
          Carregando...
        </StyledText>
      ) : (
        
      <>
        <RoutesMain />
      </>
      )}
    </div>
  );
}

export default App;
