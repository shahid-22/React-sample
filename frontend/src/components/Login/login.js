import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import {useForm} from 'react-hook-form'
import {LoginUser} from "../../apicalls/users"
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Login() {
  const navigate=useNavigate()
  const {register, handleSubmit,formState:{errors},}  = useForm();
  const onsubmit=async (data)=>{
    try{
      const response=await LoginUser(data)
      if(response.success){
      toast.success(response.message);
      localStorage.setItem('token', JSON.stringify(response.data));
      setTimeout(()=>{
        window.location.href="/"
       }, 2000);
     }
      else throw new Error(response.message);
  }catch(err){
    toast.error(err.message);
  }
  }


  useEffect(()=>{
    if(localStorage.getItem('token')){
        navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



  return (
    <Container>
      <Row>
        <Col lg={6} md={12}>
          <div className="register">
            <div className="col-1">
              <h2 style={{color:"black" ,fontStyle:"italic"}}>Login</h2>
              <span></span>

              <Form  onSubmit={handleSubmit(onsubmit)} id="form" className="flex flex-col">
                <Form.Control type="text" {...register("email", {required:true})} placeholder="e-mail" />
                {errors.email && <span  style={{color:'red'}}>This field is required</span>}
                <Form.Control type="password" {...register("password", {required:true})}  placeholder="password" />
                {errors.password&&<span  style={{color:'red'}}>This fiield required,at least 8 characters </span>}
                <Button className="btn" variant="primary" type="submit">
                  LOGIN
                </Button>
              </Form>
              <ToastContainer />
              <p onClick={()=>{navigate('/signup')}} className='ps-3 pb-2'>create account ? <span style={{color: '#4d79ff', fontWeight: 'bold', cursor: 'pointer'}}>signup</span></p>
            </div>
            <div className="col-2">
              <img
                src="https://m.media-amazon.com/images/I/71oGke7wycL._SX522_.jpg"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login

