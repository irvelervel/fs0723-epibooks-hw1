import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Component } from 'react'

class SingleBook extends Component {
  // se l'oggetto passato nelle props si chiama "oneBook",
  // lo troverò dove in props.oneBook

  state = {
    selected: false,
  }

  render() {
    return (
      <Card className={this.state.selected ? 'selectedCard' : ''}>
        <Card.Img variant="top" src={this.props.oneBook.img} />
        <Card.Body>
          <Card.Title>{this.props.oneBook.title}</Card.Title>
          <Card.Text>{this.props.oneBook.category}</Card.Text>
          <Button
            variant="primary"
            onClick={() => {
              // se selected è true, deve diventare false
              // se selected è false, deve diventare true
              this.setState({
                selected: this.state.selected ? false : true,
              })

              // this.setState({
              //   selected: !this.state.selected,
              // })

              //   if (this.state.selected === true) {
              //     this.setState({
              //       selected: false,
              //     })
              //   } else {
              //     this.setState({
              //       selected: true,
              //     })
              //   }
            }}
          >
            Seleziona
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default SingleBook
