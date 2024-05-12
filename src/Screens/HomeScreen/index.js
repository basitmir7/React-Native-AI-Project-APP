import React from "react"
import {View,Text,ScrollView,TouchableOpacity,Alert} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const HomeScreen = () =>{
const dummyData =[{name:'box', color:'red'},{name:'box two', color:'blue'},{name:'box Three', color:'green'}];

const onPressItem =(item) =>{
Alert.alert(item.name)
}
const Box =({
item,onPressItem =()=>{}
})=>{
    const {color,name} =  item ||{}
return <TouchableOpacity style={{backgroundColor:`${color}`,height:200,width:200}} onPress={onPressItem}>
    <AntDesign name="caretup" style={{color:'red',fontSize:30}}/>
    <Text>{name}</Text>
</TouchableOpacity>
}
const boxView=()=>{
    return (
        dummyData.map((item,index)=>{
            return <Box item={item} index={index} onPressItem={()=>onPressItem(item)}/>
        }) 
    )
}
    return <View>
<Text>HomeScreen</Text>
<ScrollView>
    {
        boxView()
    }
</ScrollView>

    </View>
}
export default HomeScreen