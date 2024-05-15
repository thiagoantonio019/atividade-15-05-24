import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';


import api from './src/services/api'


export default function App() {
  const [dados, setDados] = useState(null);

  const selecionarArquivo = async () => {
    try {
      const resultado = await DocumentPicker.getDocumentAsync();
      if (resultado.canceled) {
        console.log('Busca de arquivo cancelada!');
        setDados(null);
        return;
      }

      const { assets: [{ mimeType, uri }] } = resultado;

      if (mimeType !== 'application/json') {
        Alert.alert('O arquivo selecionado não é do tipo JSON');
        setDados(null);
        return;
      }
      const conteudo = await FileSystem.readAsStringAsync(uri);
      const dadosJSON = JSON.parse(conteudo);
      setDados(dadosJSON);

      // Chama a função para enviar os dados para a API
      enviarDadosParaAPI(dadosJSON);
    } catch (error) {
      console.error('Erro ao selecionar o arquivo:', error);
    }
  };


  const enviarDadosParaAPI = async () => {
    dados.forEach(async data => {
      try {
        await api.post('/Pessoa/novo', data)
        .then(response =>{
          console.log(response.data)
        }).catch(error=>{
          console.log(error)
        })
      } catch (erro) {
        console.log(erro);
      }
    });
  };


  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerWidth}>
          <View style={styles.header}>
            <Text style={styles.title}>Leitura de arquivo JSON com React Native</Text>
          </View>

          <TouchableOpacity style={styles.button} onPress={selecionarArquivo}>
            <Text style={styles.buttonText}>Selecionar Arquivo</Text>
          </TouchableOpacity>

          {dados ? (
            <View>
              <Text>JSON File Data:</Text>
              <Text>{JSON.stringify(dados)}</Text>

              {/* {['nome', 'data_nasc', 'cpf', 'sexo', 'estado_civil', 'email', 'telefone'].map((field) => (
                <View key={field}>
                  <Text style={styles.label}>{field}:</Text>
                  <TextInput style={styles.input} value={dados[field]} />
                </View>
              ))} */}

              <TouchableOpacity style={styles.button} onPress={enviarDadosParaAPI}>
                <Text style={styles.buttonText}>Enviar Dados para API</Text>
              </TouchableOpacity>

            </View>
          ) : (
            <Text>Nenhum arquivo selecionado</Text>
          )}
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    width: '100%',
  },
  containerWidth: {
    alignItems: 'center',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    fontWeight: '600',
    color: '#4054F7',
    borderWidth: 1,
    borderColor: '#4D95F7',
    borderRadius: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4096F7',
  },
  button: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: 45,
    backgroundColor: "#4096F7",
    borderRadius: 8,
    elevation: 5,
    padding: 10,
    marginTop: 25,
    marginBottom: 25
  },
  buttonText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  }
});
