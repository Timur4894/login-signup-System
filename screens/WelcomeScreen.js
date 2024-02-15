import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../store/auth-context'; 
import { useContext } from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

function WelcomeScreen() {
  const [fechedMessage, setFechedMessage] = useState('')
  const authCtx = useContext(AuthContext)
  const token = authCtx.token

  useEffect(()=>{
    axios.get('https://react-native-course-45a99-default-rtdb.firebaseio.com/message.json?auth='+token).then(
      (response)=>{setFechedMessage(response.data)}
    )
  }, [token])

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{fechedMessage}</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
