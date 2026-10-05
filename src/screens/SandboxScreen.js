// SandboxScreen.js — nosso "laboratório" de componentes.
// Vamos construir esta tela juntos durante a aula, um passo de cada vez.
// Os estilos já estão prontos lá embaixo: você digita a lógica e a tela.

import { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Switch,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

// 👇 Passo 10: componentes criados por nós entram aqui

export default function SandboxScreen() {
  // 👇 Estados e funções entram aqui

  return (
    // ScrollView: uma View que rola. A tela vai ficar comprida!
    <ScrollView style={styles.tela} contentContainerStyle={styles.conteudo}>
      <Text style={styles.intro}>
        🧪 Laboratório: vamos montar esta tela juntos, um componente por vez.
      </Text>

      {/* 👇 Componentes entram aqui */}
    </ScrollView>
  );
}

// StyleSheet.create: onde ficam os estilos (parecido com o CSS).
// Já estão todos prontos: cada um só aparece quando o componente dele entra na tela.
const styles = StyleSheet.create({
  // Tela e cards (usados desde o começo)
  tela: {
    flex: 1,
    backgroundColor: '#121212',
  },
  conteudo: {
    padding: 16,
    paddingBottom: 40,
  },
  intro: {
    color: '#888888',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2A2A2A',
    padding: 16,
    marginBottom: 16,
  },
  cardTitulo: {
    color: '#9D4EDD',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },

  // PASSO 1 — caixas
  linha: {
    flexDirection: 'row', // 'row' = lado a lado | 'column' = um embaixo do outro
    justifyContent: 'space-around', // flex-start | center | space-between | space-around
    alignItems: 'center',
  },
  caixa: {
    width: 60,
    height: 60,
    borderRadius: 12,
    justifyContent: 'center', // centraliza o número dentro da caixa
    alignItems: 'center',
  },
  caixaTexto: {
    color: '#121212',
    fontSize: 22,
    fontWeight: 'bold',
  },
  roxo: {
    backgroundColor: '#9D4EDD',
  },
  azul: {
    backgroundColor: '#4CC9F0',
  },
  rosa: {
    backgroundColor: '#F72585',
  },

  // PASSO 2 — textos
  titulo: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  paragrafo: {
    color: '#CCCCCC',
    fontSize: 16,
    lineHeight: 24,
  },
  destaque: {
    color: '#9D4EDD',
    fontWeight: 'bold',
  },

  // PASSO 3 — imagens
  logo: {
    width: 64,
    height: 64,
    alignSelf: 'center', // centraliza só este item
    marginBottom: 12,
  },
  capa: {
    width: '100%',
    height: 160,
    borderRadius: 12,
  },

  // PASSOS 4, 6 e 8 — botão
  botao: {
    backgroundColor: '#9D4EDD',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // PASSO 5 — contador
  numero: {
    color: '#FFFFFF',
    fontSize: 56,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  botaoRedondo: {
    width: 64,
    height: 64,
    borderRadius: 32, // metade do tamanho = círculo
    backgroundColor: '#9D4EDD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoRedondoTexto: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
  },

  // PASSO 6 — campo de texto
  input: {
    backgroundColor: '#121212',
    color: '#FFFFFF',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
    marginBottom: 12,
  },
  aviso: {
    color: '#888888',
    fontSize: 14,
    marginTop: 4,
  },

  // PASSO 7 — switch
  linhaEntre: {
    flexDirection: 'row',
    justifyContent: 'space-between', // um item em cada ponta
    alignItems: 'center',
  },
  turbo: {
    color: '#F72585',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },

  // PASSO 8 — carregando
  espaco: {
    marginTop: 16,
  },
  sucesso: {
    color: '#2ECC71',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
  },

  // PASSO 9 — lista
  itemLista: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  nota: {
    color: '#FFD166',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // PASSO 10 — selos
  linhaSelos: {
    flexDirection: 'row',
    flexWrap: 'wrap', // se não couber, quebra para a linha de baixo
  },
  selo: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 999, // bem arredondado: vira uma "pílula"
    marginRight: 8,
    marginBottom: 8,
  },
  seloTexto: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
});
