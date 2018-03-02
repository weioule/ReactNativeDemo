import React from 'react';
import {Component} from 'react';
import {
View,
Text,
ListView,
StyleSheet,
TouchableOpacity,
Image
} from 'react-native';


class ListItem extends Component{
    render() {
    var item = this.props.data;

     if(!item.id){
               return(
                     <View style ={styles.timeTxt}>
                     <Text style={styles.txt_13}>{item.id}</Text>
                     </View>
               );
           }else{
            return (
                <View>
                    <TouchableOpacity onPress={this.onPress.bind(this,item)} style = {[styles.container,styles.line]}>
                                   <View style={styles.image}>
                                       <Image source={{uri:item.image}} style={{width: 30, height: 30}}/>
                                   </View>

                                   <View style = {styles.leftItem}>
                                    <View>
                                    <Text style={styles.txt_15}>{item.mall}</Text>
                                     </View>
                                     <View>
                                     <Text style={styles.txt_13}>{item.pubtime}</Text>
                                     </View>
                                   </View>

                                   <View style = {styles.rightItem}>
                                    <View>
                                    <Text style={styles.txt_15}>{item.imgw}</Text>
                                     </View>
                                     <View>
                                     <Text style={styles.txt_13}>{item.fromsite}</Text>
                                     </View>
                                   </View>
                        </TouchableOpacity>
                </View>
                 );
          }
        }
        onPress(item){
            alert(item.title)
        }
    }

const styles = StyleSheet.create({
  container: {
     flex: 1,
     height:60,
     alignItems:'center',
     justifyContent:'center',
     marginLeft:20,
     flexDirection:'row',
  },

  image:{
    width:30,
    height:30,
    justifyContent:'center',
    alignItems:'center',
  },

  line:{
     borderBottomWidth:1,
     borderColor:'#9c9c9c'
 },

  leftItem:{
    flex:1,
    marginLeft:10,
  },

  rightItem:{
    flex:1,
    marginRight:10,
    alignItems:'flex-end',
  },

  button: {
    padding: 10,
  },

  timeTxt:{
    height:40,
    padding:10,
    backgroundColor:'#99FFFFFF',
  },

  txt_13:{
    color:'gray',
    fontSize:15,
   },

   txt_15:{
    color:'black',
    fontSize:18,
   }

});

module.exports = ListItem;