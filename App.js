// App.js — ponto de entrada do aplicativo.
// Aqui montamos a navegação por abas na parte de baixo da tela.

import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SandboxScreen from './src/screens/SandboxScreen';
import BuscadorScreen from './src/screens/BuscadorScreen';

// Cria o navegador de abas
const Tab = createBottomTabNavigator();

// Tema escuro do React Navigation com as cores do nosso app
const tema = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#9D4EDD', // roxo (cor de destaque)
    background: '#121212', // fundo das telas
    card: '#1E1E1E', // fundo do cabeçalho e da barra de abas
    text: '#FFFFFF',
    border: '#2A2A2A',
  },
};

export default function App() {
  return (
    // NavigationContainer: "caixa" que guarda o estado da navegação
    <NavigationContainer theme={tema}>
      {/* Deixa os ícones da barra de status (hora, bateria) claros */}
      <StatusBar style="light" />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#9D4EDD', // cor da aba selecionada
          tabBarInactiveTintColor: '#888888', // cor das outras abas
        }}
      >
        {/* Cada Tab.Screen é uma aba: name = título, component = tela */}
        <Tab.Screen
          name="Sandbox"
          component={SandboxScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="flask" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Buscador"
          component={BuscadorScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="game-controller" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
