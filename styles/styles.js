import {StyleSheet, Dimensions} from 'react-native';

const color1 = "#302850";//#312754
const color2 = "#F56039";//E71C36//E9D44E
export default styles = StyleSheet.create({
  header:{
    backgroundColor: "#302850"
  },
  content:{
    alignItems: "center",
    padding: 60
  },
  btn:{
    margin:7
  },
  camera:{
    flex:0,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'transparent',
    height: Dimensions.get('window').width,
    width:Dimensions.get('window').width
  },
  rectangleContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'transparent'
  },
  rectangle:{
    height:250,
    width:250,
    borderWidth:2,
    borderColor: '#00FF00',
    backgroundColor:'transparent'
  }
});
