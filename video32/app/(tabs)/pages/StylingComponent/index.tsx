import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const StylingComponent = () => {
  return (
    <View>
      <Text>Styling Component</Text>
      <View style={{
        width: 100, 
        height:100, 
        backgroundColor: '#FFDE59', 
        borderWidth: 2, 
        borderColor:'#DFC57B',
        marginTop: 20,
        marginLeft: 20,
        }} 
        />
        <View style={{padding:12, backgroundColor: '#F2F2F2', width: 212}}>
        <Image source={require('../StylingComponent/TehLemon.jpg')}
        style={{width:107, height:109, borderRadius: 8}}
        />
        <Text style={{fontSize: 14,fontWeight: 'bold', marginTop:16}}>Es Teh Lemon</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', color:'#F2994A', marginTop:12}}>Rp. 5.000</Text>
        <Text style={{fontSize: 12,fontWeight: 'bold', marginTop:12}}>Pati</Text>  
        <View style={{backgroundColor: '#6FCF97', paddingVertical:6, borderRadius:25, marginTop:20}}>
          <Text style={{fontSize: 14,fontWeight: 'bold', color: 'white', textAlign: 'center'}}>BELI</Text>
        </View>
        </View> 
        </View>
   );
};

const styles = StyleSheet.create({
text: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#10ac84',
  marginLeft: 20,
  marginTop: 40,
}
})

export default StylingComponent;
