import React from 'react';
import {
  View,
  Text,
  Image,
  asset,
  VrButton,
  NativeModules,
  AppRegistry,
} from 'react-360';
import { registerKeyboard } from 'react-360-keyboard';
import { Room } from './types';

import { styles } from './loginStyles';

AppRegistry.registerComponent(...registerKeyboard);

interface LoginProps {
  value: string;
  isEmpty: boolean;
  incorrect: boolean;
}

interface LoginState {
  value: string;
  isEmpty: boolean;
  incorrect: boolean;
  success: boolean;
}

export default class Login extends React.Component {
  constructor(props: LoginProps) {
    super(props);

    this.onClickHandler = this.onClickHandler.bind(this);
  }

  public state: LoginState = {
    value: '',
    isEmpty: true,
    incorrect: false,
    success: true,
  };

  public token: string = '';
  public rooms: Room[] = [];
  public correctWalletId: string = '5464565464545';

  public postWalletId = async (id: string): Promise<void> => {
    await fetch('https://kqwoc75v73.execute-api.eu-west-2.amazonaws.com/latest/login', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({walletid: `${id}`}),
    })
      .then((response) => response.json())
      .then((data) => {
        this.token = data.accessToken;
      });

    await fetch('https://kqwoc75v73.execute-api.eu-west-2.amazonaws.com/latest/roomssceneslist', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${this.token}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({pagenum: '1'}),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.props.changeRoomsData(...data);
      });
  };

  public onClickHandler() {
    NativeModules.Keyboard.startInput({
      tintColor: '#FFFFFF',
      placeholder: `${this.state.value}`,
    }).then(input => {
      this.setState({
        value: input,
        isEmpty: false,
      });
    });
  }

  public onSubmit = async () => {
    if (this.state.value.trim().length === 0) {
      this.setState({
        isEmpty: true,
        success: false,
      });
    }

    if (this.state.value !== this.correctWalletId) {
      this.setState({
        incorrect: true,
        success: false,
      });
    }

    if (this.state.isEmpty || this.state.incorrect) {
      console.log(this.state, 'empty or incorrect value');
      this.setState({
        success: false,
      });
      return;
    }

    console.log('not empty');

    if (!this.state.isEmpty || !this.state.incorrect) {
      this.setState({
        incorrect: false,
      });
      await this.postWalletId(this.state.value);
    }
    await this.props.handler('RoomsList');
  }

  public render() {
    const walletId: string = this.state.value;

    return (
        <View style={styles.panel}>
          <Image style={styles.logo} source={asset('logo.png')} />
          <Text style={styles.title}>Bluemoon Metaverse</Text>
          <View style={styles.form}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Wallet ID</Text>
              <View style={!this.state.success ? styles.inputRed : styles.input}>
                <VrButton onClick={this.onClickHandler}>
                  <Text>{walletId}</Text>
                </VrButton>
              </View>
            </View>
            <VrButton onClick={() => this.onSubmit()} style={styles.button}>
              <Text>Login</Text>
            </VrButton>
          </View>
        </View>
    );
  }
}
