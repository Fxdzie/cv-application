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
            <h3>Personal Details </h3>
            <form className="personalForm" onSubmit={handleSubmit}>
                <div className="input">
                    <label htmlFor="name"> Name: 
                    </label>
                    <input 
                        type="text" 
                        id="name"
                        name='name'
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </div>
                
                <div className="input">
                    <label htmlFor="email"> Email: 
                    </label>
                    <input 
                        type="text" 
                        id="email"
                        name='email'
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="input">
                    <label htmlFor="number"> Phone Number: 
                    </label>
                    <input 
                        type="number" 
                        id="number"
                        name='number'
                        value={inputs.number || ""}
                        onChange={handleChange}
                    />
                </div>

                <div className="input">
                    <label htmlFor="summary"> Summary:
                    </label>
                    <textarea 
                        type="text" 
                        rows={7}
                        placeholder='Max: 250 words'
                        id="summary"
                        name='summary'
                        value={inputs.summary || ""}
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

export default Personal;