import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import WeatherInfo from './components/WeatherInfo';

export default function Index() {
  const [city, setCity] = useState('amsterdam');
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState('');
  const apiKey = '2c06c3039cd739428bfc3f9f1ae77a58';

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = (cityName) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        setCity(cityName);
      })
      .catch((error) => console.error(error));
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      fetchWeather(query.trim());
      setQuery('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter city"
          value={query}
          onChangeText={setQuery}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {weather && <WeatherInfo weather={weather} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 40,
    marginRight: 10,
    backgroundColor: 'white',
  },
});


