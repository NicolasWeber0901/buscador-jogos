// BuscadorScreen.js — o aplicativo "de verdade".
// O usuário digita o nome de um jogo e mostramos um card com dados da API RAWG.

import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Keyboard,
  StyleSheet,
} from 'react-native';

// Chave da API RAWG (dá para criar uma grátis em https://rawg.io/apidocs)
const API_KEY = '5151ae2cbd9a47b19ebee883f46c34f2';

export default function BuscadorScreen() {
  // Estados da tela:
  const [query, setQuery] = useState(''); // texto digitado na busca
  const [game, setGame] = useState(null); // jogo encontrado (null = nenhum)
  const [loading, setLoading] = useState(false); // true enquanto espera a API

  // async: a função pode "esperar" (await) a internet sem travar o app
  async function buscarJogo() {
    // Não busca se o campo estiver vazio
    if (query.trim() === '') {
      alert('Digite o nome de um jogo!');
      return;
    }

    Keyboard.dismiss(); // fecha o teclado
    setLoading(true); // liga o "carregando"

    try {
      // encodeURIComponent deixa espaços e acentos num formato válido para URL
      const url = `https://api.rawg.io/api/games?search=${encodeURIComponent(query)}&key=${API_KEY}`;

      const resposta = await fetch(url); // faz a requisição
      const dados = await resposta.json(); // converte a resposta em objeto

      // results é uma lista de jogos: pegamos só o primeiro
      if (dados.results && dados.results.length > 0) {
        setGame(dados.results[0]);
      } else {
        setGame(null); // limpa o resultado anterior
        alert('Nenhum jogo encontrado.');
      }
    } catch (erro) {
      // Cai aqui se não tiver internet ou se a API falhar
      setGame(null);
      alert('Erro ao buscar. Verifique sua conexão.');
    } finally {
      // finally sempre roda, dando certo ou errado
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {/* Campo de busca: onSubmitEditing busca ao apertar "Enter" no teclado */}
      <TextInput
        style={styles.input}
        placeholder="Nome do jogo..."
        placeholderTextColor="#888888"
        value={query}
        onChangeText={setQuery}
        onSubmitEditing={buscarJogo}
        returnKeyType="search"
      />

      <TouchableOpacity
        style={[styles.botao, loading && styles.botaoDesativado]}
        onPress={buscarJogo}
        disabled={loading}
      >
        <Text style={styles.botaoTexto}>Buscar</Text>
      </TouchableOpacity>

      {/* Enquanto carrega, mostra a bolinha girando */}
      {loading && <ActivityIndicator size="large" color="#39FF14" style={styles.carregando} />}

      {/* Card do jogo: só aparece se tiver um jogo e não estiver carregando */}
      {game && !loading && (
        <View style={styles.card}>
          {/* Alguns jogos não têm capa, então só mostramos a imagem se ela existir */}
          {game.background_image ? (
            <Image source={{ uri: game.background_image }} style={styles.capa} />
          ) : null}

          <View style={styles.cardInfo}>
            <Text style={styles.nome}>{game.name}</Text>
            <Text style={styles.info}>Metacritic: {game.metacritic || 'Sem nota'}</Text>
            <Text style={styles.info}>Lançamento: {game.released || 'Sem data'}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 24,
  },
  input: {
    backgroundColor: '#1E1E1E',
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 12,
  },
  botao: {
    backgroundColor: '#39FF14',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoDesativado: {
    opacity: 0.5,
  },
  botaoTexto: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  carregando: {
    marginTop: 32,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    marginTop: 24,
    overflow: 'hidden', // faz a imagem respeitar as bordas arredondadas
  },
  capa: {
    width: '100%',
    height: 200,
  },
  cardInfo: {
    padding: 16,
  },
  nome: {
    color: '#39FF14',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  info: {
    color: '#CCCCCC',
    fontSize: 16,
    marginTop: 4,
  },
});
