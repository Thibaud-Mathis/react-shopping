import React from 'react'
import styled from "styled-components"
import Navbar from '../components/Navbar';
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';

const Container = styled.div`
    
`
const Title = styled.h1`
    margin: 0 20px 20px 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`

// const Products = styled.div``

const ProductList = () => {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Title>Dresses</Title>
            <FilterContainer>
                <Filter>filter1</Filter>
                <Filter>filter2</Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList;