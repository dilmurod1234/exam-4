import React, { Component } from 'react'
import Open from './Open/Open';
import Pending from './Pending/Pending';
import Inproge from './Inproge/Inproge';
import Progress from './Progress/Progress';
import "./Assets/main.css"

class App extends Component {

  state = {
    users: [],
    users1: [],
    users2: [],
    users3: []
  }

  addUser = (title) => {
    let a = this.state.users
    a.push({ id: a.length + 1, title: title })
    this.setState({
      users: a
    })
    localStorage.setItem("user", JSON.stringify(a))
  }

  editUser = (editTitle) => {
    let b = this.state.users
    b.map(item => (
      item.title = editTitle
    ))
    this.setState({
      users: b
    })
  }


  addUser1 = (title) => {
    let c = this.state.users1
    c.push({ id: c.length + 1, title: title })
    this.setState({
      users1: c
    })
    localStorage.setItem("user1", JSON.stringify(c))
  }

  editUser1 = (editTitle1) => {
    let d = this.state.users1
    d.map(item => (
      item.title = editTitle1
    ))
    this.setState({
      users1: d
    })
  }

  addUser2 = (title) => {
    let e = this.state.users2
    e.push({ id: e.length + 1, title: title })
    this.setState({
      users2: e
    })
    localStorage.setItem("user2", JSON.stringify(e))
  }

  editUser2 = (editTitle2) => {
    let f = this.state.users2
    f.map(item => (
      item.title = editTitle2
    ))
    this.setState({
      users2: f
    })
  }

  addUser3 = (title) => {
    let g = this.state.users3
    g.push({ id: g.length + 1, title: title })
    this.setState({
      users3: g
    })
    localStorage.setItem("user3", JSON.stringify(g))
  }

  editUser3 = (editTitle2) => {
    let h = this.state.users3
    h.map(item => (
      item.title = editTitle2
    ))
    this.setState({
      users3: h
    })
  }

  componentDidMount() {
    let getUser = localStorage.getItem("user")
    let parseUser = JSON.parse(getUser)
    if(parseUser){
      this.setState({
        users: parseUser
      })
    }

    let getUser1 = localStorage.getItem("user1")
    let parseUser1 = JSON.parse(getUser1)
    if(parseUser1){
      this.setState({
        users1: parseUser1
      })
    }

    let getUser2 = localStorage.getItem("user2")
    let parseUser2 = JSON.parse(getUser2)
    if(parseUser2){
      this.setState({
        users2: parseUser2
      })
    }

    let getUser3 = localStorage.getItem("user3")
    let parseUser3 = JSON.parse(getUser3)
    if(parseUser3){
      this.setState({
        users3: parseUser3
      })
    }
  }

  render() {
    const { users, users1, users2, users3 } = this.state
    const {} = this.props
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <Open addUser={this.addUser} editUser={this.editUser} users={users} />
          </div>
          <div className='col-md-3'>
            <Pending addUser1={this.addUser1} editUser1={this.editUser1} users1={users1}/>
          </div>
          <div className='col-md-3'>
            <Inproge addUser2={this.addUser2} editUser3={this.editUser2} users2={users2}/>
          </div>
          <div className='col-md-3'>
            <Progress addUser3={this.addUser3} editUser3={this.editUser3} users3={users3}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;