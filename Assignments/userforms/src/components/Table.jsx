import './Table.css'
export const Table = () => {  
    // console.log("table",data)
    return (
        <>
            <table style={{"width":"100%","border":"1px solid black","padding":"10px"}}>
                <thead >
                <tr style={{"padding":"10px"}}>
                    <th style={{"text-align":"center","width":"10%" }}>Name Of Employe</th> 
                    <th style={{"text-align":"center","width":"10%"}}>Age Of Employe</th>       
                    <th style={{"text-align":"center","width":"10%"}}> Address Of Employe</th>      
                    <th style={{"text-align":"center","width":"15%"}}>Salary Of Employe</th>      
                    <th style={{"text-align":"center","width":"15%"}}>Department Of Employe</th>     
                    <th style={{"text-align":"center","width":"15%"}}>marital_status Of Employe</th> 
                    <th style={{"text-align":"center","width":"15%"}}>Pic Of Employe</th>    
                    <th style={{"text-align":"center","width":"8%"}}>Delete </th>
                    </tr>
                </thead>
        </table>
        </>
    )
}