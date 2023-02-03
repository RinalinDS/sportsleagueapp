import { FC } from 'react'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setIsLoggedIn } from '../../store/auth-reducer'
import styles from './Header.module.scss'
import { Navbar } from './Navbar/Navbar'

export const Header: FC = () => {
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        if (isLoggedIn) localStorage.removeItem('isLoggedIn')
        else localStorage.setItem('isLoggedIn', 'true')
        dispatch(setIsLoggedIn(!isLoggedIn))
    }

    const buttonText = isLoggedIn ? 'Logout' : 'Login'
    const buttonClass = isLoggedIn ? styles.button : styles.flexButton

    return (
        <header className={styles.header}>
            <Navbar isLoggedIn={isLoggedIn} />
            <button
                className={buttonClass}
                onClick={onClickHandler}
            >
                {buttonText}
            </button>
        </header>
    )
}