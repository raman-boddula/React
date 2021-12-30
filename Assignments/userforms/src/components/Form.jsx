import React from "react";
// const initState = {
//     username: "",
//     age: "",
//     salary: "",
//     marital_status: "",
//     department: "",
//     profile_pic: "",
//     address :""
// }
export const Form = ({handleDelete}) => {
    const [form, setForm] = React.useState(null)
    const ref= React.useRef(null)
    const handleChange = (e) => {
        let { name, value, checked, type } = e.target;
        value = type === "checkbox" ? checked : value;
        value = type === "file" ? URL.createObjectURL(ref.current.files[0]) : value;
        setForm({...form,[name]:value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(ref.current.files[0])
        // console.log(form)
        fetch("http://localhost:3002/employeData", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form)
        })
        handleDelete(Math.random(10)*1000)
    };
    // const { username, age, address, marital_status, department, profile_pic, salary } = form;
    return (
        <div className='formDiv'>
        <form  onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" onChange={handleChange} name="username"  placeholder="enter your  name" /> <br/>
            <label>Age</label>
            <input type="number" onChange={handleChange} name="age"  placeholder="enter your Age" /><br/>
            <label>Address</label>
            <input type="text" onChange={handleChange} name="address"  placeholder="enter your Address" /><br/>
            <label>Department</label>
            <select name="department"  onChange={handleChange} >
                <option></option>
                <option value="IT">IT</option>
                <option value="Non-IT">Non-IT</option>
            </select><br></br>
            <label>Salary</label>
            <input type="text" onChange={handleChange} name="salary"  placeholder="enter your Salary" /><br/>
            <label>isMarried</label>
            <input type="checkbox" onChange={handleChange}  name="marital_status"/><br/>
            <label>Profile Pic</label>
            <input ref={ref} type="file" name='profile_pic'  onChange={handleChange} /><br/>
            <input type='submit'/>
        </form>
        </div>
    )
}