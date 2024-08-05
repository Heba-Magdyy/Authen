import { useState } from 'react'
import Auth from './assets/components/Auth'
function App() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const authen = async(username, password)=>{
    await fetch('https://dummyjson.com/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
  
        username: username,
        password: password,
        expiresInMins: 30, // optional, defaults to 60
      })
    })
      .then(res => res.json())
      .then((json) => console.log(json));
  
  }


  return (
    <>
      <div className='container'>
        <h2>form</h2>

        <form onSubmit={(e)=>{
          e.preventDefault(),
          authen(username, password)
        }} action=''>

        <div className='m-4 grid gap-3'>
          <input placeholder='userName' type='text ' onChange={(e)=>setusername(e.target.value)}  value={username}/>
          <input placeholder='password' type='password' onChange={(e)=>setPassword(e.target.value)} value={password}/>
          <div >
            <button className='btn btn-primary ' type='submit'>submit</button>
          </div>
        </div>
        </form>
        <Auth />



      </div>

    </>
  )
}

export default App
