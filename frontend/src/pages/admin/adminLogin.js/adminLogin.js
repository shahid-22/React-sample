import React from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {useForm} from "react-hook-form"
import { LoginAdmin } from '../../../apicalls/admin';
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify';
function AdminLogin() {
    const {register, handleSubmit, formState:{errors}, } = useForm();

    const onsubmit=async(data)=>{
        try{
          console.log(data);
          const response =await LoginAdmin(data)
          console.log("soraj",response);
          if(response.success){
            toast.success(response.message);
                localStorage.setItem('admintoken', JSON.stringify(response.data));
                localStorage.setItem('admin', JSON.stringify(response.admin));
                window.location.href = '/admin';
          }
          else throw new Error(response.message);
        }catch(err){
            toast.error(err.message);
        }
    }
  return (
    <Container>
    <Row>
      <Col lg={6} md={12}>
        <div className="register">
          <div className="col-1">
            <h2 style={{color:"black" ,fontStyle:"italic"}}>Admin</h2>
            <span></span>

            <Form onSubmit={handleSubmit(onsubmit)} id="form" className="flex flex-col">
              <Form.Control type="text" {...register("email", {required:true})} placeholder="e-mail" />
              {errors.email && <span  style={{color:'red'}}>This field is required</span>}
              <Form.Control type="password" {...register("password", {required:true})}   placeholder="password" />
              {errors.password&&<span  style={{color:'red'}}>This fiield required,at least 8 characters </span>}
              <Button className="btn" variant="primary" type="submit">
                LOGIN
              </Button>
            </Form>
            <ToastContainer />
          </div>
          <div className="col-2">
            <img
              src="https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=2000"
              alt=""
            />
          </div>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default AdminLogin
