// SandboxScreen.js — nosso "laboratório" de componentes.
// Vamos construir esta tela juntos durante a aula, um componente por vez.

// Já deixamos importado tudo o que vamos usar na aula
import { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function SandboxScreen() {
  // 👇 Estados e funções entram aqui

  return (
    // View: caixa que agrupa outros componentes (parecida com a <div> da web)
    <View style={styles.container}>
      {/* 👇 Componentes entram aqui */}
    </View>
  );
}

// StyleSheet.create: onde ficam os estilos (parecido com o CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa todo o espaço disponível
    backgroundColor: '#121212',
    justifyContent: 'center', // eixo vertical: flex-start | center | flex-end | space-between
    alignItems: 'center', // eixo horizontal: flex-start | center | flex-end | stretch
    padding: 24,
  },

  // 👇 Estilos entram aqui
});
