import React, {useState} from 'react';
import {StyleSheet,  TouchableOpacity, Text, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import firestore from '@react-native-firebase/firestore';
import {Input} from 'react-native-elements';


const AddBoard = ({navigation, route}) => {
  const [Title, setTitle] = useState();
  const [NumberBoard, setNumberBoard] = useState();
  const [Description, setDescription] = useState();

  const onChangeTitle = (Title) => {
    setTitle(Title);
  };

  const onChangeNumberBoard = (NumberBoard) => {
    setNumberBoard(NumberBoard);
  };

  const onChangeDescription = (Description) => {
    setDescription(Description);
  };

  const handleUpdateBoards = () => {
    let db = firestore().collection('boards');

    db.doc(route.params.boards.id)
      .update({
        Title: Title,
        NumberBoard: NumberBoard,
        Description: Description,
      })
      .then(function (docRef) {
        alert('Boards successfully updated');
        navigation.navigate('Home');
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    
    <SafeAreaView style={styles.container}>

    <Text style={styles.label}>Title :</Text>
    <Input
      style={styles.textInput}
      placeholder={route.params.boards.Title}
      onChangeText={(Title) => onChangeTitle(Title)}
    
    />

    <Text style={styles.label}>Number Board :</Text>
    <Input
      style={styles.textInput}
      placeholder={route.params.boards.NumberBoard}
      keyboardType="number-pad"
      onChangeText={(NumberBoard) => onChangeNumberBoard(NumberBoard)}
   
    />

    <Text style={styles.label}>Description :</Text>
    <Input
      style={styles.textInputArea}
      placeholder={route.params.boards.Description}
      isTextArea={true}
      onChangeText={(Description) => onChangeDescription(Description)}
   
    />

    <TouchableOpacity style={styles.tombol} onPress={handleUpdateBoards}>
      <Text style={styles.textTombol}>UPDATE</Text>
    </TouchableOpacity>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 30,
    },
    tombol: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    textTombol: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 5,
    },
    textInput: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    textInputArea: {
      textAlignVertical: 'top',
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
  });

export default AddBoard
