import {
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Text,
  Image,
  View,
  StatusBar
} from 'react-native';
import React from 'react';

const SideDrawer = ({navigation}) => {
  const drawerItem = [
    {
      title: 'News & Adda',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
    {
      title: 'Movies',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
    {
      title: 'Videos',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
    {
      title: 'Photos',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
    {
      title: 'Reviews',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
    {
      title: 'Box Office Report',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
    {
      title: 'Web Services',
      imgUrl:
        'https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png',
    },
  ];
  return (
    <View style={styles.sideDwrContainer}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "red" translucent = {true}/>
      <View style={styles.innerContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.cancel}
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKZlChxQGKuMLmUDQK4W739X49xOtQ0U2sA&usqp=CAU',
            }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={{marginBottom: 30}}>
        {drawerItem.map(item => {
          return (
            <TouchableOpacity
              style={styles.drawerContainer}
              onPress={() => navigation.navigate('newsAdds')}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={styles.bulletPoint}></View>
                <View>
                  <Text style={styles.item}>{item.title}</Text>
                </View>
              </View>
              <View>
                <View style={styles.plusIcon}>
                  <Image source={{uri: item.imgUrl}} style={styles.image} />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SideDrawer;

const styles = StyleSheet.create({
  drawerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    display: 'flex',
    paddingVertical: 10,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginBottom: 10,
    alignItems: 'center',
  },
  item: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
  bulletPoint: {
    backgroundColor: '#fff',
    height: 10,
    width: 10,
    borderRadius: 30,
    marginHorizontal: 40,
  },
  image: {
    height: 30,
    width: 30,
  },
  tinyLogo: {
    height: 100,
    width: 300,
    marginTop: 50,
  },
  cancel: {
    height: 20,
    width: 20,
    marginLeft: 50,
  },
  sideDwrContainer: {
    flex: 1,
    backgroundColor: 'red',
    paddingHorizontal: 20,
  },
  innerContainer: {
    marginTop: 50,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  plusIcon: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 40,
    marginHorizontal: 20,
  },
});
