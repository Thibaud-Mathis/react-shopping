import React from 'react'
import styled from 'styled-components'


const CategoryItem = ({ item }) => {
    return (
        <Container>
            <h1>{item.title}</h1>
        </Container>
    )
}

export default CategoryItem
