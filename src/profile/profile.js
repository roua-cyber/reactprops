
import React from 'react'
import PropTypes from 'prop-types'
import '../App.css'

const Profile=(props) => {
   
    return (
        <form className="form">
        
            <div className="div"> <div className="info"> Full name: </div> <div className="descr">{props.fullName} </div> </div>
            <div className="div"> <div className="info"> Profession: </div> <div className="descr">{props.profession} </div> </div>
            <div className="div"> <div className="info"> Bio: </div> <div className="descr">{props.bio} </div> </div>
            
        <div className="child"> {props.children} </div> 
        <button style={{background:"aqua"}} onClick={()=>{props.handleName(props.fullName)}} >click me!</button>

        </form>
        
        )

}

Profile.defaultProps={
    fullName:"Roua CHAYEB",
    profession:"Full Stack Web Developper",
    bio:"I am Roua CHAYEB. \n I am a Full Stack JS Web Developper \n." ,
}
Profile.propTypes ={
    fullName: PropTypes.string,
    profession: PropTypes.string,
    bio: PropTypes.string,
    handleName: PropTypes.string,
}

export default Profile  ;