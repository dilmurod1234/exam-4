import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class Pending extends Component {

    state = {
        modalVisiable2: false,
        modalVisiable3: false,
        inputVal1: ''
    }

    toggleModal1 = () => {
        const { modalVisiable2 } = this.state
        this.setState({
            modalVisiable2: !modalVisiable2
        })
    }

    handleEditClick1 = () => {
        const {modalVisiable3} = this.state
        this.setState({
            modalVisiable3: !modalVisiable3
        })
    }

    submitForm1 = (evt) => {
        evt.preventDefault()
        let title = evt.target[0].value
        this.props.addUser1(title)
        this.toggleModal1()
    }

    editUser1 = (evt) => {
        const {inputVal1} = this.state
        evt.preventDefault()
        let editTitle1 = inputVal1
        this.props.editUser1(editTitle1)
        this.handleEditClick1()
    }

    deleteUser1 = (index) => {
        const { users1 } = this.props
        users1.splice(index, 1)
        this.setState({
            users1
        })
    }

    render() {
        const { modalVisiable2 } = this.state
        const { modalVisiable3 } = this.state
        const { users1 } = this.props
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2 className='text-3xl text-center'>pending</h2>
                </div>
                <div className='card-body'>
                    <div className='flex justify-between'>
                        <ul>
                            {
                                users1.map((item, index) => (
                                    <div className='w-[320px] flex items-center justify-between'>
                                        <li className='text-2xl my-1' key={item.id}>{`${item.title}`}</li>
                                        <div>
                                            <button className='btn btn-info mx-1 text-white' id={item.id} onClick={this.handleEditClick1}>Edit</button>
                                            <Modal isOpen={modalVisiable3} toggle={this.handleEditClick1}>
                                                <ModalHeader>
                                                    <h1 className='text-2xl'>Pending</h1>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <form id="form1" onSubmit={this.editUser1}>
                                                        <input type="text" onChange={(evt) => this.setState({inputVal1: evt.target.value})} className='form-control my-1' placeholder={item.title} />
                                                    </form>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button className='btn btn-danger' onClick={this.handleEditClick1}>Close</button>
                                                    <button className='btn btn-info text-white' form="form1">Save</button>
                                                </ModalFooter>
                                            </Modal>
                                            <button className='btn btn-danger' id={item.id} onClick={() => this.deleteUser1(index)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='card-footer text-center'>
                    <button className='btn btn-success mt-1 w-50' onClick={this.toggleModal1}>Add User</button>
                    <Modal isOpen={modalVisiable2} toggle={this.toggleModal1}>
                        <ModalHeader>
                            <h1 className='text-3xl'>Pending</h1>
                        </ModalHeader>
                        <ModalBody>
                            <form id='form2' onSubmit={this.submitForm1}>
                                <input type="text" className='form-control my-1' placeholder='Title' />
                                <select id="select" className='form-control'>
                                    <option className='form-control' value="open">open</option>
                                    <option className='form-control' value="pending" onChange={this.submitForm1}>pending</option>
                                    <option className='form-control' value="inproge">inproge</option>
                                    <option className='form-control' value="progress">progress</option>
                                </select>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-danger' onClick={this.toggleModal1}>Close</button>
                            <button className='btn btn-info text-white' form='form2'>Save</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}