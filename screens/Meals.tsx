import * as React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function Meals() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Meals</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="/screens/Meals.tsx" /> */}
      <View style={styles.calendarContainer}>
        <Agenda
          renderEmptyData = {() => {return (<EditScreenInfo path="/screens/Meals.tsx" />);}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  calendarContainer: {
    flex: 1,
    width: '100%'
  }
});
