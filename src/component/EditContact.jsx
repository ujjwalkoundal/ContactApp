import React from 'react';
import { useSelector } from 'react-redux';
import {Link,useParams} from 'react-router-dom';
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const EditContact = () =>
{
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[number,setNumber] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    const contacts = useSelector(state => state);
    const currentContact = contacts.find(contact=> contact.id === parseInt(id));
    
     useEffect(() =>
     {
       if(currentContact)
       {
        setName(currentContact.name);
        setEmail(currentContact.email);
        setNumber(currentContact.number);
       }
     },[currentContact])

     const handelSubmit = (event) =>
     {
          event.preventDefault();
 
         const checkEmail =contacts.find((contact) => contact.id !==parseInt(id) && contact.email === email);
         const checkNumber =contacts.find((contact) => contact.id !==parseInt(id) && contact.number === parseInt(number)); 
 
          if(!name || !email || !number) 
          {
             return toast.warning("Please fill in all the fields");
          }
          if(checkEmail)
          {
             return toast.error("This email is already exists");
          }
          if(checkNumber)
          {
             return toast.error("This number is already exists");
          }
       
          const data ={
             id:parseInt(id), 
             name,
             email,
             number
          }
       
          dispatch({type:"UPDATE_CONTACT",payload:data})
          toast.success("Student updated successfully");
          navigate.push("/");
 
     };

    return(
        <div className="container">
        {currentContact? (
            <>
            <h1 className='display-3 my-5 text-center'>Edit Student {id}</h1>
        <div className='row'>
            <div className='col-md-6 shadow mx-auto p-5'>
            <form onSubmit={handelSubmit}>
                <div className='form-group'>
                 <input type="text" value={name} placeholder="Name" className='form-control' onChange={(e) =>setName(e.target.value) }/>
                </div>
                <div className='form-group'>
                 <input type="email" value={email} placeholder="Email" className='form-control' onChange={(e) =>setEmail(e.target.value) }/>
                </div>
                <div className='form-group'>
                 <input type="number" value={number} placeholder="Phone Number" className='form-control' onChange={(e) =>setNumber(e.target.value)}/>
                </div>
                <div className='form-group'>
                 <input type="submit" value='Update Student' className='btn btn-dark'/>
                <Link to='/' className="btn btn-danger ml-3">Cancel</Link>
                </div>
            </form>
            </div>
        </div>
        </>
        ):(
            <h1 className='display-3 my-5 text-center'>Studentcontact with id {id} not exists</h1>
        )}
      
    </div>
    );
}
export default EditContact;