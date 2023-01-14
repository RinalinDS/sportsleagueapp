import { FC } from "react";
import styles from './Category.module.scss'

type CategoryProps = {
    name: string
    icon: string
}

export const Category:FC<CategoryProps> = ({name, icon}) => {
    return (
            <div className={styles.category}>
                <span>{name}</span><span> {'>'} </span>
            </div>
    )
}