import App from "../App.css";
import star from '../Assets/star.png'
import girlImage from '../Assets/Ellipse.png'
function ScrolledContents() {
return<>

<div className='firstMain'>
        <div className='starDiv'>
        <img src={star} alt="" className='star'/>
        <img src={star} alt=""  className='star'/>
        <img src={star} alt="" className='star' />
        <img src={star} alt=""  className='star'/>
        <img src={star} alt=""  className='star'/>
        </div>
       <div className='textDiv'>
        <span className='text'>Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.</span>
       </div>
       <div className='imageDiv'>
        <img src={girlImage} alt="" className='image'/>
        <span className='textName'>Amy Klassen </span>
       </div>
       <div className='nametextDiv'>
       <span className='textName'>Amy </span>
       </div>
      </div>
      
    
      </>
    }
    export default ScrolledContents