import React,{useState} from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

import { Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { Switch } from 'react-native';
import { RadioButton } from 'react-native-paper';


export default function App() {

  const[nome,setNome] = useState('');
  const[cnpj,setCnpj] = useState('');
  const[telefone,setTelefone] = useState('');
  const[empresa,setEmpresa] = useState(0);
  const[qtd,setQtd] = useState(10);
  const[tipo,setTipo] = useState(false);
  const[checked,setChecked]  = useState('Frutas');

  const empresas=[
    {empresaNome: 'Cia da fruta' , valor: 1},
    {empresaNome: 'F.V.L do Luiz ', valor: 2},
    {empresaNome: 'Legumes do Vale' , valor: 3},
    {empresaNome: 'Verduras do Ribeira'   , valor: 4}
  ]

  function mostrarDados(){
    if(nome == '' || cnpj == '') 
    {
      alert("Preencha todos os campos ")
    }
    else{
      alert(
        'Veja as informações inseridas: \n\n' +
        'Nome do Vendedor: ' + nome + "\n" +
        'F, V ou L: ' + checked + '\n' +
        'Telefone: ' + telefone + '\n' +
        'CNPJ: ' + cnpj + '\n' +
        'Empresa: ' + empresas[empresa].empresaNome + '\n' +
        'Quantidade: ' + qtd.toFixed(2) + '\n' +
        'Orgânico: ' + (tipo ? 'Sim' : 'Não')
       )
    }
  }

  let empresaItems = empresas.map((v,k) => {
    return <Picker.Item key={k} value={k} label={v.empresaNome}></Picker.Item>
  })


  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Hortifrut Madu-ra</Text>
        <Image
        source={require('./assets/m.jpg')}
        style={{
          width: 40,
          height: 40,
          marginLeft: 20,
          padding: 10,  
          marginTop:-40,      
        }}
       >

       </Image>

      <View style={styles.areaformulario}>

        {/* <View style={styles.areaModelo}> */}
        <Text style={styles.textoNome}>Empresa:</Text>
          <Picker
            style={styles.pickerModelo}
            selectedValue={empresa}
            onValueChange={(itemValue , itemIndex) =>setEmpresa(itemValue)}
          >
            {empresaItems}
          </Picker>
        {/* </View> */}


        <Text style={styles.textoNome}>CNPJ:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o CNPJ da empresa'
          onChangeText={cnpj => setCnpj(cnpj)}
        >
        </TextInput>

        

        <View style={styles.areaRadio}>
          <RadioButton
            value="Frutas"
            status={checked == 'Frutas' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Frutas')}          
          >
          </RadioButton>
          <Text>Frutas</Text>

          <RadioButton
            value="Verduras"
            status={checked == 'Verduras' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Verduras')}          
          >
          </RadioButton>
          <Text>Verduras</Text>

          <RadioButton
            value="Legumes"
            status={checked == 'Legumes' ? 'checked' : 'unchecked' }
            onPress={() => setChecked('Legumes')}          
          >
          </RadioButton>
          <Text>Legumes</Text>

        </View>

        <Text style={styles.textoNome}>Telefone:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite o telefone da empresa'
          onChangeText={telefone => setTelefone(telefone)}
        >
        </TextInput>

        <Text style={styles.textoNome}>Nome do vendedor:</Text>
        <TextInput
          style={styles.input}
          placeholder='Digite seu nome Aqui'
          onChangeText={nome => setNome(nome)}
        >
        </TextInput>

       

        <View style={styles.valorCarro}>
          <Text style={styles.textoNome}> Quantidade: </Text>
          <Text style={styles.carroTexto}> {qtd.toFixed(0)} </Text>

        </View>

        <View style={styles.areaSlider}>
           <Slider
             minimumTrackTintColor='#FF8C00	'
             minimumValue={10}
             maximumValue={500}
             value={qtd}
             onValueChange={(qtd) => setQtd(qtd)}
           >            
           </Slider>
        </View>

        <View style={styles.areaUtilitario}>
          <Text style={styles.textoNome}>Orgânico:</Text>
          <Switch
            style= {{paddingTop: 15}}
            value= {tipo}
            onValueChange={tipo =>setTipo(tipo)}
          >
          </Switch>
        </View>

        <TouchableOpacity
          style={styles.botao}
          onPress={mostrarDados}          
        >
           <Text style={styles.botaoTexto}>Cadastrar</Text>
        </TouchableOpacity>

      </View>

      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
  
  },
  areaformulario:
  {
    flexDirection: 'column',
    margin: 10
  },
  textoNome:{
    fontSize: 17,
    color: '#000000',
    marginLeft: 10,
    padding: 5,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  areaModelo:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5
},
pickerModelo:{
  flex:1,
  marginTop: 0,
},
valorArea:{
  flexDirection:'row',
  paddingBottom: 5,
},
valorTexto:{
  color: '#FF0000',
  fontSize: 17,
  fontWeight: 'bold',
  paddingLeft: 5,
},
areaUtilitario:{
  flexDirection: 'column', 
  alignItems: 'center'
},
areaRadio:{
  flexDirection: 'row', 
  alignItems: 'center',
 
},
botao:{
  backgroundColor: 'green',
  width: '60%',
  alignSelf: "center",
  height: 50,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 10,
  marginTop: 0,
  marginBottom: 20,
},
botaoTexto:{
  fontSize: 20,
  fontWeight: 'bold',
  color: '#FFFFFF'
},
input:{
borderWidth: 0.5,
borderColor: '#000',
width: '90%',
borderRadius: 5,
padding: 10,
marginBottom: 10,
justifyContent: "center",
marginHorizontal: 5,
alignSelf: "center",
backgroundColor: '#fff',
height: 45,
marginLeft: 0,
fontWeight: 'bold'
},
titulo:
{
  fontSize: 30,
  color: "#000",
  marginLeft: 80,
  marginTop: 40,
  fontStyle: 'italic',
  alignItems: "center",
}
});
