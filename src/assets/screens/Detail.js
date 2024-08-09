import { FlatList, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'

const hourlyData = [
  { time: '15.00', temp: '29°C', icon: require('../images/Group.png') },
  { time: '16.00', temp: '26°C', icon: require('../images/Group.png') },
  { time: '17.00', temp: '24°C', icon: require('../images/Group679.png') },
  { time: '18.00', temp: '23°C', icon: require('../images/Group655.png') },
  { time: '19.00', temp: '22°C', icon: require('../images/Group655.png') },
];

const dailyData = [
  { day: 'Monday', temp: '21°C', icon: require('../images/thunder.png') },
  { day: 'Tuesday', temp: '22°C', icon: require('../images/Group679.png') },
  { day: 'Wednesday', temp: '34°C', icon: require('../images/sunny.png') },
  { day: 'Thursday', temp: '27°C', icon: require('../images/cloudy.png') },
  { day: 'Friday', temp: '32°C', icon: require('../images/Group.png') },
];



const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState('');


  const API_KEY= '549a08ab72e635336112e675eea6c991'
  const getWeather = async () =>{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Lahore&units=metric&appid=${API_KEY}`)
      const json=await response.json()
      console.log(json)
      setWeatherData(json)
      setLoading(false)
}

useEffect(()=>{
  getWeather()
},[])
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weatherData?.name}</Text>
      {/* <Text style={styles.temprature}>{weatherData?.list[0]?.main?.temp}</Text> */}
      <View style={styles.content}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>Today</Text>
        <Text style={styles.dayText}>Friday</Text>
        </View>
      <FlatList
          horizontal
          data={hourlyData}
          renderItem={ ({ item }) => (
            <View style={styles.hourlyItem}>
              <Text style={styles.hourlyTemp}>{weatherData?.temp}</Text>
              <Image source={item.icon} style={styles.hourlyIcon} />
              <Text style={styles.hourlyTime}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          style={styles.hourlyForecast}
        />
         <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <Text style={styles.title}>Next Forecast</Text>
        <TouchableOpacity style={{marginTop:20}}>
          <AntDesign name="calendar" size={30} color="#ffff"/>
        </TouchableOpacity>
        </View>
        <FlatList
          data={dailyData}
          renderItem={({ item }) => (
            <View style={styles.dailyItem}>
              <Text style={styles.dailyDay}>{item.day}</Text>
              <Image source={item.icon} style={styles.dailyIcon} />
              <Text style={styles.dailyTemp}>{item.temp}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={true}
          style={styles.dailyForecast}
        />
    </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  container:{
    flex: 1,
   backgroundColor:'#47BFDF',
   alignItems:'center'
  },
  city:{
    fontSize:30,
    marginTop:10,
    color:'#ffff'
  },
  temprature:{
    fontSize:20
  },
  content: {
    paddingHorizontal: 20,position:'absolute',marginTop:90
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginVertical: 15,
    fontWeight:'bold'
  },
  dayText: {
    color: '#fff',
    fontSize: 20,
    marginLeft:210,
    marginTop:20,
    fontWeight:'bold'
  },
  hourlyForecast: {
    flexDirection: 'row',
    marginLeft:20
  },
  hourlyItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  selectedItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 10,
  },
  hourlyTemp: {
    color: '#fff',
    fontSize: 20,
  },
  hourlyIcon: {
    width: 80,
    height: 40,
    marginVertical: 5,
  },
  hourlyTime: {
    color: '#fff',
    fontSize: 18,
  },
  dailyForecast: {
    marginTop: 20,
  },
  dailyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  dailyDay: {
    color: '#fff',
    fontSize: 20,
  },
  dailyIcon: {
    width:'30%',
    height: 50,
    marginTop:10
  },
  dailyTemp: {
    color: '#fff',
    fontSize: 20,
  },
 
})