import React from 'react'
import Navbar from '../components/Navbar/navbar'
import "./profile.css"


function Profile() {
  return (
    <>
    {/* Include the Bootstrap CSS */}
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css"
        />

      {/* Your JSX content goes here */}

      {/* Include the Bootstrap JavaScript */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>

      {/* Include jQuery */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <Navbar/>
   
    <div className="container  rounded bg-white mt-5 mb-5">
      <div className="row" >
        <div className="col-md-5 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
          </div>
            <div className="file btn btn-sm btn-primary rounded d-flex justify-content-center align-items-center">
             <span className="mr-5">Change photo</span>
             <input type="file" id="file-input" />
            </div>

        </div>
        <div className="col-md-5 ">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input type="text" className="form-control" placeholder="first name" value="" />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input type="text" className="form-control" value="" placeholder="surname" />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Email ID</label>
                <input type="text" className="form-control" placeholder="enter email id" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input type="text" className="form-control" placeholder="enter phone number" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 1</label>
                <input type="text" className="form-control" placeholder="enter address line 1" value="" />
              </div>
              <div className="col-md-12">
                <label className="labels">Postcode</label>
                <input type="text" className="form-control" placeholder="enter address line 2" value="" />
              </div>
            </div>
            <div className="row mt-3">
                    <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                    <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                </div>
                <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
</div>

    </>
  )
}


export default Profile
