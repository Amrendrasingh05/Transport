import bell from '../Images/bell.png'
import img1 from '../Images/Vector (1).png'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'

import Header from './Header.component'

function Dashboard() {
    return (

        <div className='display-flex'>
            <Header />
            <div className='vendor-primary-bg' style={{ width: "65%" }}>

                <div className="display-flex" style={{ justifyContent: "space-between" }}>
                    <h4>Dashboard</h4>
                    <img src={bell} alt="" className='bell'/>
                </div>

                <div className="display-flex" style={{ justifyContent: "space-between", marginTop: "2%" }}>
                    <button className="blue-bg">
                        <img src={img3} alt="" /> &nbsp; &nbsp; $ 25,356,23
                    </button>
                    <button className="red-bg">
                        <img src={img3} alt="" /> &nbsp; &nbsp; $ 25,356,23
                    </button>
                </div>

                <div className="display-flex" style={{ justifyContent: "space-between", marginTop: "2%" }}>

                    <button className="green-bg">
                        <img src={img4} alt="" /> &nbsp; &nbsp; $ 25,356,23
                    </button>
                    <button className="yellow-bg">
                        <img src={img3} alt="" /> &nbsp; &nbsp;   $ 25,356,23
                    </button>
                </div>

                <br />

                <div className="display-flex" style={{ justifyContent: "space-between" }}>
                    <h5>Manage Rides</h5>
                    <div className="display-flex" style={{}}>
                        <button className='primary-btn'>Manage</button> &nbsp;&nbsp;
                        <button className='red-btn'>+Add</button>
                    </div>
                </div>

                <div className="display-flex">
                    <button className="primary-btn active">All Rides</button>&nbsp;
                    <button className="primary-btn">Driver</button>&nbsp;
                    <button className="primary-btn">Vehicle</button>
                </div>


                <div className='column-boxes'>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                    <div className="column-box">
                        
                    </div>
                </div>



            </div>


            <div className='vendor-secondary-bg' style={{ width: "29%" }}>
                
               <h5>Ride Alert</h5>
               <div className="ride-alert-box">

               </div>
               <br />

               <div className="display-flex" style={{justifyContent:"space-between"}}>
                <h6>Manage Inventory</h6>
                <p className='text-small'>View all</p>
               </div>
               

               <div className="display-flex">
                <button className='red-btn text-small'> All List</button>
                <button className='primary-btn text-small'> Drivers</button>
                <button className='primary-btn text-small'> Vehicals</button>
               </div>

               <div className='column-boxes'>
                    <div className="column-box-right">
                        
                    </div>
                    <div className="column-box-right">
                        
                    </div>
                    <div className="column-box-right">
                        
                    </div>
                    <div className="column-box-right">
                        
                    </div>
                    <div className="column-box-right">
                        
                    </div>
                    <div className="column-box-right">
                        
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;