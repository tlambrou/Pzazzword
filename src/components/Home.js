import React from 'react';
import { StyleSheet, Text, View, Clipboard } from 'react-native';
import { connect } from 'react-redux'
import { generatePassword } from '../actions'
import Toast from 'react-native-root-toast'
import { Button } from 'react-native-elements'
var Link = require('react-router-native').Link
import Header from './Header'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  renderListButton() {
    if (this.props.passwords[0]) {
      return (
        <Link to={`/list`}>
          <Text>
            Password List
          </Text>
        </Link>
      )
    }
  }

  _setContent() {
    Clipboard.setString(this.props.passwords[this.props.passwords.length - 1].password)
    this.setState({ visible: true })
  }

  render() {
    setTimeout(() => this.setState({
      visible: false
    }), 5000) // hide toast after 5s
    return (
      <View style={styles.container}>
        <View style={styles.main}>
          <Header />
          <View style={styles.content}>
            <Text style={styles.passwords}>{(this.props.passwords[0]) ? (this.props.passwords[this.props.passwords.length - 1]) : (`Tap 'Generate' to Create a New Password!`)}</Text>
            {(this.props.passwords[0]) ? (<Button
              title="Copy to Clipboard"
              onPress={this._setContent.bind(this)}
              color="#FB5258"
              iconRight={{name: 'assignment', color: '#FB5258'}}
              fontSize={20}
              backgroundColor="#444"
              style={styles.button}></Button>) : <Text></Text>}
              <Button
                title="Generate"
                onPress={() => this.props.generatePassword(14)}
                color="#FFF"
                icon={{name: 'autorenew'}}
                large={true}
                backgroundColor="#FB5258"
                style={styles.button}></Button>
              {this.renderListButton()}
              <Toast
                visible={this.state.visible}
                position={-50}
                shadow={true}
                animation={true}
                hideOnPress={true}
                shadowColor="#AFF"
                backgroundColor="#FB5258"
                textColor="#FFF"
                >Password Copied</Toast>
            </View>
          </View>

        </View>

      )
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#444',
      alignItems: 'center',
      justifyContent: 'space-around',
      height: '100%',
    },
    main: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    header: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    content: {
      flex: 4,
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    title: {
      color: '#FB5258',
      fontSize: 56,
    },
    tagline: {
      color: '#DDD',
    },
    passwords: {
      fontSize: 30,
      fontWeight: '600',
      color: '#fff',
      textAlign: 'center',
    }
  });

  const mapStateToProps = (state) => {
    return { passwords: state.passwords }
  }

  const mapDispatchToProps = () => {
    return {
      generatePassword
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps()
  )(Home)
