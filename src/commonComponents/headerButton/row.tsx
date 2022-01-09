import React, { PureComponent } from 'react'
import styled from 'styled-components/native'

const LangRow = styled.TouchableOpacity`
  background-color:#e9e9e9
  border-bottom-color:#dcdcdc
  border-bottom-style: solid
  border-bottom-width: thin
`

const LangContent = styled.Text`
  color:#666666
	font-family:Arial
	font-size:1em
	font-weight:bold
  text-align: center
`

interface IProps {
  text: string
  onPress: (text: string) => void
}

export default class Row extends PureComponent<IProps> {
  private onPressHandler = () => {
    this.props.onPress(this.props.text)
  }

  render() {
    return (
      <LangRow onPress={this.onPressHandler}>
        <LangContent>{this.props.text}</LangContent>
      </LangRow>
    )
  }
}
