import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';

export default function App() {
	const [nome, setNome] = useState("");
	const [nomeTxt, setNomeTxt] = useState("");
	const [valor1, setValor1] = useState(0);
	const [valor2, setValor2] = useState(0);
	const [resultado, setResultado] = useState(0);
	
	
	function somar(){
		let r= parseFloat(valor1) + parseFloat(valor2);
		setResultado (r);
	}	
		
	function subtrair(){
		let r= parseFloat(valor1) - parseFloat(valor2);
		setResultado (r);
	}
	
	function multiplicar(){
		let r= parseFloat(valor1) * parseFloat(valor2);
		setResultado (r);
	}
	
	function divisao(){
		let r= parseFloat(valor1) / parseFloat(valor2);
		setResultado (r);			
	}
	
	function lerNome(){
		setNome (nomeTxt);
	}
  return (
    <View style={styles.container}>
		  
		  <Text style={styles.titulo}>Olก!</Text>
		  
		<View style={styles.bloco}>
			<Text style={styles.label}> Nome: </Text>
					
			
		<TextInput
			style={styles.input}
			value={nomeTxt}
			onChangeText={(texto)=>setNomeTxt(texto)}//buscar literatura aerofunction js//
						/>
		
			 <Text style={styles.titulo}>Nome: {nome}</Text>
		</View>
	
		  
		  	<TouchableOpacity style={styles.botao} onPress={lerNome}>
			<Text style={styles.txtBotao}> Enviar</Text>
			</TouchableOpacity>
	
		<View style={styles.bloco}>
		   <Text style={styles.label}> Valor1: </Text>
				<TextInput
					style={styles.input}
					value={valor1}
					onChangeText={(valor)=>setValor1(valor)}
				/>			
		  </View>
		  
		<View style={styles.bloco}>
		   <Text style={styles.label}> Valor2: </Text>
				<TextInput
					style={styles.input}
					value={valor2}
					onChangeText={(valor)=>setValor2(valor)}
				/>
		</View>	
	
		<View style={styles.bloco}>
		   
			<TouchableOpacity style={styles.botao} onPress={somar}>
			<Text style ={styles.txtBotao}> Somar </Text>
			</TouchableOpacity>
			
		</View>
		  
		<View style={styles.bloco}>
		   
			<TouchableOpacity style={styles.botao} onPress={subtrair}>
			<Text style ={styles.txtBotao}> Subtrair </Text>
			</TouchableOpacity>
			
		</View>	
		  
		  
		<View style={styles.bloco}>
		   
			<TouchableOpacity style={styles.botao} onPress= {multiplicar}>
			<Text style ={styles.txtBotao}> Multiplicar </Text>
			</TouchableOpacity>
			
		</View>	
		  
		  
		<View style={styles.bloco}>
		   
			<TouchableOpacity style={styles.botao} onPress={divisao}>
			<Text style ={styles.txtBotao}> Dividir </Text>
			</TouchableOpacity>
			
		</View>
		  
		<View style={styles.bloco}>
		   <Text style={styles.label}> Resultado: {resultado} </Text>
			
			<TextInput style={styles.input}value={resultado}/>
			
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
  },
titulo:{
	fontSize:30,
	color:'#F00'
},
label:{
  fontSize:30
},
input:{
	borderWidth:2,
	fontSize:20	
},
txtBotao:{
	alignItems:'center',
	justifyContent:'center',
	backgroundColor: '#0a0a23',
	color: '#fff',
	
}


});
