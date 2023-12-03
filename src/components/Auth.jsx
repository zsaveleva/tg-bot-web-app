import React from 'react'
import { StyledСenterBlock } from './ItemList'
import { StyledSpan } from '../styles'
import styled from 'styled-components'

const StyledContent = styled('div')`
    & {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`

export const Auth = () => {
    return (
        <StyledСenterBlock>
            <StyledContent>
                <svg xmlns="http://www.w3.org/2000/svg" width="84" height="100" viewBox="0 0 84 100" fill="none">
                    <path d="M71.1662 35.1V29.1666C71.1662 13.0584 58.108 0 41.9996 0C25.8912 0 12.833 13.0584 12.833 29.1666V35.1C5.2498 38.4096 0.343945 45.8928 0.333008 54.1666V79.1666C0.34668 90.6668 9.66601 99.9863 21.1662 100H62.8328C74.333 99.9863 83.6523 90.6668 83.6662 79.1666V54.1666C83.6555 45.8928 78.7494 38.4096 71.1662 35.1ZM46.1662 70.8334C46.1662 73.1346 44.3008 75 41.9996 75C39.6984 75 37.833 73.1346 37.833 70.8334V62.5C37.833 60.1988 39.6984 58.3334 41.9996 58.3334C44.3008 58.3334 46.1662 60.1988 46.1662 62.5V70.8334ZM62.833 33.3334H21.1662V29.1668C21.1662 17.6609 30.4936 8.3334 41.9996 8.3334C53.5057 8.3334 62.833 17.6607 62.833 29.1668V33.3334Z" fill="black" />
                </svg>
                <StyledSpan>
                    Введи пароль, чтобы получить доступ к базе.
                </StyledSpan>
            </StyledContent>
        </StyledСenterBlock>
    )
}
