import React from 'react'


export const Loader=({...props})=>{
    return(
        <i className='fa fa-spinner fa-spin' style={{ fontSize: props.fontSize}}></i>
    )
}