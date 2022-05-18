import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.module.css'

function MainIndex() {
    const navigate = useNavigate()

    const pages = [
        { title: 'counter', link: '/counter' }
    ]

    return (
        <main className={styles.main}>
            {pages.map((e, _) => {
                return (
                    <div key={`div-${e.title}`} onClick={() => navigate(e.link)}>
                        {e.title}
                    </div>
                )
            })}
        </main>
    )
}

export default MainIndex