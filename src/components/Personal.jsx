import { useState } from 'react';

function Personal({sendData}){
    const [inputs,setInputs] = useState({name: '', email:'',number:'', summary:''});

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
        <div className="personal">
            <h3>Personal Details: </h3>
            <form className="personalForm" onSubmit={handleSubmit}>
                <label htmlFor="name"> Name: 
                </label>
                <input 
                    type="text" 
                    id="name"
                    name='name'
                    value={inputs.name || ""}
                    onChange={handleChange}
                    />

                <label htmlFor="email"> Email: 
                </label>
                <input 
                    type="text" 
                    id="email"
                    name='email'
                    value={inputs.email || ""}
                    onChange={handleChange}
                    />

                <label htmlFor="number"> Phone Number: 
                </label>
                <input 
                    type="number" 
                    id="number"
                    name='number'
                    value={inputs.number || ""}
                    onChange={handleChange}
                />

                <label htmlFor="summary"> Summary:
                </label>
                <input 
                    type="text" 
                    id="summary"
                    name='summary'
                    value={inputs.summary || ""}
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

export default Personal;