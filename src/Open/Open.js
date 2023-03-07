import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class Open extends Component {

    state = {
        modalVisiable: false,
        modalVisiable1: false,
        inputVal: ''
    }

    toggleModal = () => {
        const { modalVisiable } = this.state
        this.setState({
            modalVisiable: !modalVisiable
        })
    }

    handleEditClick = () => {
        const {modalVisiable1} = this.state
        this.setState({
            modalVisiable1: !modalVisiable1
        })
    }

    submitForm = (evt) => {
        evt.preventDefault()
        let title = evt.target[0].value
        this.props.addUser(title)
        this.toggleModal()
    }

    editUser = (evt) => {
        const {inputVal} = this.state
        evt.preventDefault()
        let editTitle = inputVal
        this.props.editUser(editTitle)
        this.handleEditClick()
    }

    deleteUser = (index) => {
        const { users } = this.props
        users.splice(index, 1)
        this.setState({
            users
        })
    }

    render() {
        const { modalVisiable } = this.state
        const { modalVisiable1 } = this.state
        const { users } = this.props
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2 className='text-3xl text-center'>open</h2>
                </div>
                <div className='card-body'>
                    <div className='flex justify-between'>
                        <ul>
                            {
                                users.map((item, index) => (
                                    <div className='w-[320px] flex items-center justify-between'>
                                        <li className='text-2xl my-1' key={item.id}>{`${item.title}`}</li>
                                        <div>
                                            <button className='btn btn-info mx-1 text-white' id={item.id} onClick={this.handleEditClick}>Edit</button>
                                            <Modal isOpen={modalVisiable1} toggle={this.handleEditClick}>
                                                <ModalHeader>
                                                    <h1 className='text-2xl'>Open</h1>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <form id="form1" onSubmit={this.editUser}>
                                                        <input type="text" onChange={(evt) => this.setState({inputVal: evt.target.value})} className='form-control my-1' placeholder={item.title} />
                                                    </form>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button className='btn btn-danger' onClick={this.handleEditClick}>Close</button>
                                                    <button className='btn btn-info text-white' form="form1">Save</button>
                                                </ModalFooter>
                                            </Modal>
                                            <button className='btn btn-danger' id={item.id} onClick={() => this.deleteUser(index)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='card-footer text-center'>
                    <button className='btn btn-success mt-1 w-50' onClick={this.toggleModal}>Add User</button>
                    <Modal isOpen={modalVisiable} toggle={this.toggleModal}>
                        <ModalHeader>
                            <h1 className='text-3xl'>Open</h1>
                        </ModalHeader>
                        <ModalBody>
                            <form id='form' onSubmit={this.submitForm}>
                                <input type="text" className='form-control my-1' placeholder='Title' />
                                <select id="select" className='form-control'>
                                    <option className='form-control' value="open" onChange={this.submitForm}>open</option>
                                    <option className='form-control' value="pending">pending</option>
                                    <option className='form-control' value="inproge">inproge</option>
                                    <option className='form-control' value="progress">progress</option>
                                </select>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-danger' onClick={this.toggleModal}>Close</button>
                            <button className='btn btn-info text-white' form='form'>Save</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}