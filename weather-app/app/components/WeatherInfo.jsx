import { View, Text, StyleSheet } from 'react-native';

const WeatherInfo = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>City: {weather.name}</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Temperature: {weather.main.temp} °C</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Humidity: {weather.main.humidity} %</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Wind: {weather.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  city: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    color: 'white',
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginVertical: 6,
    width: 180,
  },
  infoText: {
    color: 'black',
    fontSize: 16,
  },
});

export default WeatherInfo;
