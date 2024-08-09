import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const WeatherScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../images/cloudy1.png')} style={styles.weatherIcon} />
      <Text style={styles.title}>Weather App</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Start</Text>
      </TouchableOpacity>
    </View>
   
  )
}

export default WeatherScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#47BFDF',
        justifyContent: 'center',
        alignItems: 'center',
      },
      weatherIcon: {
        width: 150,
        height: 150,
        marginBottom: 30,
      },
      title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Cursive', // Customize font family as needed
        marginBottom: 10,
      },
      subtitle: {
        fontSize: 20,
        color: '#fff',
        marginBottom: 40,
      },
      button: {
        backgroundColor: '#5a5df8',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 20,
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
      },
      createAccount: {
        fontSize: 14,
        color: '#000',
      },
})