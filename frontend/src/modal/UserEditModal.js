import React,{useRef,useEffect} from 'react'
// import { useForm } from 'react-hook-form'
function UserEditModal() {
    const editModalShowBtn = useRef(null);
    // const { register, handleSubmit, formState: { errors } } = useForm();

    const handleOpenBtn=()=>{
        editModalShowBtn.current.click();
    }



    useEffect(()=>{
        handleOpenBtn();
    },[]);
  return (
    <>
  
    <button type="button" className="d-none btn btn-lg btn-primary mt-2 d-flex ms-auto" ref={editModalShowBtn}  data-bs-toggle="modal" data-bs-target="#editModal"></button>
    <div className="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content p-3">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Edit User</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <form >
                <div className="col-md-12"><label className="labels">Name</label><input type="text" className="form-control d-none" /></div>
                    <div className="row mt-2">
                        <div className="col-md-12"><label className="labels">Name</label><input type="text"  className="form-control" placeholder="Name" /></div>
                      
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3"><label className="labels">Email ID</label><input type="text"  className="form-control" placeholder="enter email id"   /></div>
                      
                        <div className="col-md-12 mt-3"><label className="labels">Mobile Number</label><input type="text"  className="form-control" placeholder="enter phone number"  /></div>
                       
                    </div>
                    <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="submit">Save Changes</button></div>
                </form>
            </div>
        </div>
    </div>
</>
  )
}

export default UserEditModal
