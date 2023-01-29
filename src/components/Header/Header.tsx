import { FC, useState } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { RootStateType } from '../../store'
import { setIsLoggedIn } from '../../store/auth-reducer'
import styles from './Header.module.scss'

interface HeaderPropsType {

}

export const Header: FC<HeaderPropsType> = () => {
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
      dispatch(setIsLoggedIn(!isLoggedIn))
    }

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