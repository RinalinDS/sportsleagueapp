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
    { name: 'Hockey', icon: 'empty', id: 2 },
    { name: 'Basketball', icon: 'empty', id: 3 },
    { name: 'Rugby/American football', icon: 'empty', id: 4 },
    { name: 'Tennis', icon: 'empty', id: 5 },
]

export type subCategoryType = {
    title: string
    icon: string
    id: number
}
export type subCategoryStateType = {
    [key: string] : subCategoryType[]
}

const subCategories:subCategoryStateType = {
    ['Football'] : [
        {title: 'LA LEAGUE', id: 1, icon: 'empty'},
        {title: 'Premier LEAGUE', id: 2, icon: 'empty'},
        {title: 'BUNDESLEAGUE', id: 3, icon: 'empty'},
        {title: 'Seria A', id: 4, icon: 'empty'},
    ],
    ['Hockey'] : [
        {title: 'NFL', id: 1, icon: 'empty'},
        {title: 'CHL', id: 2, icon: 'empty'},
    ],
    ['Basketball'] : [
        {title: 'NBA', id: 1, icon: 'empty'},
        {title: 'Euroleague FIBA', id: 2, icon: 'empty'},
    ],
    ['Rugby/American football'] : [
        {title: 'NFL', id: 1, icon: 'empty'},
        {title: 'Rugby world championship', id: 2, icon: 'empty'},
    ],
    ['Tennis'] : [
        {title: 'Wimbledon', id: 1, icon: 'empty'},
        {title: 'Rolan gaross' ,id: 2, icon: 'empty'},
        {title: 'US Open' ,id: 2, icon: 'empty'},
    ],

}

type CategoriesProps = {
    filter: string
}


export const Categories: FC<CategoriesProps> = ({ filter }) => {
    const [list, setList] = useState(sportsCategories)
    const [listSub, setListSub] = useState(subCategories)

    
    useEffect(() => {
        filter = filter.toLowerCase()
        setList(sportsCategories.filter(f => f.name.toLowerCase().includes(filter)))
    }, [filter])

    return (
        <ul className={styles.list}>
            {list.map(m => {
                return (
                    <li key={m.id}>
                        <Category name={m.name} icon={m.icon} subCategories={listSub[m.name]} />
                    </li>
                )
            })}
        </ul>
    )
}