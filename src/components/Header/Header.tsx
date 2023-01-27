import { FC, useState } from 'react'
import styles from './Header.module.scss'

interface HeaderPropsType {
    isLoggedIn: boolean
    onClickHandler: () => void

}

export const Header: FC<HeaderPropsType> = (props) => {
    const {isLoggedIn, onClickHandler } = props

    return (
        <header className={styles.header}>
            <button
                className={styles.button}
                onClick={onClickHandler}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </header>
    )
}