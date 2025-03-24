import { useState } from 'react';

function Experience({sendData}){
    const [inputs,setInputs] = useState({company: '',position:'',responsibilities:'',startDate:'',endDate:''});

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
        <div className="experience">
            <h3>Experience: </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="company"> Company: 
                </label>
                <input 
                    type="text" 
                    id="company"
                    name='company'
                    value={inputs.company || ""}
                    onChange={handleChange}
                />

                <label htmlFor="position"> Position: 
                </label>
                <input 
                    type="text" 
                    id="position"
                    name='position'
                    value={inputs.position || ""}
                    onChange={handleChange}
                />

                <label htmlFor="responsibilities"> Responsibilities: 
                </label>
                <input 
                    type="text" 
                    id="responsibilities"
                    name='responsibilities'
                    value={inputs.responsibilities || ""}
                    onChange={handleChange}
                />

                <label htmlFor="start-date"> From:
                </label>
                <input 
                    type="date" 
                    id="start-date"
                    name='startDate'
                    value={inputs.startDate || ""}
                    onChange={handleChange}
                />

                <label htmlFor="end-date"> Until:
                </label>
                <input 
                    type="date" 
                    id="end-date"
                    name='endDate'
                    value={inputs.endDate || ""}
                    onChange={handleChange}
                />
                <div className="buttons">
                    <button type='submit'>Save</button>
                    <button>Edit</button>
                </div>
            </form>
            
        </div>
    );
}

export default Experience;