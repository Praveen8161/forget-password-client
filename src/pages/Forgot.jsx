import { useState } from "react";
import GetEmail from "../components/GetEmail"
import { API, AppLink } from "../helpers/API";

const Forgot = () => {
  const [response, setResponse] = useState('');
  const URL = `${API}/forgot` ;

  function handleClick(user){
    if(!user.email){
      setResponse({error: 'Fields are required'});
      return
    }

    const mailUser = {
      email: user.email,
      link: `${AppLink}/reset`
    }

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mailUser)
    })
    .then((data) => data.json())
    .then((data) => setResponse(data))
    .catch((err) => console.log(err))
  }

  return (
    <div className="flex h-screen justify-center items-center bg-slate-300">
    <GetEmail
    handleClick = {handleClick}
    response = {response}
    setResponse = {setResponse}
    />
  </div>
  )
}

export default Forgot