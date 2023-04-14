import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';
import {NavigationPropType} from '../../App';

const HomeScreen = () => {
  const [result, setResult] = useState<number | null>(null);

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const navigation = useNavigation<NavigationProp<NavigationPropType>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <Text style={styles.heading}>Using Turbo Module</Text>

      <Text style={styles.result}>Result {result}</Text>

      <Pressable
        style={{
          backgroundColor: 'royalblue',
          marginTop: 20,
          paddingVertical: 15,
        }}
        onPress={async () => {
          const value = await RTNCalculator?.add(12, 12);
          setResult(value ?? null);
        }}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>
          Add two numbers
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'royalblue',
          marginTop: 20,
          paddingVertical: 15,
        }}
        onPress={() => {
          const value = RTNCalculator?.multiply(12, 3);
          setResult(value ?? null);
        }}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>
          Multiply two numbers
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'royalblue',
          marginTop: 20,
          paddingVertical: 15,
        }}
        onPress={() => {
          const value = RTNCalculator?.divide(12, 3);
          console.log({value});
          setResult(value ?? null);
        }}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>
          Divide two numbers
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: 'royalblue',
          marginTop: 20,
          paddingVertical: 15,
          marginHorizontal: 20,
        }}
        onPress={() => {
          navigation.navigate('SettingsScreen');
        }}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#FFF'}}>
          Fo to Settings
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffaaff',
  },

  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#ff34aa',
    textAlign: 'center',
  },

  result: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
  },
});

export default HomeScreen;
