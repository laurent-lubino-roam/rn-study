/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Linking, SafeAreaView, StyleSheet, View} from 'react-native';
import Avatar from './components/Avatar';
import Button from './components/Button';
import Card from './components/Card';
import Typography from './components/Typography';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Card style={styles.card}>
        <Avatar
          src={{
            uri: 'https://ca.slack-edge.com/T045Y2Z8Q-UNXFC26MC-745d174ae812-512',
          }}
          size={128}
          style={styles.avatar}
        />
        <Typography variant="h1">Laurent Lubino</Typography>
        <Typography>Frontend developer @ Roam Digital</Typography>
        <View style={styles.buttonContainer}>
          <Button
            title="Contact me"
            onPress={() =>
              Linking.openURL('mailto:laurent.lubino@roamdigital.com')
            }
            style={styles.button}
          />
          <Button
            title="Check my website"
            onPress={() => Linking.openURL('https://www.google.com')}
            variant="outlined"
          />
        </View>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: 'aliceblue',
    flex: 1,
  },
  card: {
    marginTop: 100,
    alignItems: 'center',
  },
  avatar: {
    marginTop: -64 - 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 24,
    width: '100%',
  },
  button: {marginRight: 6},
});

export default App;
