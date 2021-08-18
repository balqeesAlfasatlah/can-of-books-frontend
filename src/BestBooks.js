import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userData:[],
    }
  }

   componentDidMount= async ()=>{
    let response = await axios.get(
      `http://localhost:3005/books?email=${this.props.auth0.user.email}`
    );
    console.log(response.data);
    this.setState({
      userData : response.data
    });
    
  }
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <h2>{this.state.userData.map((item)=>{
          return(
            <>
            <img src ={item.img} alt ={item.name}/>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>{item.states}</h3>
            </>
          )
        })}</h2>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
