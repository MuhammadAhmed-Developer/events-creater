import React, { useContext, useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore/lite'
import { firestore } from '../../../Config/firebase'
import { AuthContext } from '../../../context/AuthContext';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { async } from '@firebase/util';

const initialState = {
    description: '',
    title: '',
    location: '',
    price: '',
    time: '',
    date: '',
}

export default function ReadMyEvents() {

    const { user } = useContext(AuthContext)
    const  [isLoading, setIsLoading ] = useState(true)
    const  [isLoadingDelete, setIsLoadingDelete ] = useState(false)
    const  [Documents, setDocuments]  = useState([])
    const [state, setState] = useState(initialState);

    // const handleChange = e => {
    //     setTodo(s => ({ ...s, [e.target.name]: e.target.value }))
    //   }

    const fetchDocument = async () => {
        let array = []
        const q = query(collection(firestore, "events"), where("createdBy.uid", "==", user.uid));
        // console.log(user)
        // console.log(user.uid)
        // return
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            // doc.data() is never undefined for query doc snapshots
            array.push(data)
        });
        setDocuments(array)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchDocument()
    }, [user])


    const handleDelete = async (events) => {
        setIsLoadingDelete(true)
      
        try{
            await deleteDoc(doc(firestore, "events",  events.id));
window.notify('Event has been Deleted', 'success')
let newDocuments = Documents.filter((doc)=>{
   return doc.id !== events.id
})
setDocuments(newDocuments)

        }catch(err){
            console.log(err)
            window.notify('Something went wrong', 'error')
        }


        setIsLoadingDelete(false)
    }

    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col">
                        <div className='card shadow p-lg-4 p-md-3 p-sm-2 m-4'>
                           {!isLoading ?
                            <Table className='table-bordered text-center table-info table-responsive'>
                            <Thead>
                                <Tr>
                                    <Th>Sr.No</Th>
                                    <Th>Description</Th>
                                    <Th>Title</Th>
                                    <Th>Location</Th>
                                    <Th>Ticket Price</Th>
                                    <Th>Time</Th>
                                    <Th>Date</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {Documents.map((events, i)=>{
                                   return  <Tr key={i}>
                                    <Td>{i + 1  + "*"}</Td>
                                    <Td>{events.description}</Td>
                                    <Td>{events.title}</Td>
                                    <Td>{events.location}</Td>
                                    <Td>{events.price} $</Td>
                                    <Td>{events.time}</Td>
                                    <Td>{events.date}</Td>
                                    
                                    <Td><button className='btn btn-info btn-sm me-2 mb-md-2 mb-lg-0'>Edit</button> <button className='btn btn-danger btn-sm' disabled={isLoadingDelete} onClick={() => { handleDelete(events) }}>
                                        {!isLoadingDelete ? 'Delete': <div className='spinner-border spinner-border-sm'></div>}
                                        </button></Td>
                                </Tr>
                                })}
                               
                            </Tbody>
                        </Table>

                           
                        : <div className= 'text-center'><div className='spinner-grow'></div></div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
