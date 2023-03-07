import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class Progress extends Component {

    state = {
        modalVisiable6: false,
        modalVisiable7: false,
        inputVal3: ''
    }

    toggleModal3 = () => {
        const { modalVisiable6 } = this.state
        this.setState({
            modalVisiable6: !modalVisiable6
        })
    }

    handleEditClick3 = () => {
        const {modalVisiable7} = this.state
        this.setState({
            modalVisiable7: !modalVisiable7
        })
    }

    submitForm3 = (evt) => {
        evt.preventDefault()
        let title = evt.target[0].value
        this.props.addUser3(title)
        this.toggleModal3()
    }

    editUser3 = (evt) => {
        const {inputVal3} = this.state
        evt.preventDefault()
        let editTitle3 = inputVal3
        this.props.editUser3(editTitle3)
        this.handleEditClick3()
    }

    deleteUser3 = (index) => {
        const { users3 } = this.props
        users3.splice(index, 1)
        this.setState({
            users3
        })
    }

    render() {
        const { modalVisiable6 } = this.state
        const { modalVisiable7 } = this.state
        const { users3 } = this.props
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2 className='text-3xl text-center'>progress</h2>
                </div>
                <div className='card-body'>
                    <div className='flex justify-between'>
                        <ul>
                            {
                                users3.map((item, index) => (
                                    <div className='w-[320px] flex items-center justify-between'>
                                        <li className='text-2xl my-1' key={item.id}>{`${item.title}`}</li>
                                        <div>
                                            <button className='btn btn-info mx-1 text-white' id={item.id} onClick={this.handleEditClick3}>Edit</button>
                                            <Modal isOpen={modalVisiable7} toggle={this.handleEditClick3}>
                                                <ModalHeader>
                                                    <h1 className='text-2xl'>Progress</h1>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <form id="form1" onSubmit={this.editUser3}>
                                                        <input type="text" onChange={(evt) => this.setState({inputVal3: evt.target.value})} className='form-control my-1' placeholder={item.title} />
                                                    </form>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button className='btn btn-danger' onClick={this.handleEditClick3}>Close</button>
                                                    <button className='btn btn-info text-white' form="form1">Save</button>
                                                </ModalFooter>
                                            </Modal>
                                            <button className='btn btn-danger' id={item.id} onClick={() => this.deleteUser3(index)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='card-footer text-center'>
                    <button className='btn btn-success mt-1 w-50' onClick={this.toggleModal3}>Add User</button>
                    <Modal isOpen={modalVisiable6} toggle={this.toggleModal3}>
                        <ModalHeader>
                            <h1 className='text-3xl'>Progress</h1>
                        </ModalHeader>
                        <ModalBody>
                            <form id='form' onSubmit={this.submitForm3}>
                                <input type="text" className='form-control my-1' placeholder='Title' />
                                <select id="select" className='form-control'>
                                    <option className='form-control' value="open">open</option>
                                    <option className='form-control' value="pending">pending</option>
                                    <option className='form-control' value="inproge">inproge</option>
                                    <option className='form-control' value="progress" onChange={this.submitForm3}>progress</option>
                                </select>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-danger' onClick={this.toggleModal3}>Close</button>
                            <button className='btn btn-info text-white' form='form'>Save</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}