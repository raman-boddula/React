import React from 'react';
import { Table } from './Table';
import { Tabledata } from './Tabledata';
import { Form } from './Form';
import './Table.css'

export const Parent = () => {
    const [data, setData] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [totalData, setTotalData] = React.useState([]);
    const [change, setChange] = React.useState(0);
    
    const handleDelete = (x) => {
        setChange(x);
    }
    React.useEffect(() => {
        fetch(`http://localhost:3002/employeData/?_page=${page}&_limit=2`).then(d => d.json()).then(d => setData(d));
    }, [change,page])
    // console.log(handleDelete)
    React.useEffect(() => {
        fetch("http://localhost:3002/employeData").then(d => d.json()).then(d => setTotalData(d));
    },[])
    return (
        <>
            <Form handleDelete={handleDelete} />
        {data.length>0 ? <Table />:null}
            {data.map((e) => <Tabledata  key={e.id}{...e} handleDelete={handleDelete}  />)};
            <h3 className="page">Page : {page}</h3>
            <button disabled={page===1} onClick={()=>setPage(page-1)} className="btn">PREV</button>
            <button disabled={page===Math.ceil((totalData.length)/2)} onClick={()=>setPage(page+1)} className="btn1">NEXT</button>
    </>)
}