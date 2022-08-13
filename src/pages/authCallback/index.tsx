import React, { PureComponent } from 'react'
import Auth from '../../Auth'
import { IPageProps } from '../../types/applicationTypes'
import { withTranslation } from 'react-i18next'

class Callback extends PureComponent<IPageProps> {
  async componentDidMount() {
    await Auth.handleAuthentication()
    this.props.navigation.navigate('Home')
  }

  render() {
    return <div>loading</div>
  }
}

export default withTranslation()(Callback)
