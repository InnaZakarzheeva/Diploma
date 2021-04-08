import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import Alert from './Alert';
import {connect} from 'react-redux';
import {AlertTitle} from '../config/styles';
import colors from '../config/constants';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from './Button';

const styles = StyleSheet.create({
  modalBg: {
    flex: 1,
    backgroundColor: '#00000080',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  titleBlock: {
    height: 50,
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: -60,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 250,
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

const ExitModal = (props) => {
  return (
    <Modal
      presentationStyle="overFullScreen"
      onRequestClose={props.onCancel}
      visible={props.visible}
      transparent={true}
      statusBarTranslucent={true}
      animationType="fade">
      <View style={styles.modalBg}>
        <View
          style={{
            ...styles.content,
            ...{backgroundColor: colors[props.theme].primary},
          }}>
          <TouchableOpacity onPress={props.onCancel} style={styles.closeIcon}>
            <Icon name="close" color={colors[props.theme].accent} size={20} />
          </TouchableOpacity>

          <Alert
            theme={props.theme}
            style={styles.titleBlock}
            wrapperStyle={styles.titleBlock}>
            <Icon name="warning" color={colors[props.theme].yellow} size={30} />
            <AlertTitle style={{color: colors[props.theme].yellow}}>
              Exit from app{'\n'}also will delete its data
            </AlertTitle>
          </Alert>
          <Button
            onPress={props.onExit}
            theme={props.theme}
            position={{position: 'absolute', bottom: 20}}
            style={styles.button}>
            <Icon
              name="exit-outline"
              color={colors[props.theme].accent}
              size={25}
            />
            <AlertTitle
              style={{
                color: colors[props.theme].accent,
                fontSize: 18,
                lineHeight: 21,
              }}>
              EXIT
            </AlertTitle>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    theme: state.app.theme,
  };
};

export default connect(mapStateToProps, {})(ExitModal);
