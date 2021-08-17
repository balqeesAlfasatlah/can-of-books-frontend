import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      userData:[],
    }
  }

  async componentDidMount(){
    let response = await axios.get(
      `http://localhost:4009/books?email=balqeesAlfasatlah@yahoo.com`
    );
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
      </Jumbotron>
    )
  }
}

export default MyFavoriteBooks;
