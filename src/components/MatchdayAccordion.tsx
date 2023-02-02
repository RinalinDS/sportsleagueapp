import { Children, FC, useState } from "react"
import styles from './MatchdayAccordion.module.scss'

type PropsType = {
    isVisible: boolean
    title: string
    children: React.ReactNode
}
// TODO в принципе это можно сделать универсальным аккордионом, потом после мерджа посмотри как

export const MatchdayAccordion: FC<PropsType> = (props) => {
    const { isVisible = false, title, children } = props
    const [isChildrenVisible, setIschildrenVisible] = useState<boolean>(isVisible)
    const onClickHandler = () => setIschildrenVisible(!isChildrenVisible)
    return (
        <div>
            <h1 className={styles.accordionTitle} onClick={onClickHandler}>{title}</h1>
            {
                isChildrenVisible &&
                <div>
                    {children}
                </div>
            }
        </div>
    )
}