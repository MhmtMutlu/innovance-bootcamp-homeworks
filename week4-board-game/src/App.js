import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import Player from "./components/Player/Player";
import CharacterContextProvider from "./contexts/CharacterContext";
import Layout from "./layout/Layout";


function App() {
  return (
    <CharacterContextProvider>
      <Layout>
        <Header />
        <Map>
          <Player />
        </Map>
      </Layout>
    </CharacterContextProvider>
  );
}

export default App;
