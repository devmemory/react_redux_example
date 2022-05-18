import React from 'react'
import styles from './error_page.module.css'
import Error from 'asset/image/error.jpg'

function ErrorPage(props) {
    return (
        <div className={styles.div_error}>
            <img src={Error} alt='errorImage' />
            <p>
                {props.message}
            </p>
            {props.children}
        </div>
    )
}

export default ErrorPage