import React , {createRef} from 'react';
import './App.css';
import {useMutation , useQuery} from '@apollo/client'
import {createMessageMutation , getAllMessage , getName} from './gqlScheme/index'

function App() {
  const messageValue=createRef()
  // let {data, error , loading}=useQuery(getAllMessage)
  let {data , error , loading}=useQuery(getName)
  const [addMessage]=useMutation(createMessageMutation)
  console.log("Data = ", data, " error = ", error , " loading = ", loading )

  const submit=()=>{
    let message=messageValue.current.value;
    addMessage({variables: {data: {message}}})
    .then(data=>{
      console.log("Resopnes", data)
    }).catch(error=>{
      console.log("Error ", error)
    })
  }


  return (
    <div className="App">
      <input ref={messageValue} placeholder="Enter your message here"></input>
      <button onClick={submit}>Add</button>
    </div>
  );
}

export default App;
