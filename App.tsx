/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const [counter, setCounter] = React.useState(0);

  const runLongTask = () => {
    // Synchronous CPU-bound work (blocks UI until done)
    const TOTAL = 10_000_000;
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
  // runLongTask();

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: safeAreaInsets.top,
          paddingBottom: safeAreaInsets.bottom,
          paddingLeft: safeAreaInsets.left,
          paddingRight: safeAreaInsets.right,
        },
      ]}
    >
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Test Screen</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>State change</Text>
          <Text style={styles.paragraph}>Counter: {counter}</Text>
          <Button
            title="Increment Counter"
            onPress={() => setCounter(prev => prev + 1)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
    gap: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 8,
  },
  section: {
    gap: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  paragraph: {
    fontSize: 16,
  },
  inlineRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 8,
  },
  spinner: {
    marginTop: 8,
    marginBottom: 8,
  },
  resultBox: {
    marginTop: 8,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 12,
  },
  resultText: {
    fontFamily: 'Courier',
    fontSize: 12,
  },
  errorText: {
    marginTop: 8,
    color: 'red',
  },
});

export default App;
