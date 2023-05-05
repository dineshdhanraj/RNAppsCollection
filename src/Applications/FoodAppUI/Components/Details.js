import {Text, View, StyleSheet, Image, SafeAreaView,TouchableOpacity, FlatList} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather"
export default function Details({route,navigation}){
  const {item}=route.params;


  const renderIngredientsItem=({item})=>{
return(
  <View style={[styles.IngredientsList,{marginLeft: item.id == 1?20:15}]}>
  <Image style={styles.IngredientsSize} source={item.image} />
  </View>
)
  }
  return(
    <View style={styles.container}>
    <SafeAreaView>
    <View style={styles.Header}>
    <TouchableOpacity onPress={()=>{navigation.goBack()}}>
     <View>
    <Feather name='chevron-left' size={30} color='black'/>
    </View>
    </TouchableOpacity>
    <View style={styles.starDetails}>
    <Icon name='star' size={15} color='white'/>
    </View>
    </View>
        </SafeAreaView>

        <View style={styles.HeaderTitle}>
        <Text style={styles.TitleContents}>{item.title}</Text>
        </View>

        <View style={styles.subTitle}>
        <Text style={styles.subContents}>${item.price}</Text>
        </View>

<View style={styles.MainData}>

<View style={styles.Data}>

<View style={styles.Margin}>
<Text style={styles.mainStyle}>Size</Text>
<Text style={styles.subStyle}>{item.sizeNumber}</Text>
</View>

<View style={styles.Margin}>
<Text style={styles.mainStyle}>Crust</Text>
<Text style={styles.subStyle}>{item.crust}</Text>
</View>

<View style={styles.Margin}>
<Text style={styles.mainStyle}>Delivery Time</Text>
<Text style={styles.subStyle}>{item.deliveryTime}</Text>
</View>
</View>

<View style={styles.ImageStyle}>
<Image source={item.image} style={styles.imageMain}/>
</View>

</View>


<View style={styles.Ingredients}>
<Text style={styles.IngredientsText}>Ingredients</Text>
<View>
<FlatList
data={item.ingredients}
renderItem={renderIngredientsItem}
keyExtractor={item=>item.id}
horizontal={true}
showsHorizontalScrollIndicator={false}/>
</View>
</View>


<TouchableOpacity onPress={() => alert('Your order has been placed!')}>
        <View style={styles.orderWrapper}>
          <Text style={styles.orderText}>Place an order</Text>
          <Feather name="chevron-right" size={18} color={'black'} />
        </View>
      </TouchableOpacity>


    </View>
  );
}


const styles=StyleSheet.create({
  container:{
    flex:1
  },
  Header:{
    paddingTop:60,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  HeaderTitle:{
    marginTop:30,
    paddingHorizontal:20,
  
  },
  TitleContents:{
  fontSize:32,
    width:'50%',
  },
  subTitle:{
    marginTop:20,
    paddingHorizontal:20
  },
  subContents:{
fontSize:32,
color:'#E4723C',
  },
  MainData:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  Data:{
    paddingHorizontal:20,
  },
  Margin:{
    marginTop:20,
  },
  mainStyle:{
fontSize:14,
color:'#CDCDCD',
  },
  subStyle:{
    marginTop:5,
fontSize:16,
color:'#000000',
  },
  ImageStyle:{
    paddingHorizontal:24,
  },
  imageMain:{
    marginTop:6,
    width:296,
    height:176,
  },
  Ingredients:{
    marginTop:60
  },
  IngredientsText:{
    paddingHorizontal:20,
    fontSize:16,
  },
  IngredientsList:{
    marginTop:15,
    backgroundColor:'white',
    borderRadius:20,
    padding:10,
    marginLeft:20,
  },
  IngredientsSize:{
    height:80,
    width:80,
  },
  starDetails:{
    backgroundColor: '#F5CA48',
    padding: 12,
    borderRadius: 10,
    marginRight:20,
    borderColor: '#F5CA48',
    borderWidth: 2,
    },
   orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: '#F5CA48',
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    orderText:{
        fontSize: 14,
    marginRight: 10,
    }
  
})