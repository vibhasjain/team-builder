import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import Form from './components/Form';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

const initialData = [
  {name: 'Vibhas', email: 'vibhas111@gmail.com', role: 'Designer'}
]



function App() {

  const [teamData, setTeamData] = useState(initialData)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [error, setError] = useState("")

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]:inputValue})
  }

  const submitForm = () => {
    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMember.name || !newMember.email || !newMember.role) {
      setError('Nope!');
      return;
    }

    setTeamData([newMember, ...teamData]);
    setFormValues(initialFormValues);
    setError("");
  }

  return (
    <div className="App">
      <h1>{error}</h1>
      <Form
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        teamData.map(member => {
          return (
            
            <Card key={member.id} details={member}/>
          )
        })
      }
    </div>
  );
}

export default App;
