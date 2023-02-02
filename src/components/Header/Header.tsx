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
      dispatch(setIsLoggedIn(!isLoggedIn))
    }

    return (
        <header className={styles.header}>
            <nav>
                <Link to={Path.Main} > Main </Link>
                <Link to={Path.Results}> Results </Link>

            </nav>
            <button
                className={styles.button}
                onClick={onClickHandler}
            >
                {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </header>
    )
}