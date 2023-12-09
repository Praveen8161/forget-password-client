import { useState } from "react";
import FrontComponent from "../components/FrontComponent"
import { API } from "../helpers/API";

const Login = () => {

  const pgHeading = 'Login' ;
  const [response, setResponse] = useState('');

  const URL = `${API}/login/user` ;

  async function handleClick(user){
    // check for empty data
    if(!user.email || !user.password){
      setResponse({error: 'Fields are required'})
      return 
    }

    // validate user
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
      if(data.data) setResponse(() => data);
    })
    .catch((err) => console.log(err))
  }

  return (
    <div className="flex h-screen justify-center items-center bg-slate-300">
      <FrontComponent
      pgHeading = {pgHeading}
      response = {response}
      handleClick = {handleClick}
      />
    </div>
  )
}

export default Login