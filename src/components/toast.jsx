import React from 'react'
import { useSelector } from 'react-redux'
import { hide, show } from 'slices/toast'
import styles from './toast.module.css'

function ToastComponent() {
    const { show, message } = useSelector((state) => state.toast)

    return (
        <>
            {show ? <div className={styles.toast}>
                {message}
            </div> : <></>}
        </>
    )
}

const showToast = ({ message, dispatch }) => {
    dispatch(show(message))
    setTimeout(() => {
        dispatch(hide())
    }, 2000);
}

export { ToastComponent, showToast }
