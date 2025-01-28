import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios';


const Item = () => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri:'https://thumbs.dreamstime.com/z/cafe-w-234643268.jpg'}} style={styles.avatar}/>
            <View style={styles.decs}>
                <Text style={styles.decsName}>Nama Lengkap</Text>
                <Text style={styles.decsEmail}>Email</Text>
                <Text style={styles.decsBidang}>Bidang</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}
const LocalAPI = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [bidang, setBidang] = useState("");

    const submit = () => {
        const data = {
            name, 
            email, 
            bidang,
        }
        console.log('data before send: ', data);
        axios.post('http://localhost:3000/users', data)
        .then(res => {
            console.log('res: ', res);
            setName("");
            setEmail("");
            setBidang("");
        })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Local API (JSON Server)</Text>
            <Text>Masukan Anggota Teh Kita</Text>
            <TextInput placeholder="Nama Lengkap" style={styles.input} value={name} onChangeText={(value) => setName(value)} />
            <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={(value) => setEmail(value)} />
            <TextInput placeholder="Bidang" style={styles.input} value={bidang} onChangeText={(value) => setBidang(value)} />
            <Button title="Simpan" onPress={submit} />
            <View style={styles.line} />
            <Item />
            <Item />
            <Item />
        </View>
    )
}

export default LocalAPI

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center', marginBottom: 20},
    line: {height: 2, backgroundColor: 'black', marginVertical: 20},
    input: {borderWidth: 1, marginBottom: 12, borderRadius: 25, paddingHorizontal: 18},
    avatar: {width: 80, height: 80, borderRadius: 80},
    itemContainer: {flexDirection: 'row', marginBottom: 20},
    decs: {marginLeft: 18, flex: 1},
    decsName: {fontSize: 20, fontWeight: 'bold'},
    decsEmail: {fontSize: 16},
    decsBidang: {fontSize: 12, marginTop: 8},
    delete: {fontSize: 20, fontWeight: "bold", color: 'red'}
    }
)