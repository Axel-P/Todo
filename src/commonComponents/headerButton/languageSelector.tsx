import React, { PureComponent } from 'react'
import styled from 'styled-components/native'
import Row from './row'

const LangChangerTop = styled.View`
  position: relative;
`
const LangChangerSelector = styled.View`
  position: absolute
  width: 100%
  margin-top: 0.5em
  padding: 0.7em 0 0.7em 0
  background-color:#f9f9f9;
	border-radius:6px;
	border:1px solid #dcdcdc;
`

interface IProps {
  languages: string[]
  onSelected: (text: string) => void
}

export default class LanguageRow extends PureComponent<IProps> {
  render() {
    return (
      <LangChangerTop>
        <LangChangerSelector>
          {this.props.languages.map(v => (
            <Row onPress={this.props.onSelected} key={v} text={v} />
          ))}
        </LangChangerSelector>
      </LangChangerTop>
    )
  }
}
