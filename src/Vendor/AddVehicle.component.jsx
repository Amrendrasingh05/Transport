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
                    <h3>Add Vehicle</h3> <br />

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
                            <p >Vehicle Name</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "200px" }} />
                        </div>
                        <div>
                            <p >Vehicle Number</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "200px" }} />
                        </div>
                    </div>
                    <br />
                    <div className="display-flex justify-space">
                        <div>
                            <p >No: of Seater</p>
                            <input type="number" className="outline-box text-secondary" style={{ width: "135px" }} />
                        </div>
                        <div>
                            <p >Vehicle Type</p>
                            <input type="email" className="outline-box text-secondary" style={{ width: "135px" }} />
                        </div>
                        <div>
                            <p >No: of Vehicle</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "135px" }} />
                        </div>
                    </div>
                    <br />
                    <div className="display-flex justify-space">
                        <div>
                            <p >Vehicle Condition</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "130px" }} />
                        </div>
                        <div>
                            <p >Vehicle Registration Number</p>
                            <input type="text" className="outline-box text-secondary" style={{ width: "270px" }} />
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


                    <button className="btn btn-danger" style={{ width: "100%" }}>ADD VEHICLE</button>

                </div>
            </div>
        );
}
export default Popup;