import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const NewsAdds = () => {
  return (
    <View style={styles.container}>
      <Text>NewsAdds</Text>
    </View>
  );
};

export default NewsAdds;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",justifyContent:"center"
  },
  text: {
    fontSize: 34,
    color:"#000",
    fontWeight: '700',
  },
});
