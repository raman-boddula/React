import React from "react";

const initState = {
    username: "",
    age: "",
    salary: "",
    marital_status: "",
    department: "",
    profile_pic: "",
    address :""
}
export const Form = ({handleData}) => {
    const [form, setForm] = React.useState(initState);
    const ref= React.useRef(null)
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref.current.files)
        // console.log(form)
        handleData(form)
    };
    const { username, age, address, marital_status, department, profile_pic, salary } = form;
    return (
        <div className='formDiv'>
        <form  onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" onChange={handleChange} name="username" value={username} placeholder="enter your  name" /> <br/>
            <label>Age</label>
            <input type="number" onChange={handleChange} name="age" value={age} placeholder="enter your Age" /><br/>
            <label>Address</label>
            <input type="text" onChange={handleChange} name="address" value={address} placeholder="enter your Address" /><br/>
            <label>Department</label>
            <select name="department" value={department} onChange={handleChange} >
                <option value="IT">IT</option>
                <option value="Non-IT">Non-IT</option>
            </select><br></br>
            <label>Salary</label>
            <input type="text" onChange={handleChange} name="salary" value={salary} placeholder="enter your Salary" /><br/>
            <label>isMarried</label>
            <input type="checkbox" onChange={handleChange} checked={marital_status} name="marital_status"/><br/>
            <label>Profile Pic</label>
            <input ref={ref} type="file" name='profile_pic' value={profile_pic} onChange={handleChange} /><br/>
            <input type='submit'/>
        </form>
        </div>
    )
}