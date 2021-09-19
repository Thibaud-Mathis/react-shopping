import React from 'react'
import styled from 'styled-components'
import ProductItems from './ProductItem'
import { popularProducts } from '../data'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`

const Products = () => {
    return (
        <Container>
            {
                popularProducts.map((item) => (
                    <ProductItems key={item.id} item={item}/>
                ))
            }
        </Container>
    )
}

export default Products
