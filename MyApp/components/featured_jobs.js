import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, FlatList } from 'react-native';

export default function Featured(){
    return(
        <View>
            <View style={styles.parentContainer}>
            <Text style={styles.normalText}>Featured Jobs</Text>
            <Text style={styles.smallText}>See all</Text>
            </View>
        
        <FlatList horizontal data={jobs}
        renderItem={({item}) => (
            <View style={{display: 'flex', flexDirection: 'row', gap: 10, marginLeft: 0, backgroundColor:item.color, height:190, width:270, padding:30, margin:15, borderRadius:15}}>
                <Image source={item.logo} style={{width: 55, height: 55, borderRadius: 14, backgroundColor:"white", marginLeft:-18, marginRight: 10,}} />
                <View>
                    <Text style={styles.cardHeaderText}>{item.role}</Text>
                    <Text style={styles.cardSmallText}>{item.company}</Text>
                    <View style={styles.bottomTextContainer}>
                    <Text style={styles.bottomText}>{item.salary}</Text>
                    <Text style={styles.bottomText}>{item.location}</Text>
                    </View>
                </View>
            </View>
        )}
        />
        </View>
    )
}


const jobs = [
    {
    role: "Software Engineer",
    company: "Facebook",
    salary: "$180,000",
    location: "Accra, Ghana",
    logo: require(".././images/facebook_logo.png"),
    color : '#5386E4'
},
{
    role: "Software Engineer",
    company: "Google",
    salary: "$160,000",
    location: "New York City",
    logo: require(".././images/google_logo.png"),
    color: "#04284A"
},
{
    role: "Software Engineer",
    company: "Microsoft",
    salary: "$120,000",
    location: "Seattle, USA",
    logo: require(".././images/microsoft_logo.png"),
    color: "lightgreen"
},
{
    role: "Product Manager",
    company: "Facebook",
    salary: "$200,000",
    location: "Kumasi, Ghana",
    logo: require(".././images/facebook_logo.png"),
    color: "#5386E4"
},
{
    role: "iOS Developer",
    company: "Apple",
    salary: "$150,000",
    location: "San Francisco, USA",
    logo: require(".././images/apple_logo.png"),
    color: "#507E8F"
},
{
    role: "UI/UX Developer",
    company: "Google",
    salary: "$120,000",
    location: "Accra, Ghana",
    logo: require(".././images/google_logo.png"),
    color: "#04284A"
},
{
    role: "ML Engineer",
    company: "OpenAI",
    salary: "$300,000",
    location: "New York City",
    logo: require(".././images/openai_logo.png"),
    color: "green"
},
{
    role: "Software Engineer",
    company: "ScaleAI",
    salary: "$150,000",
    location: "Accra, Ghana",
    logo: require(".././images/scaleai_logo.png"),
    color: "purple"
}


]
const styles = StyleSheet.create({
    parentContainer: {
        width: '100%',
        marginTop: 25,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15,
        alignItems: 'center',
    },
    smallText :{
            fontSize: 16,
            color: 'gray',
            fontFamily: 'Roboto',
    },
    normalText :{
        fontSize: 18,
        color: '#0B0D25',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
      },
    cardHeaderText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    cardSmallText: {
        fontSize: 16,
        color: '#CCDCF7',
        fontFamily: 'Roboto',
    },
    bottomTextContainer :{
        fontSize: 16,
        color: '#0B0D25',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        width: '100%',
        marginTop: 75,
        marginLeft: -70,
        gap: 65,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    bottomText :{
        fontSize: 16,
        fontWeight: '650',
        fontFamily: 'Roboto',
        color: 'white',
    },
    
})