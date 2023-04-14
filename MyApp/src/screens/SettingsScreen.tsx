import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, SafeAreaView, Text, View} from 'react-native';
import {NavigationPropType} from '../../App';

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<NavigationPropType>>();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{fontSize: 25, fontWeight: 'bold'}}>SettingsScreen</Text>

      <View style={{marginTop: 30, marginHorizontal: 20}}>
        <Button
          title="Fo to Settings"
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
