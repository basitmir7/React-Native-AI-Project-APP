import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container:(val)=>( {
    flex: 1,
    backgroundColor: val,
  }),
  button:{
    paddingVertical:10,
    backgroundColor:'purple',
    width:'30%',
    alignItems:'center',
    borderRadius:10,
    alignSelf:'center'

  },
  btnText:{
    fontSize:14,
    color:'#fff'
  }
});

export default styles;
