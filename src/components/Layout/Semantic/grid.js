import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import banner from './../Images/banner2.png'
import Menu from './menu'
import Bar from './bars'

const GridLayout = () => (
  <Grid columns={2}>
    <Grid.Row color='black'>
      <Grid.Column width={3}>
          <Bar/>
          <Menu />
      </Grid.Column>
      <Grid.Column>
          <Grid.Row>
          </Grid.Row>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridLayout