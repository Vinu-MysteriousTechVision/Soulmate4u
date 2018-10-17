'use strict'

import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Dimensions, Image, Text, TouchableHighlight, View } from 'react-native'

const windowWidth: number = Dimensions.get('window').width // full width
const windowHeight: number = Dimensions.get('window').height // full height

export default class ProfileView extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.actionOnProfileView = this.actionOnProfileView.bind(this)
  }

  public render() {
    const { profile } = this.props
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        {this.ProfileViewSection(2)}
      </View>
    )
  }

  private actionOnProfileView() {
    if (this.props.actionOnProfileView) {
      this.props.actionOnProfileView()
    }
  }

  private ProfileViewSection(columns: number) {
    const postImages = []
    for (let i = 0; i < columns; i++) {
      postImages.push(
        <TouchableHighlight
          key={i}
          onPress={this.actionOnProfileView}
          underlayColor="rgba(0,0,0,0)"
        >
          <View
            style={{
              width: windowWidth / columns - 10,
              margin: 5,
              backgroundColor: 'red',
            }}
          >
            <View style={{ height: 150, margin: 5, backgroundColor: 'gray' }} />
          </View>
        </TouchableHighlight>,
      )
    }
    return postImages
  }
}

ProfileView.propTypes = {
  actionOnProfileView: PropTypes.func,
  profile: PropTypes.object,
}
