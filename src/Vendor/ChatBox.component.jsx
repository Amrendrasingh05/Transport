import send from '../Images/send.png'
function Popup({show, onCloseSucess}){
    if(!show){
        return null;
    }
    else
    return(
        <div className="chat-popup">
            <div className="column-box active"></div>
            <button className="close-popup" onClick={onCloseSucess}>X</button>
            <div className="primary-bg chat-area">
                
            </div>
            <input type="text" placeholder='Type something here' className="send-message search column-box-right active" style={{width:"90%"}} />
            <img src={send} alt="" className='send-message-img' />
        </div>
    );
}
export default Popup;