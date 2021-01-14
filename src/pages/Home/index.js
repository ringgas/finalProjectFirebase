import React, {useState, useEffect} from 'react'
import { StyleSheet, View, TouchableOpacity, FlatList} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import {Text, Button} from 'react-native-elements';

const Home = ({navigation}) => {
  const [data, setData] = useState();
  useEffect(() => {
    firestore()
      .collection('boards')
      .onSnapshot((snapshot) => {
        const listBoards = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(listBoards);
      });
  }, []);

  let deleteData = firestore().collection('boards');

  const deleteBoards = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('Boards successfully deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Laporan Harian</Text>
          <View style={styles.garis} />
        </View>
    
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <View style={styles.wrapper}>
              <View style={styles.product}>
                <View>
                  <Text>{item.Title}</Text>
                  <Text>{item.NumberBoard}</Text>
                  <Text>{item.Description}</Text>
                </View>
                <View>
                  
                </View>
              </View>
              <View style={styles.action}>
                <Button
                  title="Ubah"
                  type="outline"
                  onPress={() =>
                    navigation.navigate('EditBoards', {boards: item})
                  }
                />
                <Button
                  title="Hapus"
                  type="outline"
                  onPress={() => deleteBoards(item.id)}
                />
              </View>
            </View>
          );
        }}
      />

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
      marginTop: 15,
      marginBottom:10,
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
    product: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    action: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    wrapper: {
      borderWidth: 1,
      borderColor: '#2e2e2e',
      padding: 20,
      marginBottom:5,
      
    },
  });

export default Home