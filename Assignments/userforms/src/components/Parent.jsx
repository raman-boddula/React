import React from 'react';
import { Table } from './Table';
import { Form } from './Form';
import { nanoid } from 'nanoid';
import { Tabledata } from './Tabledata';

export const Parent = () => {
    const [data, setData] = React.useState([]);
    const handleData = (newData) => {
        // console.log('newData', newData);
        newData = { ...newData, id: nanoid(8) };
        setData([...data, newData]);
    }

    return (
        <>
            <Form handleData={handleData} />
            {data.length>0 ? <Table />:null}
        {data.map((e)=><Tabledata key={e.id}{...e}/>)};
    </>)
}