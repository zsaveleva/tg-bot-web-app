import React from 'react'
import { Overlay } from './Overlay'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer } from '../store/reducers/drawer'
import { StyledSpan } from '../styles'
import { FilterBlock } from './FilterBlock'

const StyledDrawer = styled('div')`
    & {
        position: absolute;
        z-index: 100;
        cursor: default;
        background-color: var(--tg-theme-bg-color);
        top: 0;
        padding: 24px 16px;
        max-height: 100vh;
        gap: 16px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        transform: ${props => props.active ? 'transform: translateY(0%)' : 'translateY(-100%)'};
        transition: transform 0.15s;
        border-radius: 0 0 8px 8px;
    }
`

export const Flex = styled('div')`
    & {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export const StyledButton = styled('button')`
    & {
        position: ${props => props.position || ''};
        top: ${props => props.top || ''};
        right: ${props => props.right || ''};
        background-color: ${props => props.bc || 'transparent'};
        border: ${props => props.border || 'none'};
        cursor: pointer;
    }
`

const filteringСonditions = [
    {
        title: 'По располажению:',
        points: [
            {
                name: 'СПб и ЛО',
                value: 'geo=Ленинградская область&geo=Санкт-Петербург'
            },
            {
                name: 'Краснодарский край',
                value: 'geo=Краснодарский край'
            },
            {
                name: 'Московская область',
                value: 'geo=Московская область&geo=Москва'
            },
            {
                name: 'Республика Крым',
                value: 'geo=Республика Крым'
            }
        ]
    },
    {
        title: 'По организационно-правовой форме:',
        points: [
            {
                name: 'ГБУ',
                value: 'info.opf=ГБУ'
            },
            {
                name: 'КО',
                value: 'info.opf=КО'
            },
            {
                name: 'Нет информации',
                value: 'info.opf=Нет информации'
            }
        ]
    },
    {
        title: 'По наличию свободных ставок:',
        points: [
            {
                name: 'Есть свободные ставки',
                value: 'vacancy.value=Есть'
            },
            {
                name: 'Нет свободных ставок',
                value: 'vacancy.value=Нет'
            }

        ]
    },
    {
        title: 'Налоговая льгота:',
        points: [
            {
                name: 'Подключена',
                value: 'info.tax=Подключена'
            },
            {
                name: '50/50',
                value: 'info.tax=50/50'
            },
            {
                name: 'Не подключена',
                value: 'info.tax=Не подключена'
            }
        ]
    }
]

export const Drawer = () => {
    const dispatch = useDispatch()
    const drawerState = useSelector(state => state.drawer.value)

    return (
        <Overlay
            active={drawerState}
            onClick={() => dispatch(setDrawer(false))}
        >
            <StyledDrawer
                active={drawerState}
                onClick={(e) => e.stopPropagation()}
            >
                <Flex>
                    <StyledSpan
                        fw={700}
                    >
                        Фильтрация
                    </StyledSpan>
                    <StyledButton
                        onClick={() => dispatch(setDrawer(false))}
                    >
                        <svg style={{ transform: 'rotate(-45deg)', transition: 'transform 0.3s ease-in-out' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_514_10)">
                                <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="var(--tg-theme-hint-color)" />
                            </g>
                            <defs>
                                <clipPath id="clip0_514_10">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </StyledButton>
                </Flex>
                {filteringСonditions.map((el) => {
                    return (
                        <FilterBlock
                            key={el.title}
                            title={el.title}
                            points={el.points}
                        />
                    )
                })}
            </StyledDrawer>
        </Overlay>
    )
}
