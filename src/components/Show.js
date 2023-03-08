import React, { useState } from 'react'
import { AppContext, useAppContext } from '../context/appContext'
import { AiOutlineEdit } from 'react-icons/ai'
import { AiTwotoneDelete } from 'react-icons/ai'
import EdithModal from './EdithModal'

const Show = () => {
    const [rowData, setRowData] = useState({})

    const { students, deleteStudent } = useAppContext(AppContext)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (student) => {
        setRowData(student)
        setShow(true)
}
    return (
        <>
            <table className="table table-striped mt-5">
                <thead className='bg-dark text-white'>
                    <tr>
                        <th >name</th>
                        <th >age</th>
                        <th >actions</th>
                    </tr>
                </thead>
                <tbody >
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.edad}</td>
                            <td>
                                <div className='btn-group'>
                                    <button onClick={() => handleShow(student)} className='btn btn-info'><AiOutlineEdit /></button>
                                    <button onClick={() => deleteStudent(student.id)} className='btn btn-danger'><AiTwotoneDelete /></button>
                                </div>
                            </td>
                        </tr>

                    ))

                    }
                </tbody>
            </table>
                <EdithModal show={show} onClose={handleClose} rowData={rowData}/>
        </>
    )
}

export default Show