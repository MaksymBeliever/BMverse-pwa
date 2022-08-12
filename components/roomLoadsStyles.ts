import { StyleSheet } from 'react-360';
import variables from '../constants/Variables';

export const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: variables.backgrounds.darkGrey,
    opacity: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: variables.borderRadiuses.br10,
  },
  image: {
    width: 600,
    height: 500,
    opacity: .9,
  },
});
