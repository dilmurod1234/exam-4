import React, { Component } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

export default class Inproge extends Component {

    state = {
        modalVisiable4: false,
        modalVisiable5: false,
        inputVal2: ''
    }

    toggleModal2 = () => {
        const { modalVisiable4 } = this.state
        this.setState({
            modalVisiable4: !modalVisiable4
        })
    }

    handleEditClick2 = () => {
        const {modalVisiable5} = this.state
        this.setState({
            modalVisiable5: !modalVisiable5
        })
    }

    submitForm2 = (evt) => {
        evt.preventDefault()
        let title = evt.target[0].value
        this.props.addUser2(title)
        this.toggleModal2()
    }

    editUser2 = (evt) => {
        const {inputVal2} = this.state
        evt.preventDefault()
        let editTitle2 = inputVal2
        this.props.editUser2(editTitle2)
        this.handleEditClick2()
    }

    deleteUser2 = (index) => {
        const { users2 } = this.props
        users2.splice(index, 1)
        this.setState({
            users2
        })
    }

    render() {
        const { modalVisiable4 } = this.state
        const { modalVisiable5 } = this.state
        const { users2 } = this.props
        return (
            <div className='card'>
                <div className='card-header'>
                    <h2 className='text-3xl text-center'>inproge</h2>
                </div>
                <div className='card-body'>
                    <div className='flex justify-between'>
                        <ul>
                            {
                                users2.map((item, index) => (
                                    <div className='w-[320px] flex items-center justify-between'>
                                        <li className='text-2xl my-1' key={item.id}>{`${item.title}`}</li>
                                        <div>
                                            <button className='btn btn-info mx-1 text-white' id={item.id} onClick={this.handleEditClick2}>Edit</button>
                                            <Modal isOpen={modalVisiable5} toggle={this.handleEditClick2}>
                                                <ModalHeader>
                                                    <h1 className='text-2xl'>Inproge</h1>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <form id="form3" onSubmit={this.editUser2}>
                                                        <input type="text" onChange={(evt) => this.setState({inputVal2: evt.target.value})} className='form-control my-1' placeholder={item.title} />
                                                    </form>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button className='btn btn-danger' onClick={this.handleEditClick2}>Close</button>
                                                    <button className='btn btn-info text-white' form="form3">Save</button>
                                                </ModalFooter>
                                            </Modal>
                                            <button className='btn btn-danger' id={item.id} onClick={() => this.deleteUser2(index)}>Delete</button>
                                        </div>
                                    </div>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className='card-footer text-center'>
                    <button className='btn btn-success mt-1 w-50' onClick={this.toggleModal2}>Add User</button>
                    <Modal isOpen={modalVisiable4} toggle={this.toggleModal2}>
                        <ModalHeader>
                            <h1 className='text-3xl'>Inproge</h1>
                        </ModalHeader>
                        <ModalBody>
                            <form id='form4' onSubmit={this.submitForm2}>
                                <input type="text" className='form-control my-1' placeholder='Title' />
                                <select id="select" className='form-control'>
                                    <option className='form-control' value="open">open</option>
                                    <option className='form-control' value="pending">pending</option>
                                    <option className='form-control' value="inproge" onChange={this.submitForm2}>inproge</option>
                                    <option className='form-control' value="progress">progress</option>
                                </select>
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <button className='btn btn-danger' onClick={this.toggleModal2}>Close</button>
                            <button className='btn btn-info text-white' form='form4'>Save</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}