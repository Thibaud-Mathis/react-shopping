import React from 'react'
import styled from 'styled-components'
import CategoryItem from './CategoryItem'
import { categories } from '../data'

const Categories = () => {
    return (
        <Container>
            {
                categories.map((item) => {
                    <CategoryItem item={item}/>
                })
            }
        </Container>
    )
}

export default Categories
