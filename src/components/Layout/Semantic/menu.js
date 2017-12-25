import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuLeft extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted pointing vertical>
        <Menu.Item name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item name='Character' active={activeItem === 'Character'} onClick={this.handleItemClick} />
        <Menu.Item name='Skills' active={activeItem === 'Skills'} onClick={this.handleItemClick} />
        <Menu.Item name='Equipment' active={activeItem === 'Equipment'} onClick={this.handleItemClick} />
        <Menu.Item name='Inventory' active={activeItem === 'Inventory'} onClick={this.handleItemClick} />
        <Menu.Item name='Store' active={activeItem === 'Store'} onClick={this.handleItemClick} />
        <Menu.Item name='Map' active={activeItem === 'Map'} onClick={this.handleItemClick} />
        <Menu.Item name='Quests' active={activeItem === 'Quests'} onClick={this.handleItemClick} />
        <Menu.Item name='Party' active={activeItem === 'Party'} onClick={this.handleItemClick} />
        <Menu.Item name='Friends' active={activeItem === 'Friends'} onClick={this.handleItemClick} />

      </Menu>
    )
  }
}