import React, {useState} from 'react';
import {View, Text, StyleSheet,SafeAreaView,Image,FlatList, ScrollView, TouchableOpacity} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import popularData from '../Assests/popularData';
import Feather from 'react-native-vector-icons/Feather';

const DATA=[
{
id:1,
image:require('../Assests/pizza.png'),
title:'PIZZA',
selected:true
},
{
id:2,
image:require('../Assests/shrimp.png'),
title:'SEA FOOD',
selected:false
  },
  {
id:3,
image:require('../Assests/soda.png'),
title:'NORMAL',
selected:false
    }]
export default function DeliveryApp({ navigation }){

  const renderCategoryItem=({item})=>{
    return(
<View style={[styles.CategoryView, {marginLeft:item.id == 1?0:20},{backgroundColor:item.selected?'#F5CA48':'white'}]}>
<Image style={styles.CategoryImage} source={item.image}/>
<Text style={styles.CategoryTextList}> {item.title}</Text>
<View style={[styles.SelectionWrapper,{backgroundColor:item.selected?'white':'#F26C68'}]}>
<Icon name="chevron-right" style={styles.CategoryIcon} color={item.selected ? 'black' : 'white'} />
</View>
</View>
    );
  }
  return(
   <View style={styles.container}>
   <ScrollView
   contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
   <SafeAreaView>
   <View style={styles.headerWrapper}>
   <Image style={styles.ImageProperties} source={require('../Assests/profile.png')}/>
    <Icon name="menu" size={30} color="#900" />
   </View>
   </SafeAreaView>

   <View style={styles.titleView}>
   <Text style={styles.Title}> Food </Text>
   <Text style={styles.SubTitle}>Delivery</Text>
   </View>

   <View style={styles.SearchView}>
   <Feather name="search" size={30} color="#900"/>
   <View style={styles.search}>
   <Text style={styles.searchText}>Search</Text>
   </View>
   </View>

   <View style={styles.Category}>
   <Text style={styles.CategoryText}>Category</Text>
   <View style={styles.listStyle}>
   <FlatList
   data={DATA}
   renderItem={renderCategoryItem}
   keyExtractor={item=>item.id}
   horizontal={true}
   />
   </View>
   </View>

   <View style={styles.PopularWrapper}>
   <Text style={styles.popularText}>Popular</Text>
   {popularData.map((item) => (

     <TouchableOpacity key={item.id} onPress={()=>navigation.navigate('Details', {
                  item: item,})}>
     <View style={styles.popularView}>
     <View style={styles.MainHeader}>
     <View style={styles.TitleWrapper}>
    <Icon name="crown" size={20} paddingHorizontal={20} color="#900" />
     <Text style={styles.WeekWrapper}> Top of the Week </Text>
     </View>
     <View style={styles.ContentWrapper}>
     <Text style={styles.titleStyle}>{item.title}</Text>
     <Text style={styles.weightStyle}>{item.weight}</Text>
     </View>

     <View style={styles.popularCardBottom}>
                    <View style={styles.addPizzaButton}>
                      <Icon name="plus" size={10} />
                    </View>
                    <View style={styles.ratingWrapper}>
                      <Icon
                        name="star"
                        size={10}
                      />
                      <Text style={styles.rating}>{item.rating}</Text>
                    </View>
                  </View>
                
     </View>

     <View style={styles.PopularSizeImage}>
     <Image style={styles.popularImage} source={item.image}/>
     </View>
     </View>
     </TouchableOpacity>
   ))}
   
   </View>

</ScrollView>
   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headerWrapper:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:60,
    paddingHorizontal:20,
    alignItems:'center',
  },
  ImageProperties:{
    height:40,
    width:40,
    borderRadius:20,
  },
  titleView:{
    marginTop:30,
    paddingHorizontal:20,
  },
  Title:{
fontSize:16,
  },
  SubTitle:{
    marginTop:5,
    fontSize:32,
  },
  SearchView:{
    marginTop:36,
    paddingHorizontal:20,
    flexDirection:'row'
  },
  search:{
    flex:1,
    borderBottomRadius:2,
    borderBottomWidth:2,
    marginLeft:10,
  },
  searchText:{
   marginBottom:5,
   fontSize:14,
  },
  Category:{
    marginTop:30,
    paddingHorizontal:20
  },
  CategoryText:{
    fontSize:16,
    color:'#000000',
  },
  listStyle:{
    marginTop:15,
  },
  CategoryImage:{
    height:60,
    width:60,
    marginTop:24
  },
  CategoryView:{
    borderRadius:30,
    backgroundColor:'#F5CA48',
    paddingHorizontal:20,
  },
  CategoryTextList:{
    marginTop:10,
    textAlign:'center',
    fontSize:14,
  },
  CategoryIcon:{
    alignSelf:'center'
    
   
  },
  SelectionWrapper:{
marginTop:20,
 width:26,
    height:26 ,
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:20,
    borderRadius:20
  },PopularWrapper:{
    marginTop:20,
    paddingHorizontal:20,
  },
  popularText:{
    fontSize:16,
    marginBottom:11,
  },
  popularView:{
    overflow: 'hidden',
    borderWidth:2,
    borderRadius:35,
    marginBottom:20,
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between'
  },
  popularImage:{
    width:210,
    height:125,
    resizeMode:'contain',
  },
  PopularSizeImage:{
    marginLeft:50,
  },
  TitleWrapper:{
    flexDirection:'row',
    marginLeft:10,
  },
  ContentWrapper:{
    marginTop:20,
    paddingHorizontal:22,
  },
  MainHeader:{
    marginTop:24,
  },
  WeekWrapper:{
    fontSize:14,
    paddingHorizontal:10,
  },
  titleStyle:{
    fontSize:14,
  },
  weightStyle:{
    marginTop:5,
    fontSize:12,
  },
  popularCardBottom:{
     flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  addPizzaButton:{
    backgroundColor: '#F5CA48',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 30,},
    ratingWrapper:{
       flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    },
    rating:{
      fontSize: 15,
    color: 'black',
    marginLeft: 5,
    },
});