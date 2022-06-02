import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from 'slices/user'

function AsyncTest() {
    const [num, setNum] = useState(1)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        if (num < 10) {
            dispatch(getUser(num))
        }
    }, [num])

    return (
        <div style={{ marginTop: '20px' }}>
            <p>{JSON.stringify(user)}</p>
            <button onClick={() => setNum(num + 1)}>Next user</button>
        </div >
    )
}

export default AsyncTest