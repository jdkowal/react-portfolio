import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return(
<div>
<Header />
<div>
<PortfolioContainer />
</div>
<Footer />
</div>
    );
}
export default App;
