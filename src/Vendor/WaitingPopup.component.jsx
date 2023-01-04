import { useState } from 'react';
import SucessPopup from './SucessPopup.component'
function Popup({show, onClose}){

    const[showSucess, setshowSucess]=useState(false)

    function openclose(){
        setshowSucess(true);
        onClose();
    }

    if(!show){
        return null;
    }
    else
    return(
        <div className="popup">
        <div className="popup-box">
            {/* <button className="close-popup" onClick={onClose}>X</button> */}
            <div className="ring"></div>
            <br />
            <h2>Waiting.....</h2>
            <br />
            <p className="text-small">Please wait till customer</p>
            <p className="text-small">accept the bidding</p>
            <br />
            <br />

            <p className="text-danger" onClick={openclose}> Withdraw application</p>
        </div>

        <SucessPopup show={showSucess} onCloseSucess={() => setshowSucess(false)}/>
        </div>
    );
}
export default Popup;