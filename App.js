import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableHighlight
} from "react-native";
import { MapView } from "expo";

export default class App extends React.Component {
  doIt = message => {
    alert(message);
  };

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ScrollView style={styles.container}>
          <Text style={styles.title}>Title {this.props.children}</Text>
          <Image style={styles.image} source={require("./assets/car.png")} />
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.doIt("Ahoj")}
          >
            <Text style={styles.buttonTitle}>CLICK ME</Text>
          </TouchableHighlight>
          <Text style={[styles.text, styles.longText]}>
            <Text style={styles.textHighlight}>Lorem ipsum </Text>
            dolor sit amet, consectetuer adipiscing elit. Etiam bibendum elit
            eget erat. Suspendisse nisl. Maecenas sollicitudin. Integer
            malesuada. Quis autem vel eum iure reprehenderit qui in ea voluptate
            velit esse quam nihil molestiae consequatur, vel illum qui dolorem
            eum fugiat quo voluptas nulla pariatur? Duis sapien nunc, commodo
            et, interdum suscipit, sollicitudin et, dolor. Integer in sapien.
            Morbi leo mi, nonummy eget tristique non, rhoncus non leo. Vivamus
            porttitor turpis ac leo. Fusce tellus. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus.
            Pellentesque ipsum. Etiam ligula pede, sagittis quis, interdum
            ultricies, scelerisque eu. Nulla pulvinar eleifend sem. Praesent
            vitae arcu tempor neque lacinia pretium. Duis bibendum, lectus ut
            viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim
            ipsum id lacus. Duis viverra diam non justo. Nullam sit amet magna
            in magna gravida vehicula. Proin in tellus sit amet nibh dignissim
            sagittis. Mauris dolor felis, sagittis at, luctus sed, aliquam non,
            tellus. Etiam commodo dui eget wisi. Nullam lectus justo, vulputate
            eget mollis sed, tempor sed magna. In sem justo, commodo ut,
            suscipit at, pharetra vitae, orci. Maecenas lorem. Duis viverra diam
            non justo. Cras elementum. Nulla non arcu lacinia neque faucibus
            fringilla. Mauris tincidunt sem sed arcu. Donec ipsum massa,
            ullamcorper in, auctor et, scelerisque sed, est. Nullam dapibus
            fermentum ipsum. Donec quis nibh at felis congue commodo.
            Pellentesque arcu. Integer tempor. Praesent in mauris eu tortor
            porttitor accumsan. Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia.
            Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Et
            harum quidem rerum facilis est et expedita distinctio. Ut enim ad
            minima veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur? Nullam
            feugiat, turpis at pulvinar vulputate, erat libero tristique tellus,
            nec bibendum odio risus sit amet ante. Cum sociis natoque penatibus
            et magnis dis parturient montes, nascetur ridiculus mus. Sed elit
            dui, pellentesque a, faucibus vel, interdum nec, diam. Aliquam erat
            volutpat. Etiam sapien elit, consequat eget, tristique non,
            venenatis quis, ante. Itaque earum rerum hic tenetur a sapiente
            delectus, ut aut reiciendis voluptatibus maiores alias consequatur
            aut perferendis doloribus asperiores repellat. Nulla non lectus sed
            nisl molestie malesuada. Aliquam erat volutpat. Nulla est. Maecenas
            aliquet accumsan leo. Etiam quis quam. Morbi imperdiet, mauris ac
            auctor dictum, nisl ligula egestas nulla, et sollicitudin sem purus
            in lacus. Pellentesque sapien. Donec quis nibh at felis congue
            commodo. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu,
            orci. Aenean fermentum risus id tortor. Aliquam erat volutpat. Duis
            sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor.
            Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Aenean
            placerat. Mauris tincidunt sem sed arcu. Nullam eget nisl. Donec
            quis nibh at felis congue commodo. Nulla pulvinar eleifend sem.
            Integer in sapien. Cras elementum. Maecenas libero. Ut tempus purus
            at lorem. Curabitur bibendum justo non orci. Mauris tincidunt sem
            sed arcu. Morbi imperdiet, mauris ac auctor dictum, nisl ligula
            egestas nulla, et sollicitudin sem purus in lacus. Vivamus luctus
            egestas leo. Duis condimentum augue id magna semper rutrum. Etiam
            dui sem, fermentum vitae, sagittis id, malesuada in, quam. Aenean id
            metus id velit ullamcorper pulvinar. Fusce nibh. Vivamus ac leo
            pretium faucibus. Phasellus enim erat, vestibulum vel, aliquam a,
            posuere eu, velit. Mauris suscipit, ligula sit amet pharetra semper,
            nibh ante cursus purus, vel sagittis velit mauris vel metus. Vivamus
            ac leo pretium faucibus. In laoreet, magna id viverra tincidunt, sem
            odio bibendum justo, vel imperdiet sapien wisi sed libero.
          </Text>
        </ScrollView>
      </SafeAreaView>

      // <MapView
      //  style={{ flex: 1 }}
      //  initialRegion={{
      //    latitude: 50.1033854,
      //    longitude: 14.448369,
      //    latitudeDelta: 0.0922,
      //    longitudeDelta: 0.0421,
      //  }}
      //  >
      //   <MapView.Marker coordinate={{
      //     latitude: 50.1033854,
      //     longitude: 14.448369,
      //   }} />
      //  </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  safearea: {
    flex: 1,
    backgroundColor: "#202020"
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#fff",
    paddingBottom: 20
  },
  text: {
    color: "#fff"
  },
  textHighlight: {
    color: "#e74c3c"
  },
  image: {
    padding: 20,
    marginBottom: 20
  },
  button: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#2ecc71"
  },
  buttonTitle: {
    fontWeight: "bold",
    color: "#fff"
  },
  longText: {
    marginTop: 20,
    marginBottom: 40
  }
});
