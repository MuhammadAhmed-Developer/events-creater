import React, { useContext, useEffect, useState } from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore/lite'
import { firestore } from '../../../Config/firebase'
import { AuthContext } from '../../../context/AuthContext';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

const initialState = {
    description: '',
    title: '',
    location: '',
    price: '',
    time: '',
    date: '',
}

export default function ReadMyEvents() {

    const  [isLoading, setIsLoading ] = useState(true)
    const { user } = useContext(AuthContext)
    const  [Documents, setDocuments]  = useState([])
    const [state, setState] = useState(initialState);

    const fetchDocument = async () => {
        let array = []
        const q = query(collection(firestore, "events"), where("createdBy.uid", "==", 'user.uid'));
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

    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div className='card p-lg-4 p-md-3 p-sm-2 m-4'>
                           {!isLoading ?
                            <Table>
                            <Thead>
                                <Tr>
                                    <Th>Sr.No</Th>
                                    <Th>Description</Th>
                                    <Th>Title</Th>
                                    <Th>Location</Th>
                                    <Th>Price</Th>
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
                                    
                                    <Td><button className='btn btn-info btn-sm me-2'>Edit</button> <button className='btn btn-danger btn-sm'>Delete</button></Td>
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
