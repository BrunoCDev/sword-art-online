import React from 'react'
import { Progress, Segment } from 'semantic-ui-react'

const Bar = () => (
  <Segment inverted>
    <Progress size='tiny' percent={32} inverted color='red' progress>Health</Progress>
    <Progress size='tiny' percent={59} inverted color='orange' progress>Stamina</Progress>
    <Progress size='tiny' percent={13} inverted color='blue' progress>Experience</Progress>
    </Segment>
)

export default Bar
