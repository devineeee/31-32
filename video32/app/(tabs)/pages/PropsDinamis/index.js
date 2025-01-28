import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Story = props => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
        uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>    
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        <Story 
        judul="Teh Kita"
        gambar="https://cdn-icons-png.flaticon.com/512/8266/8266769.png" />
        <Story 
        judul="Menu"
        gambar="https://cdn-icons-png.flaticon.com/512/9160/9160646.png" />
        <Story 
        judul="Testi"
        gambar="https://cdn-icons-png.flaticon.com/512/1711/1711269.png" />
        <Story 
        judul="Mitra"
        gambar="https://cdn-icons-png.flaticon.com/512/12774/12774905.png" />
        <Story 
        judul="Loker"
        gambar="https://cdn-icons-png.flaticon.com/512/7647/7647974.png" />
        <Story 
        judul="Info"
        gambar="https://th.bing.com/th/id/OIP.EcShIIDpGOdaeIOcBwnG5wAAAA?pid=ImgDet&w=159&h=159&c=7" />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
