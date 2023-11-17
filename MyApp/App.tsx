import React from 'react';
import {useState} from 'react';
import {SafeAreaView, StatusBar, Text, Button} from 'react-native';
import RTNCalculator from 'rtn-calculator/js/NativeCalculator';

const App: () => JSX.Element = () => {
  const [result, setResult] = useState<number | null>(null);
  return (
    <SafeAreaView>
      <StatusBar barStyle={'dark-content'} />
      <Text style={{marginLeft: 20, marginTop: 20}}>3+7={result ?? '??'}</Text>
      <Button
        title="Compute"
        onPress={async () => {
          const value = await RTNCalculator?.add(67, 4);
          setResult(value ?? null);
        }}
      />
    </SafeAreaView>
  );
};
export default App;
