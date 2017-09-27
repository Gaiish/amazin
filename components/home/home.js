import React, { Component } from 'react';
import {
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  Container,
  Content,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Thumbnail,
  Text
} from 'native-base';
import styles from '../../styles/styles';

export default class Home extends Component {
  static navigationOptions={
    header:null
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Header style={styles.header}
          androidStatusBarColor="#302850">
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>amazin</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.content} padder>
          <TouchableOpacity style={styles.btn}
            onPress={()=>navigate('Scan')}>
            <Thumbnail square large source={require('../../img/qrcode.png')} />
          </TouchableOpacity>
          <Text>OR</Text>
          <Button danger style={[styles.btn,styles.payWltBtn]}
            onPress={()=>navigate('Scan')}>
            <Text>Pay with amazin Wallet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
