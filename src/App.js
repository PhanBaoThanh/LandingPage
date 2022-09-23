import { useState } from 'react';
import './App.scss';
import Slider from './components/content/slider/Slider';
import DarkContent from './components/content/darkContent/DarkContent';
import Headers from './components/header/Header';
import Product from './components/content/product/Product';
import LightContent from './components/content/lightContent/LightContent';
import Feature from './components/content/feature/Feature';
import Service from './components/content/service/Service';
import ServiceOverview from './components/content/serviceOverview/ServiceOverview';
import Media from './components/content/media/Media';
import Project from './components/content/project/Project';
import Contact from './components/content/contact/Contact';
import Footer from './components/footer/Footer'
import BtnMode from './components/mode/BtnMode';
import Container from './components/container/Container'
import {DarkmodeContext} from './components/context/DarkmodeContext'

function App() {
  const [darkmode,setDarkmode] = useState(false)
  return (
    <DarkmodeContext.Provider value={{darkmode,setDarkmode}}>
      <div className='app' data-theme={darkmode ? "dark" : "light"}>
        <BtnMode />
        <Container>
          <Headers />
        </Container>
        <Slider link="home" />
          <LightContent link="feature" text="Featured Collection" Item={Feature} />

          <DarkContent link="product" text="Products" Item={Product} />
          <LightContent link='service' text="Services" Item={Service} />

        <Contact link='contact' />
        <Project link='project' />
          <DarkContent link='serviceOverview' text="Services" Item={ServiceOverview} />

          <LightContent link='media' text="Latest Media" Item={Media} />

        <Footer />
      </div>
    </DarkmodeContext.Provider>
  );
}

export default App;
