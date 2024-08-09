import { ImageBackground,FlatList, StyleSheet, Text, View,Image,Modal,TouchableOpacity,ActivityIndicator, TextInput, Button } from 'react-native'
import React,{useState,useEffect} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
const HomeScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState('');
    const [submittedCity, setSubmittedCity] = useState('');


    const API_KEY= '549a08ab72e635336112e675eea6c991'
    const getCurrentWeather = async () =>{
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`)
        const json=await response.json()
        console.log(json)
        setWeatherData(json)
        setLoading(false)
}

useEffect(()=>{
    getCurrentWeather()
},[city])

const handleSubmit = () => {
  setSubmittedCity(city);
};
 return (
    <View style={styles.container}>
       <Modal
                transparent={true}
                visible={modalVisible}
                
            ></Modal>
        <View style={{flexDirection:'row'}}>
       <View style={styles.input}>
        <TextInput
        style={styles.inputText}
        placeholder='Search city'
        value={city}
        onChangeText={(text)=>setCity(text)}
        />
       </View>
     
    <TouchableOpacity style={{marginTop:10, backgroundColor: '#F0EEEE', height: 50,width:'20%', borderRadius: 5}} onPress={handleSubmit}>
       <Feather name='search' size={30} color='black' style={styles.iconStyle}/>
       </TouchableOpacity>
      </View>
         <View style={{alignItems:'center'}}>
          <Image
          source={require('../images/Group12.png')}
          style={{width:'70%'}}
          />
           </View>
          {loading ? (
        <ActivityIndicator />
      ) :  weatherData ? (
          <View style={styles.weatherInfoContainer}>
          <Text style={styles.city}>{weatherData?.name}</Text>
          <Text style={styles.temperature}>{weatherData?.main?.temp}</Text>
          <Text style={styles.description}>{weatherData?.weather[0]?.description}</Text>
         
          


          <View style={styles.detailItem}>
            <TouchableOpacity style={styles.windIcon}>
              <FontAwesome5 name='wind' size={30} color='#fff'/>
              </TouchableOpacity>
            <Text style={styles.detailText}>{weatherData?.wind?.speed}km/h</Text>
             </View>
          <View style={styles.detailItem}>
            <TouchableOpacity style={styles.icon}>
              <MaterialIcons name='water-drop' size={30} color='#fff'/>
             </TouchableOpacity>
            <Text style={styles.detailText}>{weatherData?.main?.humidity}%</Text>
            </View>
            
            
        </View>
       ) : (
          <Text>No data available</Text>
      )}
      
        
        <TouchableOpacity style={styles.button}  >
          <Text style={styles.buttonText}>Forecast report</Text>
        </TouchableOpacity>
       </View>
       
      
        )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#47BFDF'
    },
    input:{
        width:'60%',
        backgroundColor: '#F0EEEE', height: 50, borderRadius: 5, marginHorizontal: 15, flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    inputText:{
fontSize:25
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems:'flex-end',
        position:'static'
    },
    weatherInfoContainer: {
        alignItems: 'center', backgroundColor: '#BFBFBF', borderRadius: 20, padding: 20, width:'85%',height:335, margin:35, shadowColor: '#000', shadowOffset: { width: 0, height: 10 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 10,
      },
      city: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
      },
      temperature: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#fff',
    },
    description: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'capitalize',
    },
      date: {
        fontSize: 18,fontWeight:'bold',color: '#fff',
      },
      temperature: {
        fontSize: 70,fontWeight:'bold', color:'#fff'
      },
      weather: {
        fontSize: 26, color: '#fff',
      },
      detailItem: {
        flexDirection: 'row', alignItems:'center', width: '100%', marginTop: 20, justifyContent:'center', marginRight:10
      },
      detailText: {
        fontSize: 30, fontWeight:'bold', color: '#fff',
      },
     windIcon: {
        marginRight: 20,
     },
      button: {
        backgroundColor: 'orange', padding: 20, borderRadius: 30, marginBottom: 30, width:'60%', alignItems:'center', marginLeft:75, borderColor:'#fff'
      },
      buttonText: {
        fontSize: 22, fontWeight:'bold', color: '#fff',
      },
     
})