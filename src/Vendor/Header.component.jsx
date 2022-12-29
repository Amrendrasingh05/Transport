import img from '../Images/Vector.png'
import img1 from '../Images/Vector (1).png'
import img2 from '../Images/Vector (2).png'
import img3 from '../Images/Vector (3).png'
import img4 from '../Images/Vector (4).png'
import img5 from '../Images/Vector (5).png'



function Header(){
    return(

<div className="nav">
<div><img src={img} alt="" /></div>
<div><img src={img1} alt="" /></div>
<div><img src={img2} alt="" /></div>
<div><img src={img3} alt="" /></div>
<div><img src={img4} alt="" /></div>
<div><img src={img5} alt="" /></div>
</div>
    )
}
export default Header;