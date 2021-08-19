import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { Button } from 'bootstrap';
import UpdateForm from './UpdateForm';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      showModal: false
    }
  }

  handleModel = () => {
    this.setState({
      showModal: true
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false
    })
  }

  componentDidMount = async () => {
    axios.get(
      `http://localhost:8080/books?email=${this.props.auth0.user.email}`
    )
      .then(response =>
        this.setState({
          userData: response.data.books
        })

      )
  }



  addBook = async (e) => {
    e.preventDefault();
    const { user } = this.props.auth0;
    let addTitle = e.target.addTitle.value;
    let addDescription = e.target.addDescription.value;
    let addImg = e.target.addImg.value;
    let addStatus = e.target.addStatus.value;
    let email = user.email
  }


  addBookForm = {
    addTitle = e.target.addTitle.value,
    addDescription = e.target.addDescription.value,
    addImg = e.target.addImg.value,
    addStatus = e.target.addStatus.value,
    email = user.email
  }


   bestBooks = await axios.post(`${process.env.REACT_APP_BOOK}/book`, addBookForm){
    this.setState({
      bestBooks: bestBooks.data
    })
   }



deleteBook = async (idx) => {
  const { user } = this.props.auth0;
}

let paramsObject = {
  email: user.email
}


let bestBooks = await axios.delete(`${this.state.server}/deleteBook/${idx}`, { params: paramsObject })
this.setState({
  bestBooks: booksData.data
})


UpdateForm = (index) => {
  this.setState({
    index : index,
    title: this.state.userData.title,
    status: this.status.userData.status,
    description: this.state.userData.description,
  })

  
}


Updates = (e) => {
  e.preventDefault();
  let update  ={
    email : this.props.auth0.user.email ,
    bookTitle : this.props.bookTitle.value ,
    bookDescription : this.props.bookDescription.value,
    bookStatus : this.props.bookStatus.value
  }

  
 axios.put(`${process.env.REACT_APP_BOOK}/book-update`, update).then(item=>{
  this.setState({
    userData: item.data
  })
 })
  
  

  
}

//   componentDidMount= ()=>{
//     if (this.props.auth0.isAuthenticated){
//         this.props.auth0.getIdTokenClaims().then(result=>{
//             let jwt=result.__raw;
//             let config={
//                 headers: {"Authorization" : `Bearer ${jwt}`},
//                 method: 'get',
//                 baseURL: "http://localhost:8000",
//                 url: '/get-users'                    
//             }
//             axios(config).then(response=>{
//                 console.log(response.data);
//                 this.setState({
//                     usersList:response.data
//                 })

//             })
//         })
//     }
// }

render() {
  return (
    <Jumbotron>
      <h1>My Favorite Books</h1>
      <p>
        This is a collection of my favorite books
      </p>

      <h2> {this.props.auth0.isAuthenticated && this.state.userData.map((item) => {
        return (
          <>
            <img src={item.img} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>{item.states}</h3>
          </>
        )
      })}</h2>


      <button onClick ={this.addBook}>add book</button>
      <BookFormModel addBook ={this.addBook} handleClose ={this.handleClose} showModal ={this.showModal}></BookFormModel>
      <h3> {this.state.userData.map((book, idx) => {
        return (
          <>
            <img src={book.img} alt={book.title} />
            <h2>{book.name}</h2>
            <p>{book.description}</p>
            <h3>{book.states}</h3>
          </>
        )
      })}</h3>

      <Button onClick={() => this.deleteBook(idx)}>Delete</Button>
      <Button onClick={() => this.UpdateForm(idx)}>Update</Button>
      {/* {console.log(this.state.userData)} */}
    </Jumbotron>
  )

}

export default withAuth0(MyFavoriteBooks);
