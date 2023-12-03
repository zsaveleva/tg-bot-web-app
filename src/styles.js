import styled from "styled-components";

export const StyledSpan = styled('span')`
    & {
        padding: ${props => props.pd || ''};
        margin-top: ${props => props.mt || ''};
        margin-bottom: ${props => props.mb || ''};
        font-size: ${props => props.fs || '14px'};
        font-weight: ${props => props.fw || 500};
    }
`

export const Flex = styled('div')`
    & {
        display: flex;
        flex-direction: ${props => props.direction || ''};
        justify-content: ${props => props.justify || ''};
        align-items: ${props => props.align || ''};
        gap: ${props => props.gap || ''};
        flex-wrap: ${props => props.wrap || ''};
        margin-bottom: ${props => props.mb || ''};
    }
`

export const StyledSelect = styled('select')`
    & {
        width: ${props => props.width || ''};
        margin-bottom: 0;
        padding-left: 6px;
        background-color: transparent;
        height: ${props => props.height || '28px'};
        border-radius: 8px;
        border: 1px solid var(--tg-theme-hint-color);
        outline: none;
        font-size: 14px;
    }

    &:focus-visible {
        border: 1px solid var(--tg-theme-link-color);
        background-color: var(--tg-theme-secondary-bg-color);
    }
`

export const StyledOption = styled('option')`
    &:hover {
        background-color: var(--tg-theme-link-color);
        cursor: pointer;
    }
`
