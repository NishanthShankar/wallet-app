import {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    zIndex: 1,
    elevation: 3,
    shadowColor: '#303030',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.24,
    backgroundColor: 'white'
  },
  flex: {
    flex: 1
  },
  labelText: {
    color: '#303030',
    fontSize: 18,
    lineHeight: 18
  },
  balanceText: {
    color: '#303030',
    textAlign: 'right',
    fontSize: 18,
    lineHeight: 18
  },
  btnHolder: {
    flexDirection: 'row',
    marginVertical: 24,
    justifyContent: 'space-around'
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 116,
    padding: 8,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#303030',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 4,
    shadowOpacity: 0.24
  },
  closeBtn: {
    position: 'absolute',
    height: 44,
    width: 44,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 32,
    width: 32,
    marginBottom: 4
  },
  closeIcon: {
    height: 24,
    width: 24
  },
  txnsLabel: {
    margin: 8,
    fontSize: 24
  },
  closedContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    top: 7
  },
  openContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  spacer: {
    height: 8
  },
  txtContainer: {
    flex: 1,
    padding: 12
  }
})
