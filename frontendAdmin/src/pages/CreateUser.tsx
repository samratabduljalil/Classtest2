import React, { useState } from 'react';
import axios from 'axios';




const CreateUser = () => {

    const [Name, setName] = useState('');
    const [Occupation, setOccupation] = useState('');
    const [Lang, setLang] = useState('');
    const [Sub, setSub] = useState('');
    const [Phone2, setPhone2] = useState('');
    const [objective, setobjective] = useState('');


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://localhost:2000/insert', {

                Name,
                Occupation,
                Lang,
                Sub,
                Phone2,
                objective


            });

            console.log(response.data);

            alert("Insert Sucessefully")

        } catch (error) {
            console.error(error);

        }
    };

    return (<>
        <div className="main_med">

            <div className="card_container_med">
                <div className="card_contain_med">
                    <div className="card_med">
                        <h1 className='Up_title'>Insert user details</h1>
                        <form onSubmit={handleSubmit}>


                            <input className='UP_in_box' placeholder='Enter  Name' type="text" value={Name} onChange={(e) => setName(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Occupation' type="text" value={Occupation} onChange={(e) => setOccupation(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Lang' type="text" value={Lang} onChange={(e) => setLang(e.target.value)} />



                            <input className='UP_in_box' placeholder='Enter Sub' type="text" value={Sub} onChange={(e) => setSub(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter Sub' type="text" value={Phone2} onChange={(e) => setPhone2(e.target.value)} />

                            <input className='UP_in_box' placeholder='Enter objective' type="text" value={objective} onChange={(e) => setobjective(e.target.value)} />






                            <br></br>

                            <button className='UP_btn_submit' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default CreateUser;
