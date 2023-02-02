import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Path } from '../../enum/Path'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setIsLoggedIn } from '../../store/auth-reducer'
import styles from './Header.module.scss'


export const Header: FC = () => {
    const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
    const dispatch = useAppDispatch()
    const onClickHandler = () => {
        if (isLoggedIn) localStorage.removeItem('isLoggedIn')
        else localStorage.setItem('isLoggedIn', 'true')
        dispatch(setIsLoggedIn(!isLoggedIn))
    }

    const buttonText = isLoggedIn ? 'Logout' : 'Login'
    // TODO Map Links
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li>
                        <Link to={Path.Main} > Main </Link>
                    </li>
                    <li>
                        <Link to={Path.Results}> Results </Link>
                    </li>
                </ul>
            </nav>
            <button
                className={styles.button}
                onClick={onClickHandler}
            >
                {buttonText}
            </button>
        </header>
    )
}