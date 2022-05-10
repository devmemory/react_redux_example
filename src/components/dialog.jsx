import React, { useState } from 'react'
import styles from 'components/dialog.module.css'
import { useDispatch } from 'react-redux'
import { close } from 'slices/dialog'

function Dialog(props) {
    const dispatch = useDispatch()
    const [number, setNumber] = useState()

    const confirm = () => {
        if(number === undefined || number === ''){
            alert('값을 입력해주세요')
            return
        }

        props.setValue(number)
        dispatch(close())
    }

    return (
        <div className={styles.div_background}>
            <div className={styles.div_dialog}>
                <p>값을 입력해주세요</p>
                <input type='number' onChange={(e) => setNumber(Number(e.target.value))} />
                <div className={styles.div_actions}>
                    <button onClick={() => dispatch(close())}>취소</button>
                    <button onClick={confirm}>설정</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog