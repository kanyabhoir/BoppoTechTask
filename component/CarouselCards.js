import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useRef} from 'react';
import CarouselCardItem, {SLIDER_WIDTH, ITEM_WIDTH} from './CarouselCardItem';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import data from '../android/data';

const CarouselCards = () => {
  const [index, setIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={index => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  );
};

export default CarouselCards;

const styles = StyleSheet.create({});
