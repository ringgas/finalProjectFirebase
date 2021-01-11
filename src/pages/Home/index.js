import React from 'react'
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>LIST BOARD</Text>
          <View style={styles.garis} />
        </View>

        <View style={styles.wrapperButton}>
          <TouchableOpacity
            style={styles.btnTambah}
            onPress={() => navigation.navigate('AddBoard')}>
            <FontAwesomeIcon icon={faPlus} size={20} color={'white'} />
          </TouchableOpacity>
        </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      paddingHorizontal: 30,
      paddingTop: 30,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    garis: {
      borderWidth: 1,
      marginTop: 10,
    },
    listKontak: {
      paddingHorizontal: 30,
      marginTop: 20,
    },
    wrapperButton: {
      flex: 1,
      position: 'absolute',
      bottom: 0,
      right: 0,
      margin: 30,
    },
    btnTambah: {
      padding: 20,
      backgroundColor: '#4c1036',
      borderRadius: 30,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
  
      elevation: 5,
    },
  });

export default Home