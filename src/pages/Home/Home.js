import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import YaoShi from '../YaoShi/YaoShi';
import BaoJing from '../BaoJing/BaoJing';
import Profile from '../Profile/Profile';

class HomeView extends React.Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {/* <View style={styles.header} /> */}
          <View style={styles.body}>
            <View style={styles.body_topimg} />
            <View style={styles.body_menu}>
              <View style={styles.menu_row}>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('JianKang')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>健康</Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('TongZhi')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>通知</Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('BaoShi')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>报事</Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('TouSu')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>投诉</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.menu_row}>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('JiaoFei')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>缴费</Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('DangXuan')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>党宣</Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('BaoXiu')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>报修</Text>
                    </View>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => this.props.navigation.navigate('GengDuo')}
                  style={styles.menu_col}
                >
                  <View style={styles.menu_col}>
                    <View style={styles.menu_img_box}>
                      <ImageBackground
                        source={require ('../../img/img3.png')}
                        style={styles.menu_img}
                      />
                    </View>
                    <View style={styles.menu_text_box}>
                      <Text style={styles.menu_text}>更多</Text>
                    </View>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <View style={styles.body_message} />
          </View>
          {/* <View style={styles.bottom} /> */}
        </View>
      </SafeAreaView>
    );
  }
}

const Home = createBottomTabNavigator(
  {
    Yaoshi: {
      screen: YaoShi,
    },
    BaoJing: {
      screen: BaoJing,
    },
    HomeView: {
      screen: HomeView,
    },
    Profile: {
      screen: Profile,
    },
  },
  {
    initialRouteName: 'HomeView',
    tabBarOptions: {
      activeTintColor: '#e91e63',
      activeBackgroundColor: 'grey',
      inactiveBackgroundColor: '#000000',
    },
  }
);

export default Home;


const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  header: {
    flex: 2,
    backgroundColor: 'black',
  },
  body: {
    flex: 30,
    flexDirection: 'column',
  },
  body_topimg: {
    flex: 2,
    backgroundColor: 'powderblue',
  },
  body_menu: {
    flex: 2,
    backgroundColor: 'skyblue',
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'column',
  },
  menu_row: {
    flex: 1,
    flexDirection: 'row',
  },
  menu_col: {
    flex: 1,
    flexDirection: 'column',
  },
  menu_img_box: {
    flex: 1,
    alignItems: 'stretch',
    // alignItems: 'center',
    margin: 10,
  },
  menu_img: {
    flex: 1,
    padding: 10,
  },
  menu_text_box: {
    flex: 1,
    alignItems: 'center',
  },
  menu_text: {
    fontSize: 16,
  },
  body_message: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  bottom: {
    flex: 3,
    backgroundColor: 'black',
  },
});
