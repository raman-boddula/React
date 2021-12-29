import React from 'react';
import './Table.css'
export const Tabledata = ({handleDelete, id,address, username, department, age, salary, marital_status, profile_pic }) => {
    // console.log("from table data",address, username, department, age, salary, marital_status, profile_pic)
   
    const remove = (id) => {
        (fetch(`http://localhost:3002/employeData/${id}`,{
                    method:"DELETE",
                        headers: {
                        "Content_Type":"application/json"
                    }
        }))
        handleDelete(id)
    }
    return (
        <>
            <tbody >
                <tr >
                    <td style={{"text-align":"center","width":"10%" }}>{username}</td>
                    <td style={{"text-align":"center","width":"10%"}} >{age}</td>
                    <td style={{"text-align":"center","width":"10%"}}>{address}</td>
                    <td style={{"text-align":"center","width":"15%"}}>{salary}</td>
                   <td style={{"text-align":"center","width":"15%"}}>{department}</td>
                 <td style={{"text-align":"center","width":"15%"}}>{marital_status ? "Married":"Single"}</td>
                 <td style={{"text-align":"center","width":"15%"}} >  {profile_pic}</td>
                    <td style={{ "text-align": "center", "width": "8%" }} > <button onClick={()=>remove(id)} >DELETE</button>
                    </td>    
                </tr>
            </tbody>
        </>
    )
}