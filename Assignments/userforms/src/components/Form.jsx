import React from "react";

export const Form = ({handleData}) => {
    const [form, setForm] = React.useState(null);
    const ref= React.useRef(null)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref.current.files)
        console.log(form)
        handleData(form)
    };
    return (
        <div className='formDiv'>
        <form  onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" onChange={handleChange} name="username" placeholder="enter your  name" /> <br/>
            <label>Age</label>
            <input type="number" onChange={handleChange} name="age" placeholder="enter your Age" /><br/>
            <label>Address</label>
            <input type="text" onChange={handleChange} name="address" placeholder="enter your Address" /><br/>
            <label>Department</label>
            <select name="department" onChange={handleChange} >
                <option value="IT">IT</option>
                <option value="Non-IT">Non-IT</option>
            </select>
            <label>Salary</label>
            <input type="text" onChange={handleChange} name="salary" placeholder="enter your Salary" /><br/>
            <label>isMarried</label>
            <input type="checkbox" onChange={handleChange} name="marital_status"/><br/>
            <label>Profile Pic</label>
            <input ref={ref} type="file" name='profile_pic' onChange={handleChange} /><br/>
            <input type='submit'/>
        </form>
        </div>
    )
}