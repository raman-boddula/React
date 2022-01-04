import React from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import { AuthContext } from "../contexts/AuthContext";
import "./Components.css"
export const FormInput = () => {
  const [form, setForm] = React.useState([]);
  const [token, setToken] = React.useState(null);
  const { isAuth, toggleAuth } = React.useContext(AuthContext);
  const handleChange = (e) => {
    // console.log(e.target)
    let { id, value } = e.target;
    id = id === "basic_username" ? "username" : "password"
    setForm({...form,[id]:value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body :JSON.stringify(form)
    }).then(d => d.json()).then(d => { toggleAuth();setToken(d.token)})
  }
    return (
      <div className="formInput">
        <> {isAuth==="Login"? 
        <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        onChange={handleChange}
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        onChange={handleChange}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
        </Form> :null
        }
          {token ? <h3>{form.username} is LoggedIn  & Token is {token }</h3>:null}
        </>
      </div>
     
    )
} 