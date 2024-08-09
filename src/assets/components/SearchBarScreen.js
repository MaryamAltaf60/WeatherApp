import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'

const SearchBarScreen = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
         <Feather name='search' size={30} color='black' style={styles.iconStyle}/>
            <TextInput 
               autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search City"
                style={styles.input}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                />
        </View>
  )
}

export default SearchBarScreen

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
},
input: {
    flex: 1,
    fontSize: 18,
},
iconStyle:{
  alignSelf: 'center',
  marginHorizontal: 15,
}
})