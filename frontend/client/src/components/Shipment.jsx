import React from 'react';
import { useState } from 'react';

const Shipment = () => {

    const apiURL = import.meta.env.VITE_BACKEND_URL

    const [files,setFiles] = useState({
        letterOfCredits: null,
        packingList:null,
        Invoice:null,
        purchaseOrder:null,
    }) 

    const handleChange = (e,fileName) =>{
        setFiles({...files, [fileName]:e.target.files[0]})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('letterOfCredit',files.letterOfCredit)
        formData.append('packingList',files.packingList)
        formData.append('Invoice',files.Invoice)
        formData.append('purchaseOrder',files.purchaseOrder)
        try {
            const res = axios.post(`${apiURL}/shipments/upload`,formData, {
               headers:{
                "Content-Type": "multipart/form-data",  
               },
            });
            console.log('upload successfully!', )
        } catch (error) {
            console.log({message: error.message})
        }
    }

    return (
        <div>
            <h1 className='font-bold text-xl' >letterOfCredit</h1>
            <input type="file" name="letterOfCredit" onChange={(e)=>handleChange(e,"letterOfCredit")}/>
            <h1 className='font-bold text-xl'>packingList</h1>
            <input type="file" name="packingList" onChange={(e)=>handleChange(e,"packingList")}/>
            <h1 className='font-bold text-xl'>Invoice</h1>
            <input type="file" name="Invoice" onChange={(e)=>handleChange(e,"Invoice")}/>
            <h1 className='font-bold text-xl'>Packing Order</h1>
            <input type="file" name="purchaseOrder" onChange={(e)=>handleChange(e,"purchaseOrder")}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Shipment;
