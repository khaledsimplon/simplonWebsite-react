import React from 'react'
import'./Tab.css'

const Tab=(props)=>{
    return(
        <div class='table'>
        {props.table.map(el=>
        <table>
        <thead>
            <tr>
                <th class='col'>{el.year}</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><img class='LOGO' src={el.country}/> {el.name}</td>
            </tr>
        </tbody>



        </table>
        )}
        </div>
    );
}
export default Tab;