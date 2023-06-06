import { useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import { data } from './data';

function Home() {
  const [pics, SetPics] = useState(data);
  const selectCountry = (selectedCountry) => {
    const newArrayOfCountries = data.filter(el => el.country === selectedCountry || selectedCountry === "All");
    SetPics(newArrayOfCountries);
  };

  return (
    <div className="App">
      <div className='Header-with-menu'>
        <Header />
        <Menu selectCountry={selectCountry} />
      </div>
      <Main pics={pics} />
      <Footer />
    </div>
  );
}

export default Home;
