import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CarouselCards from './CarouselCards';

const HomeScreen = ({navigation}) => {
  const width = Dimensions.get('window').width;
  const data = [
    {
      title: 'Aenean leo',
      body: 'Ut tincidunt tincidunt erat. Sed cursus turpis vitae tortor. Quisque malesuada placerat nisl. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.',
      imgUrl: 'https://picsum.photos/id/11/200/300',
    },
    {
      title: 'In turpis',
      body: 'Aenean ut eros et nisl sagittis vestibulum. Donec posuere vulputate arcu. Proin faucibus arcu quis ante. Curabitur at lacus ac velit ornare lobortis. ',
      imgUrl: 'https://picsum.photos/id/10/200/300',
    },
    {
      title: 'Lorem Ipsum',
      body: 'Phasellus ullamcorper ipsum rutrum nunc. Nullam quis ante. Etiam ultricies nisi vel augue. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc.',
      imgUrl: 'https://picsum.photos/id/12/200/300',
    },
  ];
  return (
    <View style={styles.main}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#f1f1f1" translucent = {true}/>

      <View style={styles.header}>
        <View style={styles.innerHeader}>
          <TouchableOpacity style={styles.btn}>
            <Icon name="ios-person" size={30} color="#4F8EF7" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('drawer')}>
            <Icon name="ios-person" size={30} color="#4F8EF7" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.crView}>
        <CarouselCards />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {},
  innerHeader: {
    marginHorizontal: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop:20
  },
  btn: {paddingHorizontal: 10},
  crView: {
    paddingTop: 20,
    paddingRight: 42,
  },
});
