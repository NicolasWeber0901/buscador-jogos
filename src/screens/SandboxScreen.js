// SandboxScreen.js — nosso "laboratório" de componentes.

import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SandboxScreen() {
  // useState cria uma "variável de estado":
  // nome = valor atual | setNome = função que muda o valor.
  // Sempre que o estado muda, o React desenha a tela de novo.
  const [nome, setNome] = useState('');

  // Função chamada quando o botão é pressionado
  function handlePress() {
    alert('Olá, ' + (nome || 'mundo') + '!');
  }

  return (
    // View: caixa que agrupa outros componentes (parecida com a <div> da web)
    <View style={styles.container}>
      {/* Text: todo texto na tela precisa estar dentro de um <Text> */}
      <Text style={styles.titulo}>Olá, React Native!</Text>

      {/* TextInput: campo onde o usuário digita */}
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        placeholderTextColor="#888888"
        value={nome}
        onChangeText={setNome}
      />

      {/* TouchableOpacity: área clicável que fica transparente ao ser tocada */}
      <TouchableOpacity style={styles.botao} onPress={handlePress}>
        <Text style={styles.botaoTexto}>Clique aqui</Text>
      </TouchableOpacity>

      {/* 👇 Adicione novos componentes aqui durante a aula */}
    </View>
  );
}

// StyleSheet.create: onde ficam os estilos (parecido com o CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo o espaço disponível
    backgroundColor: '#121212',
    justifyContent: 'center', // centraliza no eixo vertical
    alignItems: 'center', // centraliza no eixo horizontal
    padding: 24,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#39FF14',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12, // bordas arredondadas
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 16,
  },
  botao: {
    width: '100%',
    backgroundColor: '#39FF14',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#000000', // texto preto para contrastar com o verde
    fontSize: 16,
    fontWeight: 'bold',
  },
});
