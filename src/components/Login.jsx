import { useState } from "react";
import {Link} from "react-router-dom";
function Login (){
    const form = document.getElementsByClassName("form-control");
    const [date,setDate] = useState({username:"",password:""})
    function handleFormSubmit(event) {
        const colors = {
            danger:"form-control border-warning",
            success:"form-control border-success-subtle"
        }
        event.preventDefault(); 

        date.username.length ? form[0].className=colors.success : window.alert("შეავსე username ფორმა")
        date.password.length ? form[1].className=colors.success : window.alert("შეავსე password ფორმა")
        
        
      }
      function handelchange(text,name) {
        setDate({...date, [name]:text.target.value})
        
        
      }
      
    return(
        <div className="w-50 mt-5">
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label  className="form-label">username</label>
                    <input type="text" className="form-control " value={date.username} onChange={(e) =>{handelchange(e,'username')}}  />
                    
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" value={date.password} onChange={(e) =>{handelchange(e,'password')}}/>
                </div>
                <button type="submit" className="btn btn-primary mb-3">Submit</button>
            </form>
            <Link to="/">მთავარ გვერდზე დაბრუნება</Link> 
        </div>
    )
}

export default Login