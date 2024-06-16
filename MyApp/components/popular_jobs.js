import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";

export default function Popular() {
  return (
    <View
      style={{ backgroundColor: "#FAFAFD", borderWidth: 0, borderRadius: 15 }}
    >
      <View style={styles.parentContainer}>
        <Text style={styles.normalText}>Popular Jobs</Text>
        <Text style={styles.smallText}>See all</Text>
      </View>

      <FlatList
        style={{ display: "flex" }}
        data={jobs}
        keyExtractor={(item) => item._id}
        extraData={jobs}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              marginLeft: 0,
              backgroundColor: "white",
              height: 90,
              width: 300,
              padding: 30,
              marginLeft: 10,
              marginBottom: 10,
              borderRadius: 25,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 50,
                borderRadius: 14,
                backgroundColor: "white",
                marginTop: -16,
                marginLeft: -24,
              }}
            />

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 15,
                marginLeft: 10,
                marginTop: 5,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginTop: -15,
                  gap: 5,
                }}
              >
                <Text style={styles.cardHeaderText}>{item.title}</Text>
                <Text style={styles.bottomText}>{item.company}</Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginTop: -15,
                  marginLeft: 0,
                  alignItems: "",
                }}
              >
                <Text style={styles.cardSmallText}>{item.salary}</Text>
                <Text style={styles.bottomText}>{item.location}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const jobs = [
  {
    id: 1,
    title: "Jr Executive",
    salary: "$80,000/y",
    company: "Burger King ",
    location: "Seattle, WA",
    image: require(".././images/burger-king-41.png"),
  },
  {
    id: 2,
    title: "Product Manager",
    salary: "$120,000/y",
    company: "Beats Inc.",
    location: "Paris, FR",
    image: require(".././images/beats_logo.png"),
  },
  {
    id: 3,
    title: "System Admin",
    salary: "$140,000/y",
    company: "Facebook",
    location: "San Jose, CA",
    image: require(".././images/facebook_logo.png"),
  },
  {
    id: 4,
    title: "Sales Manager",
    salary: "$125,000/y",
    company: "Apple",
    location: "Chicago, IL",
    image: require(".././images/apple_logo.png"),
  },
  {
    id: 5,
    title: "Project Manager",
    salary: "$130,000/y",
    company: "Google",
    location: "Boston, MA",
    image: require(".././images/google_logo.png"),
  },
  {
    id: 6,
    title: "Cloud Solutions Architect",
    salary: "$160,000/y",
    company: "Microsoft",
    location: "Austin, TX",
    image: require(".././images/microsoft_logo.png"),
  },
  {
    id: 7,
    title: "Mobile App Developer",
    salary: "$150,000",
    company: "Uber",
    location: "San Francisco, CA",
    image: require(".././images/scaleai_logo.png"),
  },
  {
    id: 8,
    title: "Customer Service Representative",
    salary: "$60,000",
    company: "American Express",
    location: "Phoenix, AZ",
    image: require(".././images/openai_logo.png"),
  },
];

const styles = StyleSheet.create({
  parentContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  normalText: {
    fontSize: 18,
    color: "#0B0D25",
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  smallText: {
    fontSize: 16,
    color: "gray",
    fontFamily: "Roboto",
  },
  cardHeaderText: {
    fontSize: 15,
    fontWeight: "800",
    color: "black",
    fontFamily: "Roboto",
    marginTop: 0,
    marginRight: 10,
  },
  cardSmallText: {
    fontSize: 16,
    color: "black",
    fontFamily: "Roboto",
    marginRight: -10,
  },
  bottomTextContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    marginTop: 10,
  },
  bottomText: {
    color: "#9C9CA6",
    fontFamily: "Roboto",
  },
});
