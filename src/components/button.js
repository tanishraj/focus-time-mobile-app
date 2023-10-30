import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { spacing, radius, borderSize } from '../../theme/sizes';

export const Button = ({ style, textStyle, label, ...props }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={props.onPress}>
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    background: '#000',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: borderSize.xs,
    borderRadius: radius.sm,
    padding: spacing.sm,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
