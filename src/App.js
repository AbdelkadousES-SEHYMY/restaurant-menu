import { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import NavBar from "./components/NavBar";
import { items } from "./data";


function App() {
  const [itemsData, setItemsData] = useState(items);
  const allCategory = ['all', ...new Set(items.map(item => item.category))]
  //filter by category
  const filterByCategory = (cat) => {
    console.log(allCategory);
    if (cat === "all") setItemsData(items);
    else {
      const filteredItems = items.filter(item => item.category === cat)
      setItemsData(filteredItems)
    
    }
  }
    //filter by search
    const filterBySearch = (word) => {
      if (word !== '') {
        const filteredItems = items.filter(item => item.title === word)
        setItemsData(filteredItems)

      }
  
    }
    return (
      <div className="color-body font">
        <NavBar filterBySearch={filterBySearch} />
        <Container>
          <Header />
          <Category
            filterByCategory={filterByCategory}
            allCategory={allCategory}
          />
          <ItemsList itemsData={itemsData} />
        </Container>
      </div>
    );
  }


export default App;
