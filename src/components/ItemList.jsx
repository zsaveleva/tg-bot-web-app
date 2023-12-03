import React from 'react'
import { Item } from './Item'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'
import styled from 'styled-components'

export const StyledСenterBlock = styled('div')`
    & {
        height: 70vh;
        display: flex;
        justify-content: center;
       align-items: center;
       color: var(--tg-theme-hint-color);
       font-size: 14px;
    }
`

const StyledLoaderContainer = styled(StyledСenterBlock)`
    span {
        color: var(--tg-theme-link-color) !important;
    }
`

export const ItemList = ({ admin }) => {
    const camps = useSelector(state => state.camps.camps)
    const isLoading = useSelector(state => state.camps.isLoading)
    const searchValue = useSelector(state => state.search.value)
    const foundCamps = camps.filter((el) =>
        el.name.toUpperCase().includes(searchValue.toUpperCase()) || el.geo.toUpperCase().includes(searchValue.toUpperCase()))

    return (
        <>
            {
                isLoading
                    ? <StyledLoaderContainer>
                        <CircularProgress />
                    </StyledLoaderContainer>
                    : searchValue === '' && camps.length != 0
                        ? camps.map((el) => {
                            return (
                                <Item
                                    admin={admin}
                                    key={el._id}
                                    id={el._id}
                                    name={el.name}
                                    geo={el.geo}
                                    address={el.info.address}
                                    person={el.info.person}
                                    contacts={el.info.contacts}
                                    tax={el.info.tax}
                                    opf={el.info.opf}
                                    comment={el.info.comment}
                                    shifts={el.shifts}
                                    vacancy={el.vacancy}
                                    date={el.date}
                                    seasons={el.seasons}
                                    feedback={el.feedback}
                                />
                            )
                        })
                        : foundCamps.length != 0
                            ? foundCamps.map((el) => {
                                return (
                                    <Item
                                        admin={admin}
                                        key={el._id}
                                        id={el._id}
                                        name={el.name}
                                        geo={el.geo}
                                        address={el.info.address}
                                        person={el.info.person}
                                        contacts={el.info.contacts}
                                        tax={el.info.tax}
                                        opf={el.info.opf}
                                        comment={el.info.comment}
                                        shifts={el.shifts}
                                        vacancy={el.vacancy}
                                        date={el.date}
                                        seasons={el.seasons}
                                        feedback={el.feedback}
                                    />
                                )
                            })
                            : <StyledСenterBlock>
                                К сожалению, ничего не найдено
                            </StyledСenterBlock>
            }
        </>
    )
}
