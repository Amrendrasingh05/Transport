import bell from '../Images/bell.png'
import map from '../Images/map.png'
import Popup from './WaitingPopup.component'
import ChatBox from './ChatBox.component'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'

import Header from './Header.component'
import { useState } from 'react'

function Dashboard() {
    const[show , setShow] = useState(false)

    return (

        <div className='display-flex'>
            <Header />
            <div className='vendor-primary-bg' style={{ width: "55%" }}>

                <div className="display-flex" style={{ justifyContent: "space-between" }}>
                    <h4>Bidding Info</h4>
                    <img src={bell} alt="" className='bell'/>
                </div>
                <br />

                <img src={map} alt="" />
                <br />
                <br />

                <p className='text-secondary'>Trip Info</p>

                <div className="display-flex" style={{justifyContent:"space-between"}}>
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

                <div className="display-flex" style={{justifyContent:"space-between"}}>
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

                <br />

                <div className="column-box">
                        
                </div>

                


            </div>


            <div className='vendor-secondary-bg' style={{ width: "39%" }}>
                
               <h4>Assign Driver</h4>
               <p className='text-small'>Please enter your bid amount and assign vehical</p>
               <br />

              <input type="search" placeholder='Search by names' name="" id="" className='search column-box-right active'/>
               

               <ChatBox show={show} onCloseSucess={() => setShow(false)}/>
               
               
               <br />

               <div className='column-boxes' style={{height:"450px"}}>
                    <div className="column-box" onClick={() => setShow(true)}>
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                </div>

               
            </div>
        </div>
    )
}
export default Dashboard;