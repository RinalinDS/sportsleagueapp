import { FC, useState } from "react";
import styles from './Category.module.scss'

type CategoryProps = {
    name: string
    icon: string
}

export const Category: FC<CategoryProps> = ({ name, icon }) => {
    const [isVisible, setIsVisible] = useState(true)
    const onDivCLickHandler = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle} onClick={onDivCLickHandler}>
                <span>{name}</span><span> {'>'} </span>
            </div>
            {isVisible && <div className={styles.subCategory}>
                <div >
                    Premier Leaugue
                </div>
                <div>La League</div>
                <div>Bundesliga</div>
                <div>Seria A</div>
            </div>
            }
        </ div>
    )
}