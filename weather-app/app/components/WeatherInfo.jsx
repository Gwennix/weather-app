import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.city}>{weather.name}</Text>
      
      <View style={styles.infoBox}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/sun.png')} 
        />
        <Text style={styles.infoText}>
          {weather.main.temp}°C / {weather.main.humidity}% / {weather.wind.speed}m/s
        </Text>
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
    width: 280,
    flex: 1,
    flexDirection: 'row',
  },
  infoText: {
    color: 'black',
    fontSize: 16,
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default WeatherInfo;
