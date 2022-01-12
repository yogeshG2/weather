import React from 'react'

export const Textfield = ({ ...props }) => {
    const styles = {
        textfield: {
            padding: 20,
            borderRadius: 10,
            maxWidth: 500,
            width: 500,
            cursor: 'pointer',
            background: '#80808045'
        }
    }
    return (
        <div>
            <input
                type="text"
                value={props.value}
                onChange={props.onChange}
                style={styles.textfield}
            />
        </div>
    )
}