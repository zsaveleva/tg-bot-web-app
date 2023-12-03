import React, { useEffect } from 'react'
import { useTelegram } from '../hooks/useTelegram'
import { ItemList } from './ItemList'
import { Modal } from './Modal'
import { useDispatch, useSelector } from 'react-redux'
import { setModal } from '../store/reducers/modal'

export const Admin = ({ admin }) => {
    const { tg } = useTelegram()
    const dispatch = useDispatch()
    const modalState = useSelector(state => state.modal.value)

    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Добавить лагерь',
        })

        tg.MainButton.onClick(() => {
            dispatch(setModal(true))
        })

        if (modalState) {
            tg.MainButton.hide()
        } else {
            tg.MainButton.show()
        }

    }, [modalState])

    return (
        <>
            <ItemList
                admin={admin}
            />
            <Modal />
        </>

    )
}