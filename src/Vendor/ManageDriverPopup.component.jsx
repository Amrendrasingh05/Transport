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
                    <h3>Driver Info</h3> <br />

                    <div className="display-flex align">
                        <img src={driverDP} alt="" /> &nbsp;&nbsp;
                        <div>
                            <div>Marry jhonson</div>
                            <p className="text-small">Driver ID #123456789</p>
                        </div>
                    </div>
                    <br />

                    <div className="display-flex justify-space">
                        <div>
                            <p >Mobile Number</p>
                            <input type="text" className="driverInfo-inpt" value="7007949***"/>
                        </div>
                        <div>
                            <p >E-mail</p>
                            <input type="email" className="driverInfo-inpt" value="abc@gmail.com"/>
                        </div>
                    </div>
                    <br />

                    <p>Address</p>
                    <textarea name="" id="" cols="52" rows="5" className="driverInfo-area">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima exercitationem dolorem sequi, inventore alias rerum voluptatem expedita. Nam repellendus, facilis beatae delectus officia ratione sit cupiditate ducimus nostrum amet quidem?</textarea>
                    <br />

                    <p>Status</p>
                    <select name="" id="" className='bid-select'>
                <option value="" className='text-warning'>On-Ride</option>
                <option value="" className='text-success'>On-Service</option>
                <option value="" className='text-danger'>On-Leave</option>
                </select>

                <br /> <br />



                    <div className="display-flex" style={{ justifyContent: "space-evenly", paddingBottom: "10px" }}>
                        <button className='btn active'><img src={call} alt="" /> Call Driver</button>
                        <button className='btn btn-danger'><img src={profile} alt="" /> Call Customer</button>
                    </div>

                    <br />


                    <p>Driver Trip History</p>
                    <div className="column-box"></div>

                </div>
            </div>
        );
}
export default Popup;