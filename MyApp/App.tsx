import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  Pressable,
  StyleSheet,
} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

const App: () => JSX.Element = () => {
  const switchOnFlash = () => {
    console.log('On');
    RTNCalculator?.switchOnFlashLight();
  };

  const switchOffFlash = () => {
    console.log('Off');

    RTNCalculator?.switchOffFlashLight();
  };

  return (
    <SafeAreaView style={style.safeAreaView}>
      <StatusBar barStyle={'dark-content'} />
      <View style={style.wrapper}>
        <Pressable style={style.pressable} onPress={switchOnFlash}>
          <Text style={style.buttonText}>Switch On Flash Light</Text>
        </Pressable>

        <Pressable style={style.pressable} onPress={switchOffFlash}>
          <Text style={style.buttonText}>Switch Of Flash Light</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#2B2A4C',
  },
  pressable: {
    padding: 5,
    borderWidth: 0.6,
    borderColor: '#96EFFF',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFF',
    fontWeight: '400',
    letterSpacing: 1,
  },
});
export default App;
