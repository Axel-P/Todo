import React, { PureComponent } from 'react'
import { Button } from 'react-native'
import { withTranslation, WithTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { availableLanguages } from '../../lang'
import LanguageSelector from './languageSelector'

const TopmostContainer = styled.View`
  padding-right: 0.6em
  width: 7em
`

const ButtonOuterContainer = styled.View`
  display: flex;
`

const ButtonInnerContainer = styled.View`
  width: 50%
  align-self: center
`

class HeaderButton extends PureComponent<
  WithTranslation,
  { isActivated: boolean }
> {
  constructor(props: WithTranslation) {
    super(props)
    this.state = {
      isActivated: false,
    }
  }

  private toggleActivated = () => {
    this.setState(v => ({
      isActivated: !v.isActivated,
    }))
  }

  private langSelected = (lang: string) => {
    this.props.i18n.changeLanguage(lang)
    this.setState(() => ({
      isActivated: false,
    }))
  }

  render() {
    return (
      <TopmostContainer>
        <ButtonOuterContainer>
          <ButtonInnerContainer>
            <Button title={'LNG'} onPress={this.toggleActivated} />
          </ButtonInnerContainer>
        </ButtonOuterContainer>
        {this.state.isActivated ? (
          <LanguageSelector
            languages={availableLanguages}
            onSelected={this.langSelected}
          />
        ) : undefined}
      </TopmostContainer>
    )
  }
}

export default withTranslation()(HeaderButton)
