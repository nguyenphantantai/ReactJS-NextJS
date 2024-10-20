import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormStudent from './components/FormStudent';
import Inforstudent from './components/Inforstudent';



function App() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subjects: [],
    url: '',
    choice: '',
    about: ''
  })

  const handleSubmit = (formData) => {
    setStudent(formData);
  };

  const handleUpdate = (updatedInfo) => {
    setStudent(updatedInfo);
}


  return (
    <div>
      <Inforstudent student={student} />
      <FormStudent 
        student={student} 
        onSubmit={handleSubmit} 
        onUpdate={handleUpdate}
      />
    </div>
  )
}

export default App
