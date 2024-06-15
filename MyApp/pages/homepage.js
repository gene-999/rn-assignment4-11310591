import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import SearchBar from '../components/search_bar';
import Featured from '../components/featured_jobs';
import Popular from '../components/popular_jobs';

export default function Homepage({ route, navigation }) {
    const { username, email } = route.params;
  console.log(username, email);
    return (
      <>
      
        <View style={styles.upperContainer}>
          <Text style={styles.greeting}> {username} </Text>
          <Text style={styles.postGreeting}> {email} </Text>
          <Image style={styles.icon} source={require(".././images/human.png")} />
          <SearchBar/>
        <Featured/>
        <Popular/>
        </View >
      
 
      </>
    );
  }
  
  const styles = StyleSheet.create({
    upperContainer: {
      padding: 20,
      backgroundColor: '#fff',
      ...StyleSheet.absoluteFillObject,
      alignSelf: "flex-end",
      marginTop: 0,
      position: 'absolute',
      fontFamily:'Roboto',
      marginBottom: -20,
      marginTop: 20,
    },
  
    greeting: {
      fontSize: 28,
      color: '#0B0D25',
      fontWeight: 'bold',
      fontFamily: 'Roboto',
    },
    postGreeting:{
      fontSize: 16,
      color: 'gray',
      fontFamily: 'Roboto',
    },
    icon: {
        width: 50,
        height: 52,
        ...StyleSheet.absoluteFillObject,
        alignSelf: 'flex-end',
        marginTop: 30,
        marginLeft: 290,
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 30,
    },
  
  });
  