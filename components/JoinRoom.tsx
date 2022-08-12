import React from 'react';
import {
  View,
  Text,
  Image,
  asset,
  VrButton,
} from 'react-360';

import { styles } from './joinRoomStyles';

export default class JoinRoom extends React.Component {
  public render() {
    const rooms = this.props.data;
    const handleToUpdate = this.props.handler;

    console.log(rooms);

    return (
      <View style={styles.panel}>
        <View style={styles.head}>
          <View style={styles.logoWrapper}>
            <Image
              style={styles.logo}
              source={asset('logo.png')}
            />
            <Text>Bluemoon Metaverse</Text>
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <Image
            source={asset('room_preview.png')}
            style={styles.roomPreview}
          />
          <View style={styles.textContent}>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Room Name</Text>
              <View style={styles.input}>
                <Text style={styles.text}>{rooms.roomName}</Text>
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Room Description</Text>
              <View style={styles.description}>
                <Text style={styles.text}>{rooms.roomDescription}</Text>
              </View>
            </View>
            <View style={styles.inputWrapper}>
              <Text style={styles.label}>Room Owner</Text>
              <View style={styles.input}>
                <Text style={styles.text}>{rooms.roomOwner}</Text>
              </View>
            </View>
            <VrButton
              onClick={() => handleToUpdate('RoomLoads')}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Join Room</Text>
            </VrButton>
          </View>
        </View>
      </View>
    );
  }
}
