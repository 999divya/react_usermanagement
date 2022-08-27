import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import "./Home.css";
import Product from "./Products";
import axios from "axios";
import Loading from '../components/Loading'

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
   const fetchBooks = async()=>{
    const url =
    "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=4ZllzZAftjL9wsIWNp3m4tkWw6xXCF2n";
    const res = await axios.get(url)
    setLoading(false);
    setPosts(res.data.results.books)
    console.log(res.data.results.books)
   }
   
fetchBooks();


  },[]);



  return (
    <div>
      <Header />
      {loading && <Loading/>}
      <div className="container mt-5 styleCon">
        <ul>
          <div className="row-wrapper">
            <Row>
              {posts.map((book) => {
           const {description, author, book_image, price,rank, title}=book
                return (
                  <Product
                    key={rank}
                    img={book_image}
                    title={title}
                    price={price}
                    author={author}
                    date={description}
                  />
                );
              })}
            </Row>
          </div>

          {/* {posts.map((index, item)=>{


return(
  
    <li key={item.id}>
    <Card  style={{ width: '18rem' }}>
  

  <Card.Img variant="top" src={item.url} />
  <Card.Body>

    <Card.Title>{item.title}</Card.Title>
 
    <Card.Text>
  
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </li>

)


  })} */}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
