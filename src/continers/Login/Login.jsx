// import { Button,Checkbox,Form,Input } from "antd";
import Input from "antd/es/input/Input";
import "./Login.scss";
import { Button, Checkbox, Form } from "antd";


const Login =() =>{

    return (
        <div className="login-container"> 
        <h1>Login</h1>
         <Form
         layout="vertical"
    name="basic"
    labelCol={{ span: 24 }}
    wrapperCol={{ span: 24 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off" 
  >
    <Form.Item
      label="Username"
      name="username"
     
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      
    >
      <Input.Password />
    </Form.Item>

  

    <Form.Item >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
        </div>

    );
};

export default  Login;
