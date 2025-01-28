import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
        <Image source={require('../Product/TehLemon.jpg')}
        style={styles.imageProduct}
        />
        <Text style={styles.productName}>Es Teh Lemon</Text>
        <Text style={styles.productPrice}>Rp. 5.000</Text>
        <Text style={styles.location}>Pati</Text>
        <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>BELI</Text>
        </View>
        </TouchableOpacity>  
        </View>
  )
}

export default Product

const styles = StyleSheet.create({
    wrapper:{
        padding:12, backgroundColor: '#F2F2F2', width: 212
    },
    imageProduct: {
        width:107, height:109, borderRadius: 8,
        
    },
    productName: {
        fontSize: 14,fontWeight: 'bold', marginTop:16,
    },
    productPrice: {
        fontSize: 12,fontWeight: 'bold', color:'#F2994A', marginTop:12,
    },
    location: {
        fontSize: 12,fontWeight: 'bold', marginTop:12
    },
    buttonWrapper: {
        backgroundColor: '#6FCF97', paddingVertical:6, borderRadius:25, marginTop:20
    },
    buttonText: {
        fontSize: 14,fontWeight: 'bold', color: 'white', textAlign: 'center'

    },
})