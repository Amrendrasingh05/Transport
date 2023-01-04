import check from '../Images/check.png'
function Popup({show, onCloseSucess}){
    if(!show){
        return null;
    }
    else
    return(
        <div className="popup">
        <div className="popup-box-green">
            {/* <button className="close-popup" onClick={onCloseSucess}>X</button> */}
            <img src={check} className="checkImg" alt="" />
            <br />
            <h2>Bid Accepted</h2>
            <br />
            <p className="text-small">congrats customer agreed</p>
            <p className="text-small">to your bid</p>
            <br />
            <br />

            <button className="btn btn-danger" onClick={() => window.open("/AssignDriver","_self")}> Assign Deriver to Customer</button>
        </div>
        </div>
    );
}
export default Popup;