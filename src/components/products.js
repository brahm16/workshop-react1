import React, { Component } from "react";
import styled from "styled-components";
import products from "../data/products.json";
import Product from "./product";
export default class Products extends Component {
    render() {
        return (
            <ProductsWrapper>
                {products.map((product, index) => (
                    <Product product={product} key={index}></Product>
                ))}
            </ProductsWrapper>
        );
    }
}
const ProductsWrapper = styled.div`
text-align: center;
display: flex;
`;
