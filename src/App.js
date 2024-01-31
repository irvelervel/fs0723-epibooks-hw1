import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import SingleBook from './components/SingleBook'
import books from './data/scifi.json'
import { Col, Container, Row } from 'react-bootstrap'
import BookList from './components/BookList'

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center">
          {/* <SingleBook oneBook={books[0]} /> */}
          <BookList jsonOfBooks={books} />
        </Row>
      </Container>
    </div>
  )
}

export default App
