import React from 'react';
import {
  View,
  Text,
  Image,
  asset,
  AppRegistry,
  VrButton,
  NativeModules,
} from 'react-360';
import { registerKeyboard } from 'react-360-keyboard';
import { Room } from './types';

import { styles } from './roomsListStyles';

AppRegistry.registerComponent(...registerKeyboard);

interface RoomListState {
  searchTerm: string;
  roomsData: Room[];
}

export default class RoomsList extends React.Component {
  public state: RoomListState = {
    roomsData: this.props.data,
    searchTerm: '',
  };

  public cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  public onClickHandler() {
    NativeModules.Keyboard.startInput({
      tintColor: '#FFFFFF',
      placeholder: 'Enter room name',
    }).then(input => {
      console.log(input);
      this.setState({
        searchTerm: input,
      });
    });
  }

  public searchRoom = (items, term) => {
    if (term.length === 0) {
      return;
    }

    return items.filter(item => {
       return item.ROOM_NAME.indexOf(term) > -1;
    });
  }

  public onSubmit = async (roomName: string, roomDescription: string, roomOwner: string) => {
    await this.props.setRoomName(roomName);
    await this.props.setRoomDescription(roomDescription);
    await this.props.setRoomOwner(roomOwner);
    await this.props.handler('JoinRoom');
  }

  public render() {
    const { roomsData: rooms } = this.state;
    const visibleData = this.searchRoom(rooms, this.state.searchTerm);

    console.log('visibledata', visibleData);
    console.log('data', this.state.roomsData);

    return (
      <View style={styles.panel}>
        <View style={styles.head}>
          <View style={styles.logoWrapper}>
            <Image style={styles.logo} source={asset('logo.png')} />
            <Text>Bluemoon Metaverse</Text>
          </View>
          <VrButton onClick={this.onClickHandler} style={styles.search}>
            <Text style={styles.searchText}>Search</Text>
            <Image style={styles.searchIcon} source={asset('search.svg')} />
          </VrButton>
        </View>
        <View style={styles.cards}>
          {
            this.cards.map((card, idx) => {
              return (
                <View key={idx} style={styles.cardWrapper}>
                  <VrButton
                    onClick={() =>
                      this.onSubmit(rooms.ROOM_NAME, rooms.ROOM_DESCRIPTION, 'Room Owner ID',
                    )}
                    style={[styles.roomCard,
                      idx !== this.cards
                        ? styles.marginRightCard
                        : styles.roomCard,
                    ]}
                  >
                    <Image style={styles.roomCardImage} source={asset('room.png')} />
                    <Text style={styles.roomTitle}>{rooms.ROOM_NAME}</Text>
                    <Text style={styles.roomDescription}>{rooms.ROOM_DESCRIPTION}</Text>
                  </VrButton>
                </View>
              );
            })
          }
        </View>
      </View>
    );
  }
}
