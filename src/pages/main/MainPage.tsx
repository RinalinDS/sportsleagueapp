import { ChangeEvent, FC, useState } from "react";
import { Categories } from "../../components/Categories/Categories";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import styles from './MainPage.module.css'


export const MainPage: FC = () => {
    const [text, setText] = useState<string>('')

    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value)
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <CustomInput text={text} inputHandler={inputHandler} />
                <Categories filter={text} />
            </div>
        </main >
    )
}