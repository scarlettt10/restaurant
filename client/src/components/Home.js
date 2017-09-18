import React from 'react';
import { Grid, Image, Button } from 'semantic-ui-react';



const Home = ({ history }) => (
  <Grid centered columns={3}>
    <Grid.Column>
      <h1>Welcome to Rob's Burgers</h1>
      <Image src='https://favim.com/orig/201103/25/Favim.com-7751.jpg' fluid />
      <Button primary onClick={ () => {history.push('/menu')}} fluid >Menu</Button>
    </Grid.Column>
  </Grid>
)

export default Home;