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

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
`

// const Products = styled.div``

const Categories = () => {
    return (
        <Container>
            <Annoucement/>
            <Navbar/>
            <Title>hop</Title>
            <FilterContainer>
                <Filter><FilterText>filter1</FilterText></Filter>
                <Filter><FilterText>filter1</FilterText></Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default Categories;