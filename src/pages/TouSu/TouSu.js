import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

export default class TouSu extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.line_2}>
          <View style={styles.line_left}>
            <Text>事物\n类型</Text>
          </View>
          <View style={styles.line_right}>
            <View style={styles.radioSel_tc}></View>
            <View style={styles.radioSel}><Text>投诉</Text></View>
            <View style={styles.radioSel}><Text>建议</Text></View>
            <View style={styles.radioSel_tc}></View>
          </View>
        </View>
        <View style={styles.line_2}>
          <View style={styles.line_left}>
            <Text>分类</Text>
          </View>
          <View style={styles.line_right} />
        </View>
        <View style={styles.line_6}>
          <View style={styles.line_left}>
            <Text>主题</Text>
          </View>
          <View style={styles.line_right} />
        </View>
        <View style={styles.line_5}>
          <View style={styles.line_left}>
            <Text>问题描述</Text>
          </View>
          <View style={styles.line_right} />
        </View>
        <View style={styles.line_5}>
          <View style={styles.line_left}>
            <Text>拍照上传</Text>
          </View>
          <View style={styles.line_right} />
        </View>
        <View style={styles.line_5}>
          <View style={styles.line_left} />
          <View style={styles.line_right} />
        </View>
        <View style={styles.line_3}>
          <View style={styles.line_left} />
          <View style={styles.line_right} />
        </View>
        <View style={styles.line_1} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  line_2: {
    flex: 2,
    flexDirection: 'row',
  },
  line_3: {
    flex: 3,
    flexDirection: 'row',
  },
  line_5: {
    flex: 5,
    flexDirection: 'row',
  },
  line_6: {
    flex: 6,
    flexDirection: 'row',
  },
  line_left: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    margin: 5,
  },
  line_right: {
    flex: 7,
    flexDirection: 'row',
  },
  radioSel_tc:{
    flex: 3,
  },
  radioSel: {
    flex: 2,
  }
});
