import { FC, useState } from "react";
import { subCategoryType } from "../Categories";
import styles from './Category.module.scss'

type CategoryProps = {
    name: string
    icon: string
    subCategories: subCategoryType[];
}

export const Category: FC<CategoryProps> = ({ name, icon, subCategories }) => {
    const [isVisible, setIsVisible] = useState(true)
    const onDivCLickHandler = () => {
        setIsVisible(!isVisible)
    }
    return (
        <div className={styles.categoryContainer}>
            <div className={styles.categoryTitle} onClick={onDivCLickHandler}>
                <span>{name}</span><span> {'>'} </span>
            </div>
            {isVisible && <ul className={styles.subCategory}>
                
                   {subCategories.map(m => 
                    <li>
                        {m.title}
                    </li>
                    )}

                </ul>
            
            }
        </ div>
    )
}