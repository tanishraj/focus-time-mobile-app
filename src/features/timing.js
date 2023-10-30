import { View, StyleSheet } from 'react-native';
import { Button } from '../components/button';

export const Timing = ({ onChangeTime }) => {
  return (
    <View style={styles.defaultTimerContainer}>
      <Button
        style={styles.defaultTimer}
        label="10m"
        onPress={() => onChangeTime(10)}
      />
      <Button
        style={styles.defaultTimer}
        label="20m"
        onPress={() => onChangeTime(20)}
      />
      <Button
        style={styles.defaultTimer}
        label="30m"
        onPress={() => onChangeTime(30)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultTimerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 30,
  },
  defaultTimer: {},
});
