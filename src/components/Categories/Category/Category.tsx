import {FC, useState} from "react";
import {subCategoryType} from "../Categories";
import styles from './Category.module.scss'
import {Link} from "react-router-dom";
import {Path} from "../../../enum/Path";

type CategoryProps = {
    name: string
    icon: string
    subCategories: subCategoryType[];
}

export const Category: FC<CategoryProps> = ({name, icon, subCategories}) => {
    const [isVisible, setIsVisible] = useState(false)
    const onDivCLickHandler = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle} onClick={onDivCLickHandler}>
                <span>{name}</span><span>{isVisible ? <>&darr;</> : <>&rarr;</>}</span>
            </div>
            {isVisible && <ul className={styles.subCategory}>
                {subCategories.map(m =>
                    <li key={m.id}>
                        <Link to={Path.Results}>{m.title}</Link>
                    </li>
                )}
            </ul>

            }
        </ div>
    )
}