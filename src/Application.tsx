import React from 'react';
import { AppRegistry } from 'react-360';
import Login from '../components/Login';
import RoomsList from '../components/RoomsList';
import RoomLoads from '../components/RoomLoads';
import JoinRoom from '../components/JoinRoom';
import { Room } from '../components/types';

interface ApplicationProps {
  scene: string;
  rooms: Room[];
}

interface ApplicationState {
  scene: string;
  rooms: Room[];
  roomName: null | string;
  roomDescription: null | string;
  roomOwner: null | string;
}

export default class Application extends React.Component {
  constructor(props: ApplicationProps) {
    super(props);

    this.handler = this.handler.bind(this);
    this.changeRoomsData = this.changeRoomsData.bind(this);
    this.setRoomName = this.setRoomName.bind(this);
    this.setRoomDescription = this.setRoomDescription.bind(this);
    this.setRoomOwner = this.setRoomOwner.bind(this);
  }

  public state: ApplicationState = {
    scene: 'Login',
    rooms: [],
    roomName: null,
    roomDescription: null,
    roomOwner: null,
  };

  public setRoomName(name: string): void {
    this.setState({
      roomName: name,
    });
  }

  public setRoomDescription(description: string): void {
    this.setState({
      roomDescription: description,
    });
  }

  public setRoomOwner(owner: string): void {
    this.setState({
      roomOwner: owner,
    });
  }

  public changeRoomsData(newData: []): void {
    this.setState({
      rooms: newData,
    });
}

  public handler(newScene: string): void {
    this.setState({
      scene: newScene,
    });
  }

  public render() {
    const changeRoomsData = this.changeRoomsData;
    const setRoomName = this.setRoomName;
    const setRoomDescription = this.setRoomDescription;
    const setRoomOwner = this.setRoomOwner;
    const handler = this.handler;
    const LoginScene = this.state.scene === 'Login'
      && <Login changeRoomsData={changeRoomsData.bind(this)} handler = {handler.bind(this)} />;
    const RoomsListScene = this.state.scene === 'RoomsList'
      && <RoomsList
            data={...this.state.rooms}
            handler = {handler.bind(this)}
            setRoomName={setRoomName.bind(this)}
            setRoomDescription={setRoomDescription.bind(this)}
            setRoomOwner={setRoomOwner.bind(this)}
        />;
    const JoinRoomScene = this.state.scene === 'JoinRoom'
      && <JoinRoom handler = {handler.bind(this)} data={this.state} />;
    const RoomLoadsScene = this.state.scene === 'RoomLoads' && <RoomLoads handler = {handler.bind(this)} />;

    return (
      <>
        {LoginScene}
        {RoomsListScene}
        {JoinRoomScene}
        {RoomLoadsScene}
      </>
    );
  }
}

AppRegistry.registerComponent('Login', () => Login);
AppRegistry.registerComponent('RoomsList', () => RoomsList);
AppRegistry.registerComponent('JoinRoom', () => JoinRoom);
AppRegistry.registerComponent('RoomLoads', () => RoomLoads);
