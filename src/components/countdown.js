import { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/sizes';
import { formatTime, minutesToMillis } from '../utils/countdown-utils';

export const Countdown = ({ minutes = 0.1, isPaused, onProgress, onEnd }) => {
  const interval = useRef(null);
  const [millis, setMillis] = useState(null);

  const reset = () => setMillis(minutesToMillis(minutes));

  const countDownTimer = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEnd(reset);
        return time;
      }
      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millis / minutesToMillis(minutes));
  }, [millis]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDownTimer, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  return (
    <View style={styles.container}>
      <View style={styles.watchContainer}>
        <Text style={styles.watch}>
          {formatTime(minute)}:{formatTime(seconds)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  watchContainer: {},
  watch: { color: colors.white, fontSize: fontSizes['2xl'] },
});
