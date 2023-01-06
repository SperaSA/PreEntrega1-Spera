import './App.css';

import Item from './componentes/item/Item';
import FlexWrapper from './componentes/flexWrapper/FlexWrapper';
import NavBar from './componentes/navbar/NavBar';
import ItemsListContainer from './componentes/itemsListContainer/ItemsListContainer';

function App() {

  return (
    <>
        <NavBar/>
        <ItemsListContainer text = "¡Bienvenidos a Mi Home.deco!" size="100px" color="rgba(245, 225, 200, 0.836)" shadow="0.1em 0.1em 0.2em black" />
        <FlexWrapper>
        <Item title = "Especiero" price = {400} detail = "Hermosos especieros" imgurl = "https://envasesdevoto.com/wp-content/uploads/2020/08/NEGRO.png" />
        <Item />
        <Item />
        </FlexWrapper>
  </>
  );
}


export default App;
