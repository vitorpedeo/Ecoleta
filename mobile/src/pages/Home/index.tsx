import React, { useState, useEffect } from 'react';
import {
  View,
  ImageBackground,
  Image,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  Platform,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather as Icon } from '@expo/vector-icons';
import axios from 'axios';
import Select from 'react-native-picker-select';

interface UF {
  key: number;
  label: string;
  value: string;
}

interface City {
  key: number;
  label: string;
  value: string;
}

interface IBGEUFResponse {
  id: number;
  sigla: string;
}

interface IBGECityResponse {
  id: number;
  nome: string;
}

const Home = () => {
  const [selectedUf, setSelectedUf] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [ufs, setUfs] = useState<UF[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const navigation = useNavigation();

  // Carregamento das UFs
  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome'
      )
      .then((response) => {
        const ufs = response.data.map((uf) => {
          return { key: uf.id, label: uf.sigla, value: uf.sigla };
        });
        setUfs(ufs);
      })
      .catch((err) => console.log(err));
  }, []);

  // Carregamento dos municípios
  useEffect(() => {
    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios?orderBy=nome`
      )
      .then((response) => {
        const cities = response.data.map((city) => {
          return { key: city.id, label: city.nome, value: city.nome };
        });
        setCities(cities);
      })
      .catch((err) => console.log(err));
  }, [selectedUf]);

  const handleNavigateToPointsPage = () => {
    navigation.navigate('Points', {
      selectedUf,
      selectedCity,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ImageBackground
        source={require('../../assets/home-background.png')}
        style={styles.container}
        imageStyle={{ width: 274, height: 368 }}
      >
        <View style={styles.main}>
          <Image source={require('../../assets/logo.png')} />
          <View>
            <Text style={styles.title}>
              Seu marketplace de coleta de resíduos
            </Text>
            <Text style={styles.description}>
              Ajudamos pessoas a encontrarem pontos de coleta de froma
              eficiente.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Select
            useNativeAndroidPickerStyle={false}
            style={pickerStyle}
            placeholder={{ label: 'Selecione seu estado', value: null }}
            value={selectedUf}
            onValueChange={(value) => setSelectedUf(value)}
            items={ufs}
          />

          <Select
            useNativeAndroidPickerStyle={false}
            style={pickerStyle}
            placeholder={{ label: 'Selecione sua cidade', value: null }}
            value={selectedCity}
            onValueChange={(value) => setSelectedCity(value)}
            items={cities}
          />

          <RectButton
            style={styles.button}
            onPress={handleNavigateToPointsPage}
          >
            <View style={styles.buttonIcon}>
              <Text>
                <Icon name='arrow-right' color='#fff' size={24} />
              </Text>
            </View>
            <Text style={styles.buttonText}>Entrar</Text>
          </RectButton>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const pickerStyle = {
  inputAndroid: {
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 8,
    paddingLeft: 20,
    fontSize: 16,
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    fontFamily: 'Ubuntu_700Bold',
    maxWidth: 260,
    marginTop: 64,
  },

  description: {
    color: '#6C6C80',
    fontSize: 16,
    marginTop: 16,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 260,
    lineHeight: 24,
  },

  footer: {},

  button: {
    backgroundColor: '#34CB79',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonIcon: {
    height: 60,
    width: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },
});

export default Home;
