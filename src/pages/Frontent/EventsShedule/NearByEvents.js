import React, {useContext,useEffect, useState} from 'react'
import { collection, doc, getDocs, query, where } from 'firebase/firestore/lite'
import { Table, Tbody, Td, Th, Thead, Tr } from 'react-super-responsive-table'
import { firestore } from '../../../Config/firebase'
import { AuthContext } from '../../../context/AuthContext';

const initialState = {
  description: '',
  title: '',
  location: '',
  price: '',
  time: '',
  date: '',
}

export default function NearByEvents() {

  const { user } = useContext(AuthContext)
    // const [isLoading, setIsLoading] = useState(true)
    // const [isLoadingDelete, setIsLoadingDelete] = useState(false)
    const [Documents, setDocuments] = useState([])
    const [state, setState] = useState(initialState);

    const [events, setEvents] = useState({})
    
    

    // const handleChange = e => {
    //     setEvents(s => ({ ...s, [e.target.name]: e.target.value }))
    //   }

    const fetchDocument = async () => {
        let array = []
        const q = query(collection(firestore, "events"));
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
        
    }

    useEffect(() => {
        fetchDocument()
    }, [])

    const handleJoin = () =>{
      alert('Congratulations! 🎉 please come on time, Thanks You 🤗')
    }

  return (
    <div className="container-fluid mt-3">
    <div className="row">
        <div className="col">
            <div className='card shadow p-lg-4 p-md-3 p-sm-2 m-4'>
                    <Table className='table-bordered text-center table-danger table-responsive'>
                        <Thead>
                            <Tr>
                                <Th>Sr.No</Th>
                                <Th>Description</Th>
                                <Th>Title</Th>
                                <Th>Location</Th>
                                <Th>Ticket Price</Th>
                                <Th>Time</Th>
                                <Th>Date</Th>
                                <Th>Join</Th>
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
                                    <Td ><button className=' my-1 btn btn-sm btn-primary' onClick={handleJoin}>Join Now </button></Td>
                                    
                                </Tr>
                            })}

                        </Tbody>
                    </Table>

            </div>
        </div>
    </div>
</div>
  )
}
