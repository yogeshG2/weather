import React from 'react'

export const Button = ({ ...props }) => {
    const styles = {
        button: {
            padding: 22,
            borderRadius: 10,
            maxWidth: 100,
            width: 100,
            cursor: 'pointer',
            background: 'grey',
            color: 'white',
            marginLeft:'10%',
            border:'none'
        }
    }
    return (
        <div>
            <input
                type={"button"}
                value={"SUBMIT"}
                autoCapitalize
                style={styles.button}
                onClick={props.onClick}
            />
        </div>
    )
}