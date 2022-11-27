import "./form.css"




function Form()  {
    return (
        
    
        
        <form>
            <h1>Enter The Login Details</h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <label>Username: </label><br/>
            <input type="name" id="name" name="name" className="name"
             minLength='5' maxLength='50' placeholder="Enter Username" required 
            title="Use Capitial Letter Only"/><br/>
            <br/>


            <label> Email Id: </label><br/>
            <input type="email" id="email" name="email" className="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="@Domain_Name" required minlength="10"
            title="Must contain @ and the particular Domain_Name"/>
            <br/>
            <br/>

            <label>Password: </label><br/>
            <input type="password" id="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            minlength="8" required className="password"
            title="Must contain at least one number and one uppercase 
and lowercase letter,and at least 8 or more characters" placeholder="Required: (A-Z & a-z & 0-9)"/><br/><br/>



                <center><button type="Submit" >Submit</button></center>
                
                
          
           </form>
);
       
     };
export default Form;