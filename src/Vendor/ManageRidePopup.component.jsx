import send from '../Images/send.png'
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
                    <h3>Ride Info</h3> <br />
                    <img src={map2} alt="" style={{ height: "130px" }} />
                    <div className="column-box display-flex" style={{ justifyContent: "space-between", alignItems: "center" }}>
                        <div className="display-flex justifyalign">
                            <img src={profileDP} alt="" className='column-img' /> &nbsp; &nbsp;
                            <div>
                                <p className="text-small">Name</p>
                                <div style={{ marginTop: "-10%" }}>Marry jhonson</div>
                            </div>
                        </div>
                        <button className='green-btn'>On Going</button>
                    </div>

                    <div className="column-box display-flex" style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <img src={driverDP} alt="" className='column-img' /> &nbsp; &nbsp;
                        <div>
                            <p className="text-small">Name</p>
                            <div style={{ marginTop: "-10%" }}>Marry jhonson</div>
                        </div>

                        <div>
                            <p className="text-small">email</p>
                            <div style={{ marginTop: "-10%" }}>jhonson@gmail.com</div>
                        </div>
                    </div>

                    <div className="column-area" style={{ height: "1000px !important" }}>
                        <p className='text-secondary'>Trip Info</p>

                        <div className="display-flex" style={{ justifyContent: "space-between" }}>
                            <div>
                                <p className='text-secondary'>From</p>
                                <div>
                                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                                </div>
                            </div>
                            <div>
                                <p className='text-secondary'>To</p>
                                <div>
                                    4140 Parker Rd. Allentown, New Mexico 31134
                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="display-flex" style={{ justifyContent: "space-between" }}>
                            <div>
                                <p className="text-secondary">Vehical Type</p>
                                <div>Mini Van</div>
                            </div>
                            <div>
                                <p className="text-secondary">Days</p>
                                <div>04</div>
                            </div>
                            <div>
                                <p className="text-secondary">No of person</p>
                                <div>08 Person</div>
                            </div>
                        </div>

                    </div>
                    <br />

                    <div className="display-flex" style={{justifyContent:"space-evenly",paddingBottom:"10px"}}>
                        <button className='btn btn-secondary'><img src={call} alt="" /> Call Driver</button>
                        <button className='btn btn-danger'><img src={profile} alt="" /> Call Customer</button>
                    </div>

                </div>
            </div>
        );
}
export default Popup;