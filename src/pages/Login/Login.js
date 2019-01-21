import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Image, Button, Alert} from 'react-native';
import styleUtil from '../../common/styleUtil';
import {Avatar} from 'react-native-elements';
import Rn from '../../common/request';
import { BASEURL_UIM } from '../../common/constant';

export default class Login extends Component {
  constructor (props) {
    super (props);
    this.state = {
      mobile: '',
      invalidcode: '',
      password: '',
    };
  }

  componentWillMount () {}

  componentDidMount () {

  }

  /* 获取验证码图片 */
  _getvalidcode(){

  }


  /* 登录 */
  _login=()=>{
    Rn.post(BASEURL_UIM + "rest/uim/frame/frmuser/login", this.state).then((data)=>{
      if(data.result == 'true'){
        Alert.alert("登录成功！");
      }else{
        Alert.alert(data.resultMessage);
      }
    });
  }

  render () {
    return (
      <View style={styles.inputForm}>
        <Avatar
          medium
          rounded
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
          }}
          onPress={() => console.log ('Works!')}
          activeOpacity={0.7}
        />
        <View style={styles.inputBox}>
          <Image
            source={require ('../../img/img1.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputField}
            placeholder="请输入手机号"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(text) => this.setState({mobile:text})}
          />
        </View>
        <View style={styles.inputBox}>
          <Image
            source={require ('../../img/img1.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputField}
            placeholder="请输入验证码"
            keyboardType="number-pad"
            minlength={6}
            maxLength={12}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({invalidcode:text})}
          />
        </View>
        <View style={styles.inputBox}>
          <Image
            source={require ('../../img/img1.png')}
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.inputField}
            placeholder="请输入密码"
            keyboardType="number-pad"
            minlength={6}
            maxLength={12}
            secureTextEntry={true}
            onChangeText={(text) => this.setState({password:text})}
          />
        </View>
        <View>
          <Button
            onPress={this._login}
            title="登录"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  inputForm: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 20,
  },
  inputBox: {
    width: styleUtil.window.width * 0.8,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    marginTop: 20,
    alignItems: 'center',
  },
  inputIcon: {
    width: 40,
    height: 40,
  },
  inputField: {
    height: 40,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: styleUtil.borderSeparator,
    borderColor: styleUtil.borderColor,
    borderRadius: 4,
    marginVertical: 5,
  },
});
