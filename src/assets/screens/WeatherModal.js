import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'

const forecastData = [
    { time: '12 AM', temp: 19, icon: 'rainy', chance: '30%' },
    { time: 'Now', temp: 19, icon: 'rainy' },
    { time: '2 AM', temp: 18, icon: 'cloudy-night' },
    { time: '3 AM', temp: 19, icon: 'rainy' },
    { time: '4 AM', temp: 19, icon: 'rainy' },
  ];


const WeatherModal = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Text style={styles.tabTextActive}>Hourly Forecast</Text>
        <Text style={styles.tabText}>Weekly Forecast</Text>
      </View>
      <ScrollView horizontal={true} contentContainerStyle={styles.forecastContainer}>
        {forecastData.map((item, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text style={styles.timeText}>{item.time}</Text>
             <Text style={styles.tempText}>{item.temp}°</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default WeatherModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#322f56',
        paddingTop: 20,
      },
      tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 10,
      },
      tabText: {
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: 16,
      },
      tabTextActive: {
        color: '#fff',
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
      },
      forecastContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
      },
      forecastItem: {
        alignItems: 'center',
        paddingHorizontal: 10,
      },
      timeText: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 5,
      },
      chanceText: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
      },
      tempText: {
        color: '#fff',
        fontSize: 18,
        marginTop: 5,
      },
})