import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../theme/colors';
import { fontSizes } from '../../theme/sizes';

export const FocusHistory = ({ history }) => {
  const renderItem = ({ item }) => (
    <Text style={styles.listItem}>- {item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Focus Hisotry</Text>
      {history && history.length ? (
        <View>
          <FlatList data={history} renderItem={renderItem} />
        </View>
      ) : (
        <Text style={styles.listItem}>You haven't focused on anything yet...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    color: colors.white,
    fontSize: fontSizes.sm,
    fontWeight: 700,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    marginBottom: 20,
  },
  listItem: {
    color: colors.white,
  },
});
