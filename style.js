
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal:16

  },
  inputContainer:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
    borderBottomColor:'#cccccc',
    borderBottomWidth: 1
  },
  textInput:{
    borderWidth:1,
    borderColor: '#cccccc',
    width:'70%',
    marginRight:8,
    padding:8
  },
  goalsContainer:{
    flex: 5
  },
  goalItem:{
    margin: 8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:'#ffffff'
  }
});


export default styles