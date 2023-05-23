import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AdminUsersFetchSuccess,getUsers} from '../../redux/adminUsers/adminUsersAction'
import { useDispatch,useSelector} from 'react-redux';
function UserView() {
  const dispatch=useDispatch()
  const navigete=useNavigate()
   const [Admin,setAdmin]=useState('Admin')
useEffect(() => {
  if (localStorage.getItem('admintoken')){
      setAdmin(JSON.parse(localStorage.getItem('admin')));
  }else{
      toast.error("please login to continue");
      navigete('/admin/login');
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
let users = useSelector(value => value.adminUsers.adminUsers);
console.log(users);
useEffect(() => {
  dispatch(getUsers());
  // eslint-disable-next-line
}, []);

  return (
    
    <>
    <div style={{ backgroundColor: "#d3d2d9", height: '100px', marginBottom: '1rem', width: '100%' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
    <div>
      <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Admin</span>
    </div>
    <div>
      <button onClick={() => {
        localStorage.removeItem('admintoken');
        localStorage.removeItem('admin');
        navigete('/admin/login');
      }} type="button" className="btn btn-primary" style={{ cursor: 'pointer' ,backgroundColor:'black',color:'white' }}>{Admin.name} > </button>
    </div>
  </div>
</div>


            <div>
                <section className="container " style={{ overflowX: 'hidden' }}>
            
                        <div className='d-flex justify-content-center'>
                            <h1 className="mt-3 fw-bold border-bottom">Manage Users</h1>
                        </div>
                        <button style={{marginLeft:"2%",backgroundColor:"#d3d2d9",borderRadius:'5px',cursor:'pointer'}} type="button" className="btn btn-lg btn-primary mt-2 d-flex ms-auto" data-bs-toggle="modal" data-bs-target="#exampleModal">Add User</button>
                        {/* search */}
                        <form >
                            <div className='d-flex'>
                                <div className="input-group w-25">
                                    <input type="text" className="form-control me-2 position-relative rounded-3"  style={{ backgroundColor: '#f2f2f2', border: 'none',marginLeft:'75%',width:'15em',height:'2em' ,borderRadius:'5px'}} placeholder="Search" />
                                    <i className="ri-search-line position-absolute top-0 end-0 mt-1 text-muted me-3"></i>
                                </div>
                                     <button type='submit'  style={{marginLeft:"79%",marginTop:'1em',backgroundColor:'blue',color:'white',borderRadius:'5PX',width:'7em',height:'2em'}} >search</button>
                            </div>
                           
                        </form>
               
                    {/* users table */}
                    <div className="text-center mt-5">
                        <div className="row table-responsive col-lg-12" >
                            <table className="table table-bordered table-striped table-hover" style={{ width: '100%' }} id="productsTable">
                                <thead>
                                    <tr>
                                        <th >Name</th>
                                        <th >Email</th>
                                        <th >Mobile</th>
                                        <th >Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    users && users.map((user)=>{

                                    
                                    return(   <tr>
                                          <th >{user.name}</th>
                                          <th >{user.email}</th>
                                          <th >{user.mobile}</th>
                                          <th >
                                          <span><i style={{ cursor: 'pointer',fontSize:'larger',fontWeight:'bolder',color:'blue' }} >edit/</i></span>
                                          <span className='ps-4'><i style={{ cursor: 'pointer',fontSize:'larger',fontWeight:'bolder' ,color:'red' }} >delete</i></span>
                                           </th>
                                       </tr>
                                    )
                                       })
}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section >
            </div >
        </>
  )
}

export default UserView
