import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Flex, StyledOption, StyledSelect, StyledSpan } from '../styles'
import { useDispatch } from 'react-redux'
import { fetchRemoveCamp } from '../store/reducers/camps'

const StyledItem = styled('div')`
    & {
        overflow: hidden;
        border-radius: 8px;
        background-color: var(--tg-theme-bg-color);
        margin-bottom: 12px;
        cursor: pointer;
    }
`


const StyledTitleContainer = styled('div')`
    & {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const StyledDescriprion = styled('div')`
    & {
        opacity: ${props => props.active ? 1 : 0};
        transform: ${props => props.active ? 'translate(0)' : 'translateY(50%)'};
        max-height: ${props => props.active ? '' : '0'};
        padding: ${props => props.active ? ' 0 16px 16px 16px' : '0 16px'};
        font-size: 14px;
        text-align: left;
        transition: all 0.3s ease-in-out;
        line-height: 1.5;
    }
`

const StyledIconContainer = styled('div')`
    & {
        margin-right: 16px;
    }
`

const StyledInfoBlockContainer = styled('div')`
    & {
        display: flex;
        align-items: center;
        gap: 12px;
    }
`

const StyledInfoBlock = styled('div')`
    & {
        display: flex;
        flex-direction: column;
        gap: 2px;
        max-width: ${props => props.mw || ''};
    }
`

const StyledContent = styled('div')`
    & {
        display: flex;
        flex-direction: column;
        gap: 16px;
    }
`

const StyledUl = styled('ul')`
    & {
        margin-left: ${props => props.ml || ''};
        list-style-type: none;
    }
`

const StyledParentUl = styled(StyledUl)`
    & {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
    }
`

export const StyledButton = styled('button')`
    & {
        border-radius: 14px;
        background-color: ${props => props.bc || 'transparent'};
        font-weight: 600;
        cursor: ${props => props.cursor || 'pointer'};
        padding: 12px 24px;
        color: ${props => props.color || ''};
        font-size: 14px;
        border: ${props => props.border || ''};
        pointer-events:${props => props.disabled ? 'none' : null};
    }
`

const StyledButtonsContainer = styled('div')`
    & {
        display: flex;
        justify-content: space-between;
        margin-top: 16px;
    }
`

const optionArr = [
    {
        title: 'I смена',
        value: 'first'
    },
    {
        title: 'II смена',
        value: 'second'
    },
    {
        title: 'III смена',
        value: 'third'
    },
    {
        title: 'IV смена',
        value: 'fourth'
    },
    {
        title: 'Посмотреть всё',
        value: 'all'
    }

]

const ShiftTable = ({ arr }) => {
    return (
        <StyledUl
            ml={'16px'}
        >
            {arr.map((el) => {
                return (
                    <li
                        key={`${el.squad} + _key`}
                    >
                        {el.squad}: {el.quantity}
                    </li>
                )
            })}
            <li>
                <strong>
                    Всего: {arr.reduce((accum, item) => accum + item.quantity, 0)}
                </strong>
            </li>
        </StyledUl>
    )
}

export const Item = ({ admin, id, name, geo, address, person, contacts, tax, opf, comment, shifts, vacancy, date, seasons, feedback }) => {
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState('first')
    const dispatch = useDispatch()

    const onClickRemoveButton = (e) => {
        e.stopPropagation()
        let confirmBox = window.confirm(
            `Вы действительно хотите удалить объект «${name}, ${geo}»?

Вернуть данные уже не получится.`
        )
        if (confirmBox === true) {
            try {
                dispatch(fetchRemoveCamp(id))
            } catch (error) {
                console.error(error)
            }
        }
    }

    const shiftsArr = [
        {
            title: 'I смена',
            arr: (shifts.first),
        },
        {
            title: 'II смена',
            arr: (shifts.second)
        },
        {
            title: 'III смена',
            arr: (shifts.third)
        },
        {
            title: 'IV смена',
            arr: (shifts.fourth)
        }
    ]

    return (
        <StyledItem
            onClick={() => setActive(!active)}
        >
            <StyledTitleContainer>
                <StyledSpan
                    pd={'16px'}
                    fs={'16px'}
                >
                    {name}, {geo}
                </StyledSpan>
                <StyledIconContainer>
                    {active
                        ? <svg style={{ transform: 'rotate(-45deg)', transition: 'transform 0.3s ease-in-out' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_514_10)">
                                <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="var(--tg-theme-hint-color)" />
                            </g>
                            <defs>
                                <clipPath id="clip0_514_10">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        : <svg style={{ transition: 'transform 0.3s ease-in-out' }} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_514_10)">
                                <path d="M15 7H9V1C9 0.447719 8.55228 0 8 0C7.44772 0 7 0.447719 7 1V7H1C0.447719 7 0 7.44772 0 8C0 8.55228 0.447719 9 1 9H7V15C7 15.5523 7.44772 16 8 16C8.55228 16 9 15.5523 9 15V9H15C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7Z" fill="var(--tg-theme-hint-color)" />
                            </g>
                            <defs>
                                <clipPath id="clip0_514_10">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    }
                </StyledIconContainer>
            </StyledTitleContainer>
            <StyledDescriprion
                active={active}
            >
                <StyledContent>
                    <StyledInfoBlockContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_49_26)">
                                <path d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346629 6.40034 -0.15496 8.00888 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C15.9977 5.87897 15.1541 3.84547 13.6543 2.34568C12.1545 0.845886 10.121 0.00229405 8 0ZM8 14.6667C6.68146 14.6667 5.39253 14.2757 4.2962 13.5431C3.19987 12.8106 2.34539 11.7694 1.84081 10.5512C1.33622 9.33305 1.2042 7.99261 1.46144 6.6994C1.71867 5.40619 2.35361 4.21831 3.28596 3.28596C4.21831 2.3536 5.4062 1.71867 6.6994 1.46143C7.99261 1.2042 9.33305 1.33622 10.5512 1.8408C11.7694 2.34539 12.8106 3.19987 13.5431 4.2962C14.2757 5.39253 14.6667 6.68146 14.6667 8C14.6647 9.76752 13.9617 11.4621 12.7119 12.7119C11.4621 13.9617 9.76752 14.6647 8 14.6667Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M8.00008 6.66669H7.33341C7.1566 6.66669 6.98703 6.73693 6.86201 6.86195C6.73699 6.98697 6.66675 7.15654 6.66675 7.33335C6.66675 7.51016 6.73699 7.67973 6.86201 7.80476C6.98703 7.92978 7.1566 8.00002 7.33341 8.00002H8.00008V12C8.00008 12.1768 8.07032 12.3464 8.19534 12.4714C8.32037 12.5964 8.48994 12.6667 8.66675 12.6667C8.84356 12.6667 9.01313 12.5964 9.13815 12.4714C9.26318 12.3464 9.33341 12.1768 9.33341 12V8.00002C9.33341 7.6464 9.19294 7.30726 8.94289 7.05721C8.69284 6.80716 8.3537 6.66669 8.00008 6.66669Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M8 5.33331C8.55228 5.33331 9 4.8856 9 4.33331C9 3.78103 8.55228 3.33331 8 3.33331C7.44772 3.33331 7 3.78103 7 4.33331C7 4.8856 7.44772 5.33331 8 5.33331Z" fill="var(--tg-theme-hint-color)" />
                            </g>
                            <defs>
                                <clipPath id="clip0_49_26">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <StyledInfoBlock>
                            <StyledSpan><strong>Адрес:</strong> {address}</StyledSpan>
                            <StyledSpan><strong>Контактное лицо:</strong> {person}</StyledSpan>
                            <StyledSpan><strong>Телефон / почта:</strong> {contacts}</StyledSpan>
                            <StyledSpan><strong>Налоговая льгота:</strong> {tax}</StyledSpan>
                            <StyledSpan><strong>ОПФ:</strong> {opf}</StyledSpan>
                            {
                                comment != null && comment != '' &&
                                <StyledSpan><strong>Комментарий:</strong> {comment}</StyledSpan>
                            }
                        </StyledInfoBlock>
                    </StyledInfoBlockContainer>
                    <StyledInfoBlockContainer>
                        {selected != 'all' &&
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M4.23267 7.33333H2C1.82319 7.33333 1.65362 7.40357 1.5286 7.5286C1.40357 7.65362 1.33333 7.82319 1.33333 8V10H0V8C0 7.46957 0.210714 6.96086 0.585786 6.58579C0.960859 6.21071 1.46957 6 2 6H5.02467C4.67589 6.38829 4.4068 6.84131 4.23267 7.33333ZM14 6H10.9753C11.3241 6.38829 11.5932 6.84131 11.7673 7.33333H14C14.1768 7.33333 14.3464 7.40357 14.4714 7.5286C14.5964 7.65362 14.6667 7.82319 14.6667 8V10H16V8C16 7.46957 15.7893 6.96086 15.4142 6.58579C15.0391 6.21071 14.5304 6 14 6ZM10.6667 8.66667C10.6667 8.13925 10.5103 7.62368 10.2173 7.18515C9.92424 6.74662 9.50776 6.40482 9.02049 6.20299C8.53322 6.00115 7.99704 5.94835 7.47976 6.05124C6.96248 6.15413 6.48732 6.40811 6.11438 6.78105C5.74144 7.15399 5.48747 7.62914 5.38457 8.14643C5.28168 8.66371 5.33449 9.19989 5.53632 9.68716C5.73815 10.1744 6.07995 10.5909 6.51848 10.8839C6.95701 11.1769 7.47258 11.3333 8 11.3333C8.70724 11.3333 9.38552 11.0524 9.88562 10.5523C10.3857 10.0522 10.6667 9.37391 10.6667 8.66667ZM9.33333 8.66667C9.33333 8.93038 9.25513 9.18816 9.10863 9.40743C8.96212 9.62669 8.75388 9.79759 8.51024 9.89851C8.26661 9.99942 7.99852 10.0258 7.73988 9.97438C7.48124 9.92293 7.24366 9.79595 7.05719 9.60948C6.87072 9.42301 6.74373 9.18543 6.69229 8.92679C6.64084 8.66815 6.66724 8.40006 6.76816 8.15642C6.86908 7.91279 7.03997 7.70455 7.25924 7.55804C7.47851 7.41153 7.73629 7.33333 8 7.33333C8.35362 7.33333 8.69276 7.47381 8.94281 7.72386C9.19286 7.97391 9.33333 8.31305 9.33333 8.66667ZM12 14C12 13.4696 11.7893 12.9609 11.4142 12.5858C11.0391 12.2107 10.5304 12 10 12H6C5.46957 12 4.96086 12.2107 4.58579 12.5858C4.21071 12.9609 4 13.4696 4 14V16H5.33333V14C5.33333 13.8232 5.40357 13.6536 5.5286 13.5286C5.65362 13.4036 5.82319 13.3333 6 13.3333H10C10.1768 13.3333 10.3464 13.4036 10.4714 13.5286C10.5964 13.6536 10.6667 13.8232 10.6667 14V16H12V14ZM14.6667 2.66667C14.6667 2.13925 14.5103 1.62368 14.2173 1.18515C13.9242 0.746616 13.5078 0.404823 13.0205 0.202989C12.5332 0.00115542 11.997 -0.0516535 11.4798 0.0512404C10.9625 0.154134 10.4873 0.40811 10.1144 0.78105C9.74144 1.15399 9.48747 1.62914 9.38457 2.14643C9.28168 2.66371 9.33449 3.19989 9.53632 3.68716C9.73815 4.17443 10.0799 4.5909 10.5185 4.88392C10.957 5.17694 11.4726 5.33333 12 5.33333C12.7072 5.33333 13.3855 5.05238 13.8856 4.55229C14.3857 4.05219 14.6667 3.37391 14.6667 2.66667ZM13.3333 2.66667C13.3333 2.93038 13.2551 3.18816 13.1086 3.40743C12.9621 3.62669 12.7539 3.79759 12.5102 3.89851C12.2666 3.99942 11.9985 4.02583 11.7399 3.97438C11.4812 3.92293 11.2437 3.79595 11.0572 3.60948C10.8707 3.42301 10.7437 3.18543 10.6923 2.92679C10.6408 2.66815 10.6672 2.40006 10.7682 2.15642C10.8691 1.91279 11.04 1.70455 11.2592 1.55804C11.4785 1.41153 11.7363 1.33333 12 1.33333C12.3536 1.33333 12.6928 1.47381 12.9428 1.72386C13.1929 1.97391 13.3333 2.31305 13.3333 2.66667ZM6.66667 2.66667C6.66667 2.13925 6.51027 1.62368 6.21725 1.18515C5.92424 0.746616 5.50776 0.404823 5.02049 0.202989C4.53322 0.00115542 3.99704 -0.0516535 3.47976 0.0512404C2.96248 0.154134 2.48732 0.40811 2.11438 0.78105C1.74144 1.15399 1.48747 1.62914 1.38457 2.14643C1.28168 2.66371 1.33449 3.19989 1.53632 3.68716C1.73816 4.17443 2.07995 4.5909 2.51848 4.88392C2.95701 5.17694 3.47258 5.33333 4 5.33333C4.70724 5.33333 5.38552 5.05238 5.88562 4.55229C6.38572 4.05219 6.66667 3.37391 6.66667 2.66667ZM5.33333 2.66667C5.33333 2.93038 5.25513 3.18816 5.10863 3.40743C4.96212 3.62669 4.75388 3.79759 4.51024 3.89851C4.26661 3.99942 3.99852 4.02583 3.73988 3.97438C3.48124 3.92293 3.24366 3.79595 3.05719 3.60948C2.87072 3.42301 2.74373 3.18543 2.69229 2.92679C2.64084 2.66815 2.66724 2.40006 2.76816 2.15642C2.86908 1.91279 3.03997 1.70455 3.25924 1.55804C3.47851 1.41153 3.73629 1.33333 4 1.33333C4.35362 1.33333 4.69276 1.47381 4.94281 1.72386C5.19286 1.97391 5.33333 2.31305 5.33333 2.66667Z" fill="var(--tg-theme-hint-color)" />
                            </svg>
                        }
                        <StyledInfoBlock>
                            <StyledSpan
                                mb={'8px'}
                            >
                                <strong>
                                    Смены:
                                </strong>
                            </StyledSpan>
                            <StyledSelect
                                mb={'4px'}
                                value={selected}
                                onChange={(e) =>
                                    setSelected(e.target.value)
                                }
                                onClick={(e) => e.stopPropagation()}
                                width={'200px'}
                            >
                                {
                                    optionArr.map((el) => {
                                        return (
                                            <StyledOption
                                                key={el.value}
                                                value={el.value}
                                            >
                                                {el.title}
                                            </StyledOption>
                                        )
                                    })
                                }
                            </StyledSelect>
                            {selected === 'first' &&
                                <ShiftTable
                                    arr={shifts.first}
                                />
                            }
                            {
                                selected == 'second' &&
                                <ShiftTable
                                    arr={shifts.second}
                                />
                            }
                            {
                                selected == 'third' &&
                                <ShiftTable
                                    arr={shifts.third}
                                />
                            }
                            {
                                selected == 'fourth' &&
                                <ShiftTable
                                    arr={shifts.third}
                                />
                            }
                            {
                                selected === 'all' &&
                                <StyledParentUl>
                                    {shiftsArr.map((el) => {
                                        return (
                                            <li
                                                key={el.title}
                                            >
                                                {el.title}
                                                <StyledUl>
                                                    <ShiftTable
                                                        arr={el.arr}
                                                    />
                                                </StyledUl>
                                            </li>
                                        )
                                    })}
                                </StyledParentUl>
                            }
                            <StyledSpan
                                mt={'12px'}
                            >
                                <strong>Свободные ставки:</strong>
                                <Flex align={'center'}>{vacancy.value} {vacancy.value != 'Нет' && `(${vacancy.description})`}</Flex>
                            </StyledSpan>
                        </StyledInfoBlock>
                    </StyledInfoBlockContainer>
                    <StyledInfoBlockContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_49_18)">
                                <path d="M12.6667 1.33333H12V0.666667C12 0.489856 11.9298 0.320286 11.8047 0.195262C11.6797 0.0702379 11.5101 0 11.3333 0C11.1565 0 10.987 0.0702379 10.8619 0.195262C10.7369 0.320286 10.6667 0.489856 10.6667 0.666667V1.33333H5.33333V0.666667C5.33333 0.489856 5.2631 0.320286 5.13807 0.195262C5.01305 0.0702379 4.84348 0 4.66667 0C4.48986 0 4.32029 0.0702379 4.19526 0.195262C4.07024 0.320286 4 0.489856 4 0.666667V1.33333H3.33333C2.4496 1.33439 1.60237 1.68592 0.97748 2.31081C0.352588 2.93571 0.00105857 3.78294 0 4.66667L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V4.66667C15.9989 3.78294 15.6474 2.93571 15.0225 2.31081C14.3976 1.68592 13.5504 1.33439 12.6667 1.33333ZM1.33333 4.66667C1.33333 4.13623 1.54405 3.62753 1.91912 3.25245C2.29419 2.87738 2.8029 2.66667 3.33333 2.66667H12.6667C13.1971 2.66667 13.7058 2.87738 14.0809 3.25245C14.456 3.62753 14.6667 4.13623 14.6667 4.66667V5.33333H1.33333V4.66667ZM12.6667 14.6667H3.33333C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V6.66667H14.6667V12.6667C14.6667 13.1971 14.456 13.7058 14.0809 14.0809C13.7058 14.456 13.1971 14.6667 12.6667 14.6667Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M4.66663 11C5.21891 11 5.66663 10.5523 5.66663 10C5.66663 9.44772 5.21891 9 4.66663 9C4.11434 9 3.66663 9.44772 3.66663 10C3.66663 10.5523 4.11434 11 4.66663 11Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M11.3334 11C11.8857 11 12.3334 10.5523 12.3334 10C12.3334 9.44772 11.8857 9 11.3334 9C10.7811 9 10.3334 9.44772 10.3334 10C10.3334 10.5523 10.7811 11 11.3334 11Z" fill="var(--tg-theme-hint-color)" />
                            </g>
                            <defs>
                                <clipPath id="clip0_49_18">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <StyledInfoBlock>
                            <StyledSpan><strong>Даты смен летом:</strong> {date.summer}</StyledSpan>
                            <StyledSpan><strong>Межсезонки:</strong> {date.tematic}</StyledSpan>
                            <StyledSpan><strong>Отработано сезонов:</strong> {seasons}</StyledSpan>
                        </StyledInfoBlock>
                    </StyledInfoBlockContainer>
                    <StyledInfoBlockContainer>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clipPath="url(#clip0_54_2)">
                                <path d="M15.9998 7.49801C15.9034 5.93802 15.3525 4.44035 14.4152 3.18963C13.4779 1.9389 12.1951 0.989805 10.7249 0.45934C9.25473 -0.0711256 7.66144 -0.159768 6.14148 0.20434C4.62152 0.568448 3.24134 1.36939 2.17108 2.50842C1.10082 3.64746 0.38727 5.07478 0.118404 6.61445C-0.150462 8.15411 0.0371069 9.7388 0.657987 11.1732C1.27887 12.6075 2.30591 13.8288 3.61251 14.6865C4.91911 15.5442 6.44815 16.0008 8.01111 16H12.6664C13.5502 15.9991 14.3976 15.6477 15.0225 15.0227C15.6474 14.3978 15.9989 13.5505 15.9998 12.6667V7.49801ZM14.6664 12.6667C14.6664 13.1971 14.4557 13.7058 14.0807 14.0809C13.7056 14.456 13.1969 14.6667 12.6664 14.6667H8.01111C7.0704 14.6663 6.14034 14.4676 5.28157 14.0835C4.42281 13.6995 3.65463 13.1388 3.02711 12.438C2.39656 11.7375 1.92306 10.9103 1.63837 10.0119C1.35368 9.11341 1.26437 8.16447 1.37644 7.22868C1.5534 5.75264 2.21657 4.37747 3.2614 3.31996C4.30624 2.26245 5.67331 1.58275 7.14711 1.38801C7.4346 1.35198 7.72404 1.33372 8.01378 1.33334C9.56743 1.32911 11.073 1.87194 12.2664 2.86668C12.9635 3.44597 13.5356 4.16078 13.9481 4.96776C14.3607 5.77475 14.6051 6.6571 14.6664 7.56134V12.6667Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M5.33317 6.00002H7.99984C8.17665 6.00002 8.34622 5.92978 8.47124 5.80476C8.59627 5.67973 8.6665 5.51016 8.6665 5.33335C8.6665 5.15654 8.59627 4.98697 8.47124 4.86195C8.34622 4.73693 8.17665 4.66669 7.99984 4.66669H5.33317C5.15636 4.66669 4.98679 4.73693 4.86177 4.86195C4.73674 4.98697 4.6665 5.15654 4.6665 5.33335C4.6665 5.51016 4.73674 5.67973 4.86177 5.80476C4.98679 5.92978 5.15636 6.00002 5.33317 6.00002Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M10.6665 7.33331H5.33317C5.15636 7.33331 4.98679 7.40355 4.86177 7.52858C4.73674 7.6536 4.6665 7.82317 4.6665 7.99998C4.6665 8.17679 4.73674 8.34636 4.86177 8.47138C4.98679 8.59641 5.15636 8.66665 5.33317 8.66665H10.6665C10.8433 8.66665 11.0129 8.59641 11.1379 8.47138C11.2629 8.34636 11.3332 8.17679 11.3332 7.99998C11.3332 7.82317 11.2629 7.6536 11.1379 7.52858C11.0129 7.40355 10.8433 7.33331 10.6665 7.33331Z" fill="var(--tg-theme-hint-color)" />
                                <path d="M10.6665 10H5.33317C5.15636 10 4.98679 10.0702 4.86177 10.1953C4.73674 10.3203 4.6665 10.4899 4.6665 10.6667C4.6665 10.8435 4.73674 11.013 4.86177 11.1381C4.98679 11.2631 5.15636 11.3333 5.33317 11.3333H10.6665C10.8433 11.3333 11.0129 11.2631 11.1379 11.1381C11.2629 11.013 11.3332 10.8435 11.3332 10.6667C11.3332 10.4899 11.2629 10.3203 11.1379 10.1953C11.0129 10.0702 10.8433 10 10.6665 10Z" fill="var(--tg-theme-hint-color)" />
                            </g>
                            <defs>
                                <clipPath id="clip0_54_2">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <StyledInfoBlock
                            mw={'80%'}
                        >
                            <StyledSpan><strong>Отзыв:</strong> {feedback}</StyledSpan>
                        </StyledInfoBlock>
                    </StyledInfoBlockContainer>
                    {admin &&
                        <StyledButtonsContainer>
                            <StyledButton
                                color={'var(--tg-theme-button-color)'}
                                border={'1px solid var(--tg-theme-button-color)'}
                                onClick={(e) => {
                                    e.stopPropagation()
                                }}
                            >
                                Редактировать
                            </StyledButton>
                            <StyledButton
                                color={'rgb(255, 92, 136)'}
                                border={'1px solid rgb(255, 92, 136)'}
                                onClick={(e) => onClickRemoveButton(e)}
                            >
                                Удалить
                            </StyledButton>
                        </StyledButtonsContainer>
                    }
                </StyledContent>
            </StyledDescriprion>
        </StyledItem>
    )
}
