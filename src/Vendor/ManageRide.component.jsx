import { useState } from 'react'
import bell from '../Images/bell.png'
import img1 from '../Images/Vector (1).png'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'
import driverDP from '../Images/driverDP.png'
import eye from '../Images/eye.png'
import call from '../Images/call.png'

import Header from './Header.component'
import Popup from './ManageRidePopup.component'

function Dashboard() {
    const [show, setShow] = useState(false)
    return (

        <div className='display-flex'>
            <Header />
            <div className='vendor-primary-bg' style={{ width: "100%" }}>

                <div className="display-flex" style={{ justifyContent: "space-between" }}>
                    <h4>Manage Rides</h4>
                    <img src={bell} alt="" className='bell' />
                </div>

                <div className="display-flex" style={{ justifyContent: "space-between", marginTop: "2%" }}>
                    <div className="manage-rgb" style={{ background: "#2B8F65" }}>
                        <h1>5.6K</h1>
                        <p className="text-small">Total Rides</p>
                    </div>
                    <div className="manage-rgb" style={{ background: "#6B61D5" }}>
                        <h1>5.6K</h1>
                        <p className="text-small">Total Rating</p>
                    </div>
                    <div className="manage-rgb" style={{ background: "#CE4949" }}>
                        <h1>5.6K</h1>
                        <p className="text-small">Total Cancle</p>
                    </div>
                </div>


                <br />

                <div className="display-flex">
                    <button className="primary-btn active-red" onClick={() => window.open("/ManageRide","_self")} style={{ paddingTop: "1.5%" }}> <h5>Rides</h5></button>&nbsp;
                    <button className="primary-btn" onClick={() => window.open("/ManageVehicle","_self")} style={{ paddingTop: "1.5%" }}><h5>Vehicle</h5></button>&nbsp;
                    <button className="primary-btn" onClick={() => window.open("/ManageDriver","_self")} style={{ paddingTop: "1.5%" }}><h5>Driver</h5></button>
                </div>
                <br />

                <div className="display-flex">
                    <button className="primary-btn active">All Rides</button>&nbsp;
                    <button className="primary-btn">Cancled Rides</button>&nbsp;
                    <button className="primary-btn">On-Going Rides</button>
                </div>

                <Popup show={show} onClose={() => setShow(false)} />

                <div className='column-boxes'>

                    <div className="column-box display-flex" onClick={() => setShow(true)} style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <img src={driverDP} alt="" className='column-img' /> &nbsp; &nbsp;
                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>From</p>
                            <div className='Mt-5'>
                                1901 Thornridge Cir. Shiloh, Hawaii 81063
                            </div>
                        </div>

                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>To</p>
                            <div className='Mt-5'>
                                4140 Parker Rd. Allentown, New Mexico
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary'>Driver</p>
                            <div className='Mt-5'>
                                Ester Howard
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary mt-10'>Vehicle Number</p>
                            <div className='Mt-5'>
                                AIDC658958
                            </div>
                        </div>

                        <img src={eye} alt="" />
                        <img src={call} alt="" />

                    </div>


                    <div className="column-box display-flex" onClick={() => setShow(true)} style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <img src={driverDP} alt="" className='column-img' /> &nbsp; &nbsp;
                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>From</p>
                            <div className='Mt-5'>
                                1901 Thornridge Cir. Shiloh, Hawaii 81063
                            </div>
                        </div>

                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>To</p>
                            <div className='Mt-5'>
                                4140 Parker Rd. Allentown, New Mexico
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary'>Driver</p>
                            <div className='Mt-5'>
                                Ester Howard
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary mt-10'>Vehicle Number</p>
                            <div className='Mt-5'>
                                AIDC658958
                            </div>
                        </div>

                        <img src={eye} alt="" />
                        <img src={call} alt="" />

                    </div>


                    <div className="column-box display-flex" onClick={() => setShow(true)} style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <img src={driverDP} alt="" className='column-img' /> &nbsp; &nbsp;
                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>From</p>
                            <div className='Mt-5'>
                                1901 Thornridge Cir. Shiloh, Hawaii 81063
                            </div>
                        </div>

                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>To</p>
                            <div className='Mt-5'>
                                4140 Parker Rd. Allentown, New Mexico
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary'>Driver</p>
                            <div className='Mt-5'>
                                Ester Howard
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary mt-10'>Vehicle Number</p>
                            <div className='Mt-5'>
                                AIDC658958
                            </div>
                        </div>

                        <img src={eye} alt="" />
                        <img src={call} alt="" />

                    </div>


                    <div className="column-box display-flex" onClick={() => setShow(true)} style={{ justifyContent: "space-between", alignItems: "center" }}>

                        <img src={driverDP} alt="" className='column-img' /> &nbsp; &nbsp;
                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>From</p>
                            <div className='Mt-5'>
                                1901 Thornridge Cir. Shiloh, Hawaii 81063
                            </div>
                        </div>

                        <div style={{ maxWidth: "200px" }}>
                            <p className='text-secondary'>To</p>
                            <div className='Mt-5'>
                                4140 Parker Rd. Allentown, New Mexico
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary'>Driver</p>
                            <div className='Mt-5'>
                                Ester Howard
                            </div>
                        </div>

                        <div>
                            <p className='text-secondary mt-10'>Vehicle Number</p>
                            <div className='Mt-5'>
                                AIDC658958
                            </div>
                        </div>

                        <img src={eye} alt="" />
                        <img src={call} alt="" />

                    </div>


                </div>


            </div>


        </div>
    )
}
export default Dashboard;