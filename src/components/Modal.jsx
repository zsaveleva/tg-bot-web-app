import React from 'react'
import { Overlay } from './Overlay'
import styled from 'styled-components'
import { Form } from './Form'
import { StyledButton } from './Drawer'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../store/reducers/modal'

const StyledModal = styled('div')`
    & {
        position: relative;
        padding: 20px;
        border-radius: 8px;
        width: 400px;
        max-width: 80%;
        opacity: ${props => props.active ? '1' : '0'};
        background-color: var(--tg-theme-bg-color);
        cursor: default;
        max-height: 60%;
        overflow-y: auto;
        margin-top: 20px;
    }
`

export const Modal = () => {
    const modalState = useSelector(state => state.modal.value)
    const dispatch = useDispatch()

//     const onClickCloseModal = () => {
//         let confirmBox = window.confirm(
//             `Вы действительно хотите выйти?

// Внесенные данные не сохранятся.`
//         )
//         if (confirmBox === true) {
//             dispatch(setModal(false))
//         }
//     }


    return (
        <Overlay
            active={modalState}
            onClick={() => dispatch(setModal(false))}
            display={'flex'}
            justify={'center'}
        >
            <StyledModal
                active={modalState}
                onClick={(e) => e.stopPropagation()}
            >
                <StyledButton
                    position={'absolute'}
                    top={'12px'}
                    right={'12px'}
                    onClick={() => dispatch(setModal(false))}
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
                <Form />
            </StyledModal>
        </Overlay>
    )
}
