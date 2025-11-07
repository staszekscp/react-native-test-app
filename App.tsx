/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { View, Text, Button } from 'react-native';
import React from 'react';

function App() {
  return <AppContent />;
}

function AppContent() {
  const [counter, setCounter] = React.useState(0);

  const runLongTask = () => {
    // Synchronous CPU-bound work (blocks UI until done)
    const TOTAL = 20_000_000;
    let accumulator = 0;
    for (let n = 0; n < TOTAL; n++) {
      const a = (n % 997) + 1;
      const b = (n % 991) + 1;
      accumulator += Math.sin(a) * Math.cos(b) + Math.sqrt((a * b) % 1000);
    }
  };

  React.useEffect(() => {
    runLongTask();
  }, [counter]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
      }}
    >
      <View style={{ alignSelf: 'center' }}>
        <Text style={{fontSize: 20}}>Counter: {counter}</Text>
      </View>
      <Button
        title="Increment Counter"
        onPress={() => setCounter(prev => prev + 1)}
      />
    </View>
  );
}

export default App;
