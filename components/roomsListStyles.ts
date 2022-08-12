import { StyleSheet } from 'react-360';
import variables from '../constants/Variables';

export const styles = StyleSheet.create({
  panel: {
    width: 1000,
    height: 600,
    backgroundColor: variables.backgrounds.darkGrey,
    opacity: 0.8,
    borderRadius: variables.borderRadiuses.br10,
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
    width: 1000,
    backgroundColor: variables.backgrounds.dark,
    borderTopLeftRadius: variables.borderRadiuses.br10,
    borderTopRightRadius: variables.borderRadiuses.br10,
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    height: 30,
    width: 30,
    marginLeft: variables.margins.ml25,
    marginRight: variables.margins.mr10,
  },
  search: {
    position: 'relative',
    height: 30,
    width: 200,
    backgroundColor: variables.backgrounds.darkGrey,
    borderRadius: variables.borderRadiuses.br10,
    marginRight: variables.margins.mr25,
  },
  searchText: {
    color: variables.colors.textWhite,
    marginLeft: 15,
  },
  searchIcon: {
    position: 'absolute',
    top: 7,
    right: 15,
    width: 15,
    height: 15,
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  marginRightCard: {
    marginRight: variables.margins.mr10,
  },
  roomCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 180,
    height: 230,
    borderRadius: variables.borderRadiuses.br10,
    backgroundColor: variables.backgrounds.grey,
    marginTop: variables.margins.mt15,
    paddingBottom: variables.paddings.pb20,
  },
  roomCardImage: {
    width: 180,
    height: 130,
  },
  roomTitle: {
    color: variables.colors.textWhite,
  },
  roomDescription: {
    color: variables.colors.textGrey,
    fontSize: variables.fontSizes.fz14,
    textAlign: 'center',
  },
});
