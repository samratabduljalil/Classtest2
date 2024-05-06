import { useEffect, useState } from 'react'
import axios from 'axios';

import './admin.css'

function RetriveUser() {
    const [Data, setData] = useState('');

    useEffect(() => {

        const response = axios.get('http://localhost:2000/AllUser', {

        });
        setData(response.result)
        console.log(response.result);

    }, []);




    return (
        <>
            <div className="main">


                {

                    Data
                }



            </div>

        </>
    )
}

export default RetriveUser
