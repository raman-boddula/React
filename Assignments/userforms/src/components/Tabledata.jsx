import React from 'react';
import './Table.css'
export const Tabledata = ({ address, username, department, age, salary, marital_status, profile_pic }) => {
    return (
        <>
            <tbody >
                <tr >
                    <td style={{"text-align":"center","width":"13.5%" }}>{username}</td>
                    <td style={{"text-align":"center","width":"12.5%"}} >{age}</td>
                    <td style={{"text-align":"center","width":"15%"}}>{address}</td>
                    <td style={{"text-align":"center","width":"15%"}}>{salary}</td>
                   <td style={{"text-align":"center","width":"15%"}}>{department}</td>
                 <td style={{"text-align":"center","width":"15%"}}>{marital_status ? "Married":"Single"}</td>
                 <td style={{"text-align":"center","width":"15%"}} >  {profile_pic}</td>
                </tr>
            </tbody>
        </>
    )
}