import { FC } from "react"
import { Link } from "react-router-dom"
import { Path } from "../../../enum/Path"
import styles from './Navbar.module.scss'

type PropsType = {
    isLoggedIn: boolean
}

const links = [
    { to: Path.Main, text: 'Main' },
    { to: Path.Results, text: 'Results' },
]

export const Navbar: FC<PropsType> = (props) => {
    const { isLoggedIn } = props
    if (!isLoggedIn) return null
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {links.map(link => {
                    return (
                        <li>
                            <Link to={link.to} > {link.text} </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}