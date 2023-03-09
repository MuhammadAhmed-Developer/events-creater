import React, { useContext, useEffect, useState } from 'react'
import { collection, deleteDoc, doc, getDocs, query, setDoc, where,serverTimestamp } from 'firebase/firestore/lite'
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
    const [isLoading, setIsLoading] = useState(true)
    const [isLoadingDelete, setIsLoadingDelete] = useState(false)
    const [Documents, setDocuments] = useState({})
    const [state, setState] = useState(initialState);

    const [events, setEvents] = useState([])

    const handleChange = e => {
        setEvents(s => ({ ...s, [e.target.name]: e.target.value }))
      }

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

        try {
            await deleteDoc(doc(firestore, "events", events.id));
            window.notify('Event has been Deleted', 'success')
            let newDocuments = Documents.filter((doc) => {
                return doc.id !== events.id
            })
            setDocuments(newDocuments)

        } catch (err) {
            console.log(err)
            window.notify('Something went wrong', 'error')
        }


        setIsLoadingDelete(false)
    }


    const handleUpdated= async ()=>{
        let eventData = {...events}
        eventData.dateCreated = eventData.dateCreated
        eventData.dateModified = serverTimestamp()
        eventData.modifiedBy={
            email:user.email,
            uid: user.uid
        }

        setIsLoading(true)
        try{
            await setDoc(doc(firestore, "events", eventData.id), eventData, {merge: true});
            window.notify("Todo has been Successfuly Updated", "success")
            let newEvent = Documents.map((doc)=>{
              if(doc.id === events.id)
               return events
               return doc
              
            })
            setDocuments(newEvent)

        }catch(err){
           console.error(err)
           window.notify("Something went wrong", "error")
        }
        setIsLoading(false)
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
                                        {Documents.map((events, i) => {
                                            return <Tr key={i}>
                                                <Td>{i + 1 + "*"}</Td>
                                                <Td>{events.description}</Td>
                                                <Td>{events.title}</Td>
                                                <Td>{events.location}</Td>
                                                <Td>{events.price} $</Td>
                                                <Td>{events.time}</Td>
                                                <Td>{events.date}</Td>

                                                <Td><button type="button" class="btn btn-info btn-sm  mb-lg-0 mb-md-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setEvents(events)}}>
                                                    Edit</button> <button className='btn btn-danger btn-sm' disabled={isLoadingDelete} onClick={() => { handleDelete(events) }}>
                                                        {!isLoadingDelete ? 'Delete' : <div className='spinner-border spinner-border-sm'></div>}
                                                    </button></Td>
                                            </Tr>
                                        })}

                                    </Tbody>
                                </Table>


                                : <div className='text-center'><div className='spinner-grow'></div></div>}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button> */}

            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Event</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                           <div className="row">
                             <div className="col">
                             <div className="row mb-3">
                    <div className="col">
                      <textarea name="description"  className='form-control' value={events.description}  placeholder='Description' onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="text" name="title" className='form-control' value={events.title} placeholder='Enter Title'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="number" name="price" className='form-control' value={events.price} placeholder='Ticket Price in $'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <input type="text" name="location" className='form-control' value={events.location} placeholder='Location'  onChange={handleChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
                      <input type="time" name='time' className='form-control ' value={events.time} placeholder='00'  onChange={handleChange} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                      <input type="date" name='date' className='form-control ' value={events.date} placeholder=''  onChange={handleChange}/>
                    </div>
                  </div>
                             </div>
                           </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleUpdated}>{!isLoading ? 'Save Changes' : <div className='spinner-border spinner-border-sm'></div>}</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
