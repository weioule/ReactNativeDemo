import React, { Component } from 'react';
import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import { AppRegistry, FlatList, StyleSheet, Image,Text, View, TouchableNativeFeedback, WebView, TouchableOpacity, BackAndroid, ToastAndroid} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ListItem from './ListItem.js';

const questUrl = 'https://guangdiu.com/api/getlist.php';
var tabIndex = 0;

class MyFlatList extends Component{

  render(){
    var dataSource = this.props.dataSource;
    var renderItem = this.props.renderItem;
    var onRefresh = this.props.onRefresh;
    var refreshing = this.props.refreshing;
    var onEndReached = this.props.onEndReached;
    return(
      <FlatList
      data = {dataSource}
      renderItem = {renderItem}

             //下拉刷新，必须设置refreshing状态
             onRefresh={onRefresh}
             refreshing={refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={onEndReached}

      />
    )
  }
}

class DetailsScreen extends Component{
  render(){
    const {params} = this.props.navigation.state;
    return(
      <View style = {styles.container}>
      <WebView
        source={{uri:params.uri,method: 'GET'}}
        javaScriptEnabled={true}
        startInLoadingState={true}
        domStorageEnabled={true}
        scalesPageToFit={false}
      />
      </View>
      )
  }
}

class MainScreen extends Component {
    static navigationOptions = { header: null };

    //构造方法，声明账单bill变量
     constructor(props) {
         super(props);

         this.state = {
         bill0: [],
         bill1: [],
         bill2: [],
         bill3: [],
         bill4: [],
         bill5: [],
         refreshing: false,//当前的刷新状态
         loadMore:false,
       };

       //绑定this,不然调用方法的时候会找不到
       this.get = this.get.bind(this);
       this.getDatas = this.getDatas.bind(this);
       this.setTabData = this.setTabData.bind(this);
     };

     //组件渲染完成后只调用一次
     componentDidMount(){
        this.getDatas(10)
     };

     render() {
        var tabs = ['充值','提现','收益','还信用卡','还贷','转账']
        return (
          <View style = {styles.container}>
          <View style = {styles.headerView}>
          <TouchableOpacity onPress={this.onBack.bind(this)}>
           <Image source={require('./img/back.png')} style={styles.imageStyle} ></Image>
           </TouchableOpacity>
          <Text style = {styles.textHeaderStyle}>账单</Text>
          </View>

          <ScrollableTabView
          style={styles.pagerView}
          renderTabBar={() => <DefaultTabBar />}
          tabBarUnderlineStyle={styles.lineStyle}
          tabBarActiveTextColor='#FF0000'
          onChangeTab={(obj) => {
          //tab点击与页面滑动的回调
          this.setTabData(obj.i+10);
          this.tabIndex = obj.i;
          }
          }>

          <MyFlatList tabLabel = {tabs[0]}
            dataSource = {this.state.bill0}

             //下拉刷新，必须设置refreshing状态
             onRefresh={this.onRefresh}
             refreshing={this.state.refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={this.onEndReached}

            renderItem = {({item}) =>
                             <View>
                              <ListItem data={item}/>
                             </View>
                             }/>

        <MyFlatList tabLabel = {tabs[1]}
          dataSource = {this.state.bill1}
            //下拉刷新，必须设置refreshing状态
             onRefresh={this.onRefresh}
             refreshing={this.state.refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={this.onEndReached}
          renderItem = {({item}) =>
                            <View>
                            <ListItem data={item}/>
                            </View>
                          }/>

        <MyFlatList tabLabel = {tabs[2]}
          dataSource = {this.state.bill2}
            //下拉刷新，必须设置refreshing状态
             onRefresh={this.onRefresh}
             refreshing={this.state.refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={this.onEndReached}
          renderItem = {({item}) =>
                            <View>
                            <ListItem data={item}/>
                            </View>
                          }/>

        <MyFlatList tabLabel = {tabs[3]}
          dataSource = {this.state.bill3}
            //下拉刷新，必须设置refreshing状态
             onRefresh={this.onRefresh}
             refreshing={this.state.refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={this.onEndReached}
          renderItem = {({item}) =>
                            <View>
                            <ListItem data={item}/>
                            </View>
                          }/>

        <MyFlatList tabLabel = {tabs[4]}
          dataSource = {this.state.bill4}
            //下拉刷新，必须设置refreshing状态
             onRefresh={this.onRefresh}
             refreshing={this.state.refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={this.onEndReached}
          renderItem = {({item}) =>
                            <View>
                            <ListItem data={item}/>
                            </View>
                          }/>

       <MyFlatList tabLabel = {tabs[5]}
          dataSource = {this.state.bill5}
            //下拉刷新，必须设置refreshing状态
             onRefresh={this.onRefresh}
             refreshing={this.state.refreshing}

             //上拉加载
             onEndReachedThreshold={0.1}
             onEndReached={this.onEndReached}
          renderItem = {({item}) =>
                    <View>
                     <ListItem data={item}/>
                    </View>
                   }/>

        </ScrollableTabView>

        </View>
        );
      };

        /**
         * 下拉属性
         */
        onRefresh = () => {
                //设置刷新状态为正在刷新
                this.setState({
                    refreshing: true,
                });

                this.getDatas(10+this.tabIndex);

                this.setState({
                    refreshing: false,
                });
        };

     /**
         * 上拉加载
         * 2017.10.23 11:03 还有一些问题
         当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用。
         */
        onEndReached = (info: { distanceFromEnd: number }) => {
          if(this.state.loadMore){
                    return;
               }

          this.setState({
               loadMore: true,
                  });

            ToastAndroid.show('正在加载中...', ToastAndroid.SHORT);
            this.getDatas(10+this.tabIndex);

        };


       onBack(){
            //退出应用
            BackAndroid.exitApp();
       }


        //避免每次加载，过滤没数据时才加载
        setTabData(tab){
               switch(tab-9){
                    case 1:
                    if(this.state.bill0===null){
                        this.getDatas(tab);
                    }
                    break;
                    case 2:
                     if(this.state.bill1===null){
                        this.getDatas(tab);
                    }
                    break;
                    case 3:
                     if(this.state.bill2===null){
                         this.getDatas(tab);
                    }
                    break;
                    case 4:
                    if(this.state.bill3===null){
                        this.getDatas(tab);
                   }
                    break;
                    case 5:
                     if(this.state.bill4===null){
                         this.getDatas(tab);
                    }
                    break;
                    case 6:
                    if(this.state.bill5===null){
                        this.getDatas(tab);
                   }
                    break;
                   }
        }

        getDatas(count){
         var thiz = this;
                let params = {'count':count};
                thiz.get(questUrl,params,function (responseData) {

                    if(!responseData || responseData.data.lenght<=0){
                        return;
                    }

                    //给bill赋值，重绘页面
                     switch(count-10){
                          case 0:
                          if(thiz.state.loadMore){
                             thiz.setState({
                                   bill0:thiz.state.bill0.concat(responseData.data),
                                   loadMore:false,
                                  });
                          }else{
                             thiz.setState({
                                   bill0: responseData.data,
                                   });
                          }
                          break;
                          case 1:
                            if(thiz.state.loadMore){
                             thiz.setState({
                                   bill1:thiz.state.bill1.concat(responseData.data),
                                   loadMore:false,
                                  });
                          }else{
                             thiz.setState({
                                   bill1: responseData.data,
                                   });
                          }
                          break;
                          case 2:
                             if(thiz.state.loadMore){
                              thiz.setState({
                                    bill2:thiz.state.bill2.concat(responseData.data),
                                    loadMore:false,
                                   });
                           }else{
                              thiz.setState({
                                    bill2: responseData.data,
                                    });
                           }
                          break;
                          case 3:
                            if(thiz.state.loadMore){
                             thiz.setState({
                                   bill3:thiz.state.bill3.concat(responseData.data),
                                   loadMore:false,
                                  });
                          }else{
                             thiz.setState({
                                   bill3: responseData.data,
                                   });
                          }
                          break;
                          case 4:
                            if(thiz.state.loadMore){
                             thiz.setState({
                                   bill4:thiz.state.bill4.concat(responseData.data),
                                   loadMore:false,
                                  });
                          }else{
                             thiz.setState({
                                   bill4: responseData.data,
                                   });
                          }
                          break;
                          case 5:
                            if(thiz.state.loadMore){
                             thiz.setState({
                                   bill5:thiz.state.bill5.concat(responseData.data),
                                   loadMore:false,
                                  });
                          }else{
                             thiz.setState({
                                   bill5: responseData.data,
                                   });
                          }
                          break;
                          }
                })
        }

      /*
           *  get请求
           *  url:请求地址
           *  params:参数
           *  callback:回调函数
           * */
           get(url,params,callback){
              if (params) {
                  let paramsArray = [];
                  //拼接参数
                  Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
                  if (url.search(/\?/) === -1) {
                      url += '?' + paramsArray.join('&')
                  } else {
                      url += '&' + paramsArray.join('&')
                  }
              }
              //fetch请求
              fetch(url,{method: 'GET',})
                  .then((response) => response.json())
                  .then((responseData) => {callback(responseData)})
                  .catch((error) => {
                      alert(error)
                  });

                  console.log("请求地址： "+url);
          };


     renderItem = (rowData) => {
          return (
                 <View>
                 <ListItem data={rowData}/>
                 </View>
                 );
                };
        };

    //配置路由，跳转的子页面
    const App = StackNavigator({
      Main: { screen: MainScreen },
      Details: { screen: DetailsScreen },
    });

    //样式
    const styles = StyleSheet.create({
      container: {
       flex: 1,
       flexDirection: 'column',
       backgroundColor: 'white'
     },
     headerView:{
      flex: 1,
      paddingLeft:10,
      backgroundColor: 'white',
      justifyContent:'flex-start',
      flexDirection: 'row',
      alignItems:'center',
    },
     textHeaderStyle:{
        fontSize:30,
        marginLeft:10,
        color: 'black',
      },
    pagerView:{
      flex: 6,
      backgroundColor: 'white'
    },

    lineStyle: {
     height: 2,
     backgroundColor: '#FFFFFF',
   },
   textMainStyle: {
     flex: 1,
     fontSize:40,
     marginTop:10,
     textAlign:'center',
     color: 'black'
   },

})


export default App;

