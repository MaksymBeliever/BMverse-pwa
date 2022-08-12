import React from 'react';
import { asset, Image, View, VrButton } from 'react-360';
import { Linking } from 'react-native';

import { styles } from './roomLoadsStyles';

export default class Application extends React.Component {
  public render() {
    return (
      <View style={styles.panel}>
        <VrButton
          onClick={() => Linking.openURL('https://asmetaverse.click/AiYECNu/')}
        >
          <Image style={styles.image} source={asset('room.png')} />
        </VrButton>
      </View>
    );
  }
}
