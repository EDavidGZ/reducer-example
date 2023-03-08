import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AppContext, useAppContext } from '../context/appContext';
import { useState, useEffect } from 'react';

const EdithModal = ({ show, onClose, rowData }) => {

    const {updateStudent} = useAppContext(AppContext)
   
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        edad: ''
    })
   
    const handelOnChange = (key, value) => {
        setFormData({
            ...formData,
            [key]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        updateStudent(formData)
        onClose()
    }

    useEffect(() => {
        setFormData(rowData)
    }, [rowData])
    

    const {name, edad} = rowData;

    return (
        <>
            <form>
                <Modal show={show} onHide={onClose}>
                    <Modal.Header className='bg-info text-white' closeButton>
                        <Modal.Title>Update</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Group className='mb-3'>
                            <Form.Control 
                            defaultValue={name}
                            onChange={ e => handelOnChange('name', e.target.value)}
                            type='text'
                            />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Control 
                            defaultValue={edad}
                            onChange={ e => handelOnChange('edad', e.target.value)}
                            type='number' 
                            />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Update
                        </Button>
                    </Modal.Footer>
                </Modal>
            </form>
        </>)
}

export default EdithModal