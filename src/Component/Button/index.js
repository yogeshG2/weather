import React from 'react'

export const Button = ({ ...props }) => {
    const styles = {
        button: {
            padding: 20,
            borderRadius: 10,
            maxWidth: 100,
            width: 100,
            cursor: 'pointer',
            background: 'grey',
            color: 'white'
        }
    }
    return (
        <div>
            <input
                type={"button"}
                value={"Search"}
                autoCapitalize
                style={styles.button}
                onClick={props.onClick}
            />
        </div>
    )
}