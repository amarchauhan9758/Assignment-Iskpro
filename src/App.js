import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/sideBar/sideBar';
import HeroSection from './components/HeroSection/HeroSection';

const  styled = {
  headerStyled: {
    overflow : "hidden"
  },
  heroStyled : {
    padding : "32px"
  }

}


function App() {
  const [activeItem, setActiveItem] = useState(1);

  const handleItemClick = (index) => {
    setActiveItem(index);
  }

  return (
    <div className="App">
      <div className='Parent-div'>
        <SideBar activeItem={activeItem} handleItemClick={handleItemClick} />
        <div style={styled.headerStyled}>
          <Header />
          <div style={styled.heroStyled} >
            <HeroSection activeItem={activeItem} />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
