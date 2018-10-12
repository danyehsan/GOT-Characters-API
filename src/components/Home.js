import React, { Component } from 'react';
import axios from 'axios';
import { Card, Image, } from 'semantic-ui-react';

class Home extends Component {
  state = { characters: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/')
      .then(res => {
        this.setState({ characters: res.data })
      })
  }

  listCharacters = () => {
    return this.state.characters.map((c, i) => {
      if (c.imageLink) {
        return (
          <Card key={i}>
            <Image src={`https://api.got.show${c.imageLink}`} />
            <Card.Content>
              <Card.Header>{c.name}</Card.Header>
              <Card.Meta>
                <span className='date'>{c.dateOfBirth ? `Year born: ${c.dateOfBirth}` : 'Unknown'}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        )
      }
    })
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>GOT Characters</h1>
        <div>
          <Card.Group>
            {this.listCharacters()}
          </Card.Group>
        </div>
      </div>
    )
  }
}

export default Home;