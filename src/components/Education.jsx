import { useState } from 'react';

function Education({sendData}){
    const [inputs,setInputs] = useState({degree:'',uni:'',studyDate:''});
    
        const handleChange = (event) =>{
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values=>({...values,[name]: value}));
        };
    
        const handleSubmit = (event) =>{
            event.preventDefault();
            console.log(inputs);
            sendData(inputs);
        };

    return (
        <div className="education">
            <h3>Previous Education </h3>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor="degree"> Degree: 
                    </label>
                    <input 
                        type="text" 
                        id="degree"
                        name='degree'
                        value={inputs.degree || ""}
                        onChange={handleChange}
                    />
                </div>
                
                <div className='input'> 
                    <label htmlFor="uni"> University: 
                    </label>
                    <input 
                        type="text" 
                        id="uni"
                        name='uni'
                        value={inputs.uni || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className='input'>
                    <label htmlFor="study-date"> Date of Study: 
                    </label>
                    <input 
                        type="date" 
                        id="study-date"
                        name='studyDate'
                        value={inputs.studyDate || ""}
                        onChange={handleChange}
                    />
                </div>

                
                <div className="buttons">
                    <button type='submit'>Save</button>
                </div>
            </form>
            
            
        </div>
    );
}

export default Education;