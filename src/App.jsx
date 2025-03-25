import Header from './sections/Header'
import { useState } from 'react';
import Display from './sections/Display';
import Personal from './components/Personal';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [dataFromPersonal, setDataFromPersonal] = useState({});
  const [dataFromEducation, setDataFromEducation] = useState({});
  const [dataFromExperience, setDataFromExperience] = useState({});

  function handleDataFromPersonal(data){
    setDataFromPersonal(data);
  }

  function handleDataFromEducation(data){
    setDataFromEducation(data);
  }

  function handleDataFromExperience(data){
    setDataFromExperience(data);
  }

  return (
    <>
      <Header />
      <div className='main-content'>
      <section className="form">
            <Personal sendData={handleDataFromPersonal}/>
            <Education sendData={handleDataFromEducation}/>
            <Experience sendData={handleDataFromExperience}/>
        </section>
        <Display 
          personal={dataFromPersonal}
          education={dataFromEducation}
          experience={dataFromExperience}/>
      </div>
    </>
  )
}

export default App
