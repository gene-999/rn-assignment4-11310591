import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Login() {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigator = useNavigation();

  function handleLogin(){
    if(username && email){
      alert(`Welcome ${username}!`);
      console.log(username, email);
      navigator.navigate('Homepage', {username, email});
    }
    else{
      alert('Please fill in all fields');
    }
  }

    return (
      <View style={styles.container}>
  
        <View style={styles.upperContainer}>
          <Text style={styles.title}> Jobizz </Text>
          <Text style={styles.greeting}> Welcome Back 👋</Text>
          <Text style={styles.postGreeting}> Let's log in. Apply to jobs! </Text>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} autoFocus={true} cursorColor={'#D8D8D8'} placeholder='Name' placeholderTextColor={"#D8D8D8"} underlineColor='transparent' onChangeText={setName} />
          <TextInput style={styles.textInput} autoFocus={true} cursorColor={'#D8D8D8'} placeholder='Email' placeholderTextColor={"#D8D8D8"}  onChangeText={setEmail}/>
        </View> 
  
        <View >
        <TouchableOpacity style={styles.button} onPress={ handleLogin} ><Text style={{color:"white", fontWeight:"bold", fontSize:20, textAlign:"center"}}>Log in</Text></TouchableOpacity>
        </View> 
  
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 1, height: 1, backgroundColor: '#D8D8D8'}} />
      <View>
        <Text style={{width: 130, textAlign: 'center', color:"#D8D8D8"}}>Or continue with</Text>
      </View>
      <View style={{flex: 1, height: 1, backgroundColor: '#D8D8D8'}} />
     </View>
     <View style={styles.logos}>
          <Image style={styles.logo} source={require('.././images/apple_logo.png')} />
          <Image style={styles.logo} source={require('.././images/google_logo.png')} />
          <Image style={styles.logo} source={require('.././images/facebook_logo.png')} />
        </View>
        <View style={styles.logos}>
        <Text style={{ textAlign: 'center', color:"#D8D8D8"}}>Haven't an account? <Text style={{ textAlign: 'center', color:'#4267B2'}}> Register</Text></Text>
          </View>
     </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    upperContainer: {
      padding: 20,
      //paddingEnd: 20,
      backgroundColor: '#fff',
      ...StyleSheet.absoluteFillObject,
      alignSelf: "flex-end",
      marginTop: 35,
      position: 'absolute',
      fontFamily:'Roboto',
      marginBottom: -20,
      marginTop: 50,
    },
    title :{
      fontSize: 24,
      fontWeight: 'bold',
     color: '#4267B2',
      marginBottom: 10,
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
    textInputContainer: {
      width: 325,
      height: 60,
      backgroundColor: 'white',
      borderRadius: 18,
      marginTop: 10,
      padding: 10,
      marginBottom: 110,
      marginLeft: -5,
    },
    textInput: {
      height: 55,
      borderColor: '#D8D8D8',
      borderWidth: 1,
      marginTop: 20,
      fontFamily: 'Roboto',
      backgroundColor: 'white',
      padding: 18,
      borderRadius: 12,
      fontSize: 18,
      marginBottom: 1,
      width: 325,
    },
    button: {
      width: 325,
      height: 55,
      backgroundColor: '#4267B2',
      borderRadius: 5,
      marginTop: 30,
      padding: 15,
      marginBottom: 50,
      marginLeft: 0,
      color: 'white',
    },
    logo: {
      width: 35,
      height: 35,
      borderRadius: 50,
      marginTop: 30,
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: 'white',
      
    },
    logos: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 30,
      padding: 10,
    },
  
  });
  