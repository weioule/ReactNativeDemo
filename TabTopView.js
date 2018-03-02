import React, { Component } from 'react';
 import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
 import {
   AppRegistry,
   StyleSheet,
   Text,
   ListView,
   Image,
   View
 } from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class TabTopView extends Component {

 _data = [
        {name: '张三', phoneNumber: 13800000000},
        {name: '李四', phoneNumber: 13900000000},
        {name: '王五', phoneNumber: 15800000000},
    ]

 constructor(props) {
        super(props);

        // 创建DataSource对象
        let ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2});

        // 将DataSource对象设置为state，以便之后更新。
        this.state = {
            ds,
        };

        // 绑定this指针
        this.setData = this._setData.bind(this);
        this.renderRow = this._renderRow.bind(this);
    }

     _setData = (newData) => {
            // 更新数据，同时通过setState更新UI
            this.setState({
                ds: this.state.ds.cloneWithRows(newData)
            });
        }

        _setData = (newData) => {
                // 更新数据，同时通过setState更新UI
                this.setState({
                    ds: this.state.ds.cloneWithRows(newData)
                });
            }

            _renderRow = (rowData) => {
                // 根据数据绘制单行UI
                return  <View>
                            <Text>rowData.name</Text>
                            <Text>rowData.phoneNumber</Text>
                        </View>
            }

    render() {
        return (
            <ScrollableTabView
                style={styles.tabView}
                renderTabBar={() => <DefaultTabBar />}
                tabBarUnderlineStyle={styles.lineStyle}
                tabBarActiveTextColor='#FF0000'>

                <Text style={styles.textStyle} tabLabel='充值'>充值</Text>
                <Text style={styles.textStyle} tabLabel='提现'>提现</Text>
                <Text style={styles.textStyle} tabLabel='收益'>收益</Text>
                <Text style={styles.textStyle} tabLabel='还信用卡'>还信用卡</Text>
                <Text style={styles.textStyle} tabLabel='还贷'>还贷</Text>
                <Text style={styles.textStyle} tabLabel='转账'>转账</Text>
            </ScrollableTabView>
        );

    }
	
	    renderRows(rowData, sectionID, rowID) {
             return (
                 <View>
                 <ListItem data={rowData}/>
                 </View>
             );
         }

}




const styles = StyleSheet.create({
 tabView: {
         flex: 1,
         marginTop: 20
     },
     lineStyle: {
         width:ScreenWidth/4,
         height: 2,
         backgroundColor: '#ffffff',
     },
     textStyle: {
         flex: 1,
         fontSize:20,
         marginTop:20,
         textAlign:'center',
     },


  container: {
     flex: 1,
     paddingTop: 10,
     marginLeft:10,
     paddingBottom:10,
     flexDirection:'row',
  },
  image:{
    width:30,
    height:30,
    resizeMode:Image.resizeMode.contain,
    justifyContent:'center',
    alignItems:'center'
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
});
	

export default TabTopView;
