import './Table.css'
export const Table = () => {  
    // console.log("table",data)
    return (
        <>
            <table style={{"width":"100%","border":"1px solid black","padding":"10px"}}>
                <thead >
                <tr style={{"padding":"10px"}}>
                    <th>Name Of Employe</th> &emsp; 
                    <th>Age Of Employe</th>  &emsp;      
                    <th>Address Of Employe</th>    &emsp;   
                    <th>Salary Of Employe</th>        &nbsp;
                    <th>Department Of Employe</th>     
                    <th>marital_status Of Employe</th> 
                    <th>Pic Of Employe</th>    
                </tr>
                </thead>
        </table>
        </>
    )
}