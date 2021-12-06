import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "./App.css";

import styled from "styled-components";

import Header from "./components/header";

import Welcome from "./components/welcome";

import Products from "./components/products";

import ProductDetails from "./components/productDetails";
function App() {
    return (
        <>
            <Header></Header>
            <AppFrame className="App">
                <Router basename="/">
                    <Routes>
                        <Route
                            path="/welcome"
                            render={(props) => <Welcome {...props} />}
                        ></Route>
                        <Route
                            path="/products"
                            render={(props) => <Products {...props} />}
                        ></Route>
                        <Route
                            path="/product/:name"
                            render={(props) => <ProductDetails {...props} />}
                        ></Route>
                        <Route exact render={() => <p>Default rendered page!</p>}></Route>
                    </Routes>
                </Router>
            </AppFrame>
        </>
    );
}
const AppFrame = styled.div`
text-align: center;
display: flex;
flex-direction: column;
`;
export default App;
