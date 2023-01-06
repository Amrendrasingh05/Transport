import uploadImg from '../Images/uploadImg.png'
import call from '../Images/call.png'
import profile from '../Images/profile.png'
import map2 from '../Images/map2.png'
import profileDP from '../Images/profileDP.png'
import driverDP from '../Images/driverDP.png'
function Popup({ show, onClose }) {
    if (!show) {
        return null;
    }
    else
        return (
            <div className="chat-popup vendor-primary-bg">
                <div className="vendor-primary-bg">
                    <button className="close-popup" onClick={onClose}>X</button>
                    <h3>Add Driver</h3> <br />

                    <center>

                        <label for="inputTag" className='upload-img'>
                            <input id="inputTag" type="file" />
                            <img src={uploadImg} className="upload-png" alt="" /><br /><br />
                            <div>Upload Image</div>
                        </label>
                    </center>

                    <br /> <br />

                    <div className="display-flex justify-space">
                        <div>
                            <p >Name</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "200px" }} />
                        </div>
                        <div>
                            <p >Mobile</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "200px" }} />
                        </div>
                    </div>
                    <br />
                    <div className="display-flex justify-space">
                        <div>
                            <p >Age</p>
                            <input type="number" className="outline-box text-secondary" style={{ width: "50px" }} />
                        </div>
                        <div>
                            <p >Email</p>
                            <input type="email" className="outline-box text-secondary" style={{ width: "200px" }} />
                        </div>
                        <div>
                            <p >DL Number</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "150px" }} />
                        </div>
                    </div>
                    <br />
                    <div className="display-flex justify-space">
                        <div>
                            <p>Experience</p>
                            <select name="" id="" className='bid-select'>
                                <option value="" className=''>1 Year</option>
                                <option value="" className=''>2 Years</option>
                                <option value="" className=''>5+ Years</option>
                            </select>


                        </div>


                        <div>
                            <p>Address</p>
                            <textarea name="" id="" cols="32" rows="0" className="driverInfo-area text-secondary"></textarea>


                        </div>
                    </div>
                    <br />

                    <center>

                        <label for="inputTag" className='upload-img'>
                            <input id="inputTag" type="file" />
                            <img src={uploadImg} className="upload-png" alt="" /><br /><br />
                            <div>Upload Document</div>
                        </label>
                    </center>

                    <br /> <br />


                    <button className="btn btn-danger" style={{ width: "100%" }}>ADD DRIVER</button>

                </div>
            </div>
        );
}
export default Popup;