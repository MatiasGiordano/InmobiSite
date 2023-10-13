import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Banner from './components/banner/Banner';
import Slider from './components/slider/Slider';
import 'bootstrap/dist/css/bootstrap.min.css';
import casa1 from './assets/slider/casa1.png';
import casa2 from './assets/slider/casa2.png';
import casa3 from './assets/slider/casa3.png';

const imagenes = [
    { imageUrl: casa1, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa2, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa3, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa1, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa2, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa3, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa1, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa2, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa3, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa1, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa2, title: 'Philadelphia, PA', description: 'Descripcion 1' },
    { imageUrl: casa3, title: 'Philadelphia, PA', description: 'Descripcion 1' },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Slider imagenes={imagenes} />
    </div>
  );
}

export default App;
