import React, { ChangeEvent, FC, useState } from 'react'
import styles from './CustomInput.module.css'

type CustomInputProps = {
  text?: string;
  inputHandler?: (e: ChangeEvent<HTMLInputElement>) => void;
}



export const CustomInput: FC<CustomInputProps> = ({text, inputHandler}) => {


    return (
        <div>
                <input placeholder='Search....' type="text" value={text} onChange={inputHandler} className={styles.textInput} />
        </div>
    )
}