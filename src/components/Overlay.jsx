import React from 'react'
import styled from 'styled-components'

const StyledOverlay = styled('div')`
    & {
        position: fixed;
        top: 0;
        left: 0;
        display: ${props => props.display || ''};
        justify-content: ${props => props.justify || ''};
        align-items: ${props => props.align || ''};
        background: rgba(0, 0, 0, .8);
        -webkit-backdrop-filter: blur(8px);
        backdrop-filter: blur(8px);
        z-index: 1001;
        --animate-duration: 0.2s;
        width: 100%;
        height: 100%;
        opacity: ${props => props.active ? 1 : 0};
        pointer-events: ${props => props.active ? 'all' : 'none'};
        transition: opacity 0.2s;
        cursor: pointer;
    }
`

export const Overlay = ({ active, display, justify, align, onClick, children }) => {
    return (
        <StyledOverlay
            active={active}
            onClick={onClick}
            display={display}
            justify={justify}
            align={align}
        >
            {children}
        </StyledOverlay>
    )
}
