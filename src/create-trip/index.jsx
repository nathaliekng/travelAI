import React, { useState, useEffect } from 'react'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Input } from "@/components/ui/input"
import { SelectBudgetOptions } from '/constants/options';
import { SelectTravelesList } from '/constants/options';
import {Button} from '../components/ui/button'

function CreateTrip() {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState([]);
    const handleInputChange=(name, value)=>{
        setFormData({
            ...formData, 
            [name]:value
        })
    }

    useEffect(()=>{
        console.log(formData);
    }, [formData]);
    
    const OnGenerateTrip=()=>{
        if(formData?.days>5)
        {
            return ;
        }
        console.log(formData);
    }
  return (
    <div className='sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10'>
        <h2 className='font-bold text-3xl'>Tell us your travel preferences 🛬</h2>
        <p className='mt-3 text-gray-500 text-xl'>Please provide some basic information</p>

        <div className='mt-20 flex flex-col gap-9'>
            <div>
                <h2 className='text-xl my-3 font-medium'>What is your destination?</h2>
                <GooglePlacesAutocomplete
                    apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
                    selectProps={{
                        place, 
                        onChange:(v)=>{setPlace(v);handleInputChange('location', v);},
                    }}
                />
            </div>
        </div>
        <div>
            <h2 className='text-xl my-3 font-medium'>How many days?</h2>
            <Input placeholder={'Example: 3'} type="number"
                onChange={(e)=>handleInputChange('days', e.target.value)}
            />
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>What is your budget?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectBudgetOptions.map((item,index)=>(
                <div key={index} 
                onClick={()=>handleInputChange('budget', item.title)}
                    className={`p-4 border cursor-pointer 
                    rounded-lg hover:shadow-lg
                    ${formData?.budget==item.title&&'shadow-lg border-black'}`}>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        </div>
        <div>
        <h2 className='text-xl my-3 font-medium'>How many people?</h2>
        <div className='grid grid-cols-3 gap-5 mt-5'>
            {SelectTravelesList.map((item,index)=>(
                <div key={index} 
                onClick={()=>handleInputChange('traveler', item.people)} 
                className={`p-4 border cursor-pointer 
                    rounded-lg hover:shadow-lg
                    ${formData?.traveler==item.people&&'shadow-lg border-black'}`}>
                    <h2 className='text-4xl'>{item.icon}</h2>
                    <h2 className='font-bold text-lg'>{item.title}</h2>
                    <h2 className='text-sm text-gray-500'>{item.desc}</h2>
                </div>
            ))}
        </div>
        <div className="my-10 justify-end flex">
        <Button onClick={OnGenerateTrip}>Generate Trip</Button>
        </div>
        

        </div>


       

    </div>
  )
}

export default CreateTrip