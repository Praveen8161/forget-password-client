import { useState } from "react";
import FrontComponent from "../components/FrontComponent"
import { API } from "../helpers/API";

const Signup = () => {

  const [response, setResponse] = useState('');
  const URL = `${API}/signup/newuser` ;

  const pgHeading = 'Signup' ;

  async function handleClick(user){
    // check if there is empty data
    if(!user.email || !user.password){
      setResponse({error: 'Fields are required'})
      return 
    }

    // update the uset data in DB
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then((data) => data.json())
    .then((data) => {
      if(data.error) setResponse(() => data);
      if(data.message) setResponse({message: data.message});
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="flex h-screen justify-center items-center bg-slate-300">
      <FrontComponent
      pgHeading = {pgHeading}
      handleClick = {handleClick}
      response = {response}
      />
    </div>
  )
}

export default Signup