import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { formHead, formHead3 } from '../../CommonCss/formcss';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Settings1 = ({navigation}) => {
  const logout=()=>{
    AsyncStorage.removeItem('user').then(()=>{
      navigation.navigate('Login')
    })
  }
  return (
    <View style={styles.container}>
     <Ionicons
        name="chevron-back-circle"
        size={24}
        color="white"
        style={styles.gohomeicon}
        onPress={() => navigation.navigate('My_UserProfile')}
      />
      <Text style={formHead}>Settings1</Text>

      <Text style={styles.txt1}
       onPress={
        ()=>navigation.navigate('EditProfile')
      }
      >Edit Profile</Text>
      <Text style={styles.txt1}
      onPress={
        ()=>navigation.navigate('ChangePassword')
      }
      >Change Password</Text>
      <Text style={styles.txt1}>Customer Support</Text>
      <Text style={styles.txt1} onPress={
        ()=>logout()
      }>Logout</Text>
    </View>
  )
}

export default Settings1

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'black'
    },
    txt1:{
       marginTop:20,
       color:'white',
       fontSize:20,
       borderBottomColor:'gray',
       borderBottomWidth:1

    }
})