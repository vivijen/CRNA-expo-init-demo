import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

export default class Home extends Component {
  render() {
    return (
      <View>
        <View style={styles.menu_row}>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>健康</Text>
            </View>
          </View>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img}  />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>通知</Text>
            </View>
          </View>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>报事</Text>
            </View>
          </View>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>投诉</Text>
            </View>
          </View>
        </View>
        <View style={styles.menu_row}>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>缴费</Text>
            </View>
          </View>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>党宣</Text>
            </View>
          </View>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>报修</Text>
            </View>
          </View>
          <View style={styles.menu_col}>
            <View style={styles.menu_img_box}>
              <ImageBackground source={require('../../img/img3.png')} style={styles.menu_img} />
            </View>
            <View style={styles.menu_text_box}>
              <Text style={styles.menu_text}>更多</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }
})
