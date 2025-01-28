import React from 'react';
import {View, Text, Image,TextInput,} from 'react-native';

const SampleComponent = () => {
    return(
    <View>
      <View style={{width: 100, height: 100, backgroundColor: '#FFDE59'}}/>
      <Text>Desty</Text>
      <Laela />
      <Text>Barista Teh Kita</Text>
      <Text>Suka Minum Teh Lemon</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}}/>
    </View>
    );
  }
  
  const Laela =() => {
    return <Text> Desty Laela</Text>;
  };
  
  const Photo = () => {
    return (
      <Image
      source={{
        uri: 'https://image.setoko.co/image_v2/1696346775534797844.jpg',
      }}
      style={{width:100, height:100}}
      />
      );
  };
  
  export default SampleComponent;