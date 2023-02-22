import React from 'react'
import { RowBody, RowH1 } from './Row.style'

type RowProps =  {
    title:string
    fetchUrl:string
}
const Row =({title,fetchUrl}:RowProps)=>{
    return (
        <div>
            <RowBody>
                <RowH1>
                    {title}
                </RowH1>
            </RowBody>
        </div>
    )
}

export {Row}