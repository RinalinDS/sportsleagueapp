import { FC, useEffect, useState } from "react";
import { Category } from "./Category/Category";
import styles from './Categories.module.scss'

type sportsCategoriesType = {
    name: string
    icon: string
    id: number
}

const sportsCategories: sportsCategoriesType[] = [
    { name: 'Football', icon: 'empty', id: 1 },
    { name: 'NFL', icon: 'empty', id: 2 },
    { name: 'NBA', icon: 'empty', id: 3 },
    { name: 'NHL', icon: 'empty', id: 4 },
    { name: 'Tennis', icon: 'empty', id: 5 },
]

type CategoriesProps = {
    filter: string
}


export const Categories: FC<CategoriesProps> = ({ filter }) => {
    const [list, setList] = useState(sportsCategories)
    
    useEffect(() => {
        filter = filter.toLowerCase()
        setList(sportsCategories.filter(f => f.name.toLowerCase().includes(filter)))
    }, [filter])

    return (
        <ul className={styles.list}>
            {list.map(m => {
                return (
                    <li key={m.id}>
                        <Category name={m.name} icon={m.icon} />
                    </li>
                )
            })}
        </ul>
    )
}