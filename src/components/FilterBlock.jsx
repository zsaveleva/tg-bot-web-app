import React from 'react'
import { StyledSpan } from '../styles'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addFilteringValue, removeFilteringValue, setFilterValue } from '../store/reducers/filter'

const StyledContainer = styled('div')`
    & {
        display: flex;
        flex-direction: column;
    }
`

const StyledPointsContainer = styled('div')`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 4px;
`

const StyledLabel = styled('label')`
    & {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 12px;
        font-weight: 400;
    }
`

export const FilterBlock = ({ title, points }) => {
    const dispatch = useDispatch()

    const handleChange = (e) => {
        if (e.target.checked) {
            dispatch(addFilteringValue(e.target.value))
        } else {
            dispatch(removeFilteringValue(e.target.value))
        }

    }

    return (
        <StyledContainer>
            <StyledSpan
                mb={'10px'}
            >
                {title}
            </StyledSpan>
            <StyledPointsContainer>
                {points.map((el) => {
                    return (
                        <StyledLabel
                            key={el.name}
                        >
                            <input
                                type='checkbox'
                                style={{ cursor: 'pointer' }}
                                value={el.value}
                                onChange={handleChange}
                            />
                            {el.name}
                        </StyledLabel>
                    )
                })}
            </StyledPointsContainer>
        </StyledContainer>
    )
}
