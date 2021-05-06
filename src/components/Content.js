import React from 'react'
function Content() {
    return (
        <div className='container d-flex justify-content-center'>
            <form className=''>
                <div className="form-row">
                    <div className="col-md-7 mb-3 mx-auto">
                        <label for="validationServer01">Enter Name</label>
                        <input type="text" className="form-control " id="validationServer01" placeholder="First name" value="Mark" />
                    </div>
                    <div className="col-md-7 mb-3 mx-auto">
                        <label for="validationServerUsername">Username</label>
                        <div className="input-group">
                            <input type="text" className="form-control " id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" />
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-7 mb-3 mx-auto">
                        <label for="validationServer03">City</label>
                        <input type="text" className="form-control " id="validationServer03" placeholder="City" />
                    </div>
                    <div className="col-md-7 mb-3 mx-auto">
                        <label for="validationServer04">State</label>
                        <input type="text" className="form-control " id="validationServer04" placeholder="State" />
                    </div>
                    <div className="col-md-7 mb-3 mx-auto">
                        <label for="validationServer05">Zip</label>
                        <input type="text" className="form-control " id="validationServer05" placeholder="Zip" />
                    </div>
                    <div className="col-md-7 mx-auto ml-2  ">
                        <input className="form-check-input " type="checkbox" value="" id="invalidCheck3" />
                        <label className="form-check-label" for="invalidCheck3">
                            Agree to terms and conditions
                        </label>
                        <button className="btn-block btn btn-primary " type="submit">Submit form</button>
                    </div>
                </div>
                <div className="form-group  ">
                </div>

            </form>
        </div>
    )
}

export default Content
