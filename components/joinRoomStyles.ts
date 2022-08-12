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
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 65,
  },
  roomPreview: {
    width: 320,
    height: 400,
  },
  textContent: {
    width: 320,
    height: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: variables.backgrounds.grey,
    borderTopRightRadius: variables.borderRadiuses.br10,
    borderBottomRightRadius: variables.borderRadiuses.br10,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 8,
  },
  label: {
    fontSize: variables.fontSizes.fz14,
    color: variables.colors.textGrey,
    marginBottom: 5,
  },
  input: {
    display: 'flex',
    justifyContent: 'center',
    width: 250,
    height: 30,
    backgroundColor: variables.backgrounds.dark,
    borderRadius: variables.borderRadiuses.br5,
  },
  description: {
    width: 250,
    height: 100,
    backgroundColor: variables.backgrounds.dark,
    borderRadius: variables.borderRadiuses.br5,
  },
  text: {
    marginLeft: 10,
    fontSize: variables.fontSizes.fz14,
    color: variables.colors.textWhite,
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.backgrounds.blue,
    borderRadius: variables.borderRadiuses.br5,
    width: 250,
    height: 30,
    marginTop: variables.margins.mt20,
  },
  buttonText: {
    fontSize: variables.fontSizes.fz14,
    color: variables.colors.textWhite,
  },
});
