import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Menu extends Component {
  state = { item: [] }

  fetchProduct = () => {
    axios.get(`/api/items/${this.props.match.params.id}.json`)
      .then( res => this.setState({ item: res.data }))
}


render() {
const {item} = this.state;
  return(
  <Grid centered columns={3}>
    <Grid.Column>
      <h1>Welcome to Rob's Burgers</h1>
      <Image src='https://favim.com/orig/201103/25/Favim.com-7751.jpg' fluid />
      <Item.group>
        {/* map through array and make item out of each one*/}
      </Item.group>
      
    </Grid.Column>
    </Grid>
    )
  }
}
export default Menu;