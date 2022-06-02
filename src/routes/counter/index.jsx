import Dialog from 'components/dialog'
import AsyncTest from 'components/async_test'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setValue } from 'slices/counter'
import { open } from 'slices/dialog'

function CounterIndex() {
    const { count, showDialog } = useSelector((state) => {
        return {
            count: state.counter.value,
            showDialog: state.dialog.value
        }
    })
    const dispatch = useDispatch()

    return (
        <div style={style}>
            <div>
                <p>{count}</p>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <button
                    aria-label="Set value"
                    onClick={() => dispatch(open())}
                >
                    값 설정
                </button>
                {showDialog ? <Dialog setValue={(value) => dispatch(setValue(value))} /> : <></>}

                <AsyncTest />
            </div>
        </div>
    )
}

const style = { height: '100vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }

export default CounterIndex