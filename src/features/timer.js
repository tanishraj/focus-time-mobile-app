import { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import { Countdown } from '../components/countdown';
import { Button } from '../components/button';
import { Timing } from './timing';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/sizes';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject)
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={styles.focusedSubjectContainer}>
        <Text style={styles.focusedSubject}>FOCUSING ON</Text>
        <Text style={[styles.focusedSubject, styles.task]}>{focusSubject}</Text>
      </View>

      <View style={styles.progressBarContainer}>
        <ProgressBar progress={progress} color={colors.lightPurple} />
      </View>

      <View>
        <Timing onChangeTime={setMinutes} />
      </View>

      <View style={styles.startbuttonContainer}>
        {isStarted && (
          <Button
            style={styles.startButton}
            label="Pause"
            onPress={() => setIsStarted(false)}
          />
        )}
        {!isStarted && (
          <Button
            style={styles.startButton}
            label="Start"
            onPress={() => setIsStarted(true)}
          />
        )}
        <Button
          style={styles.startButton}
          label="Cancel"
          onPress={clearSubject}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 30,
  },
  countdown: {},
  startbuttonContainer: {
    marginTop: 'auto',
    flexDirection: 'column',
    width: '100%',
    gap: 20,
  },
  startButton: {},
  focusedSubjectContainer: {},
  focusedSubject: {
    color: colors.white,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.sm,
  },
  task: {
    fontWeight: 'normal',
  },
  progressBarContainer: {
    width: '100%',
    textAlign: 'center',
  },
});
