import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function App() {
	const [nome, setNome] = useState("Maria")
	
	function lerNome(){
		setNome ("Ana");
	}
  return (
    <View style={styles.container}>
		  
		  <Text style={styles.titulo}>Olá!</Text>
		  
		<View style={styles.bloco}>
			<Text style={styles.label}> Nome: </Text>
			
		<TextInput
			style={styles.input}
			
			/>
			<TouchableOpacity style={styles.botao} onPress= {lerNome}>
			<text style ={styles.txtBotao}> Enviar</text>
			</TouchableOpacity>
			 <Text style={styles.titulo}>Nome: {nome}</Text>
		</View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },titulo:{
	fontSize:30,
	color:'#F00'
},
label:{
  fontSize:30
},
input:{
	borderWidth:2,
	fontSize:20	
}
});
