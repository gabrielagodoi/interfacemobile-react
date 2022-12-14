import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recommended from '../components/Recommended';

export default function Home() {
 const navigation = useNavigation();

 return (
   <ScrollView 
   showsVerticalScrollIndicator={false}
   style={{backgroundColor: '#FFF' }}
  >
    
    <View style={styles.header}>
      <View style={styles.inputArea}>
        <Feather name="search" size={24} color="black" />
        <TextInput
        placeholder="O que está procurando?"
        style={styles.input}
        />
      </View>
    </View>

    <View style={styles.contentNew}>
      <Text style={styles.title}>Novidades</Text>
    </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15, }}>
      <New
       cover={require('../assets/viagem2.jpg')} 
       name="Capitólio - MG"
       description="Capitólio é uma das cidades banhadas pelo Lago de Furnas em Minas Gerais, um dos maiores lagos artificiais do mundo inteiro."
       onPress={() => navigation.navigate('detail') }
      />

      <New
       cover={require('../assets/viagem5.jpg')} 
       name="Jericoacoara - Ceará"
       description="Para os amantes da natureza, Jeri é um prato cheio."
       onPress={() => {}}
      />

      <New
       cover={require('../assets/viagem6.jpg')} 
       name="Lençois Maranhenses - Maranhão"
       description="Os Lençóis Maranhenses são tão belos que mais parecem uma miragem"
       onPress={() => {}}
      />

    </ScrollView>

    <View style={{ flexDirection: 'row', marginBottom:10, alignItems: 'center' }}>
      <Text style={[styles.title, { marginTop: 20 } ]}>Próximo de você</Text>
    </View>  

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingHorizontal: 15 }}>
      <House
      cover={require('../assets/house4.jpg')}
      />
      <House
      cover={require('../assets/house5.jpg')}
      />
      <House
      cover={require('../assets/house6.jpg')}
      />
    </ScrollView>

    <Text style={[styles.title, { marginTop: 20 } ]}>
      Dica do dia
    </Text>

    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15 }}>
      <Recommended
        cover={require('../assets/viagem1.jpg')}
        house="Pacote Rio de Janeiro"
        offer="25%"
      />
      <Recommended
        cover={require('../assets/viagem3.jpg')}
        house="Pacote Capital São Paulo"
        offer="15%"
      />
      <Recommended
        cover={require('../assets/viagem4.jpg')}
        house="Pacote Porto de Galinhas"
        offer="10%"
      />
    </ScrollView>
   
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
   paddingHorizontal: 15,
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   width: '100%',
   marginVertical: 20, 
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '98%',
    backgroundColor:  '#FFF',
    elevation: 2,
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%'
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center'
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a'
  }
});