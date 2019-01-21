import React, {Component} from 'react';
import {View, StyleSheet, TextInput, Image } from 'react-native';
import styleUtil from '../../common/styleUtil';
import { Avatar } from 'react-native-elements';

export default class SignIn extends Component {
  constructor (props) {
    super (props);
    this.state = {
      name: '',
      idno: '',
      mobile: '',
      invalidcode: '',
      password: '',
      repassword: '',
    };
  }

  componentWillMount () {}

  componentDidMount () {}

  render () {
    const {name, idno, mobile, invalidcode, password, repassword} = this.state;
    return (
      <View style={styles.inputForm}>
        <Avatar
          medium
          rounded
          source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
        />
        <View style={styles.inputBox}>
          <Image source={require ('../../img/img1.png')} style={styles.inputIcon} />
          <TextInput
            placeholder="请输入姓名"
            style={styles.inputField}
            value={name}
            onChangeText={text => {
              this.setState ({name: text});
            }}
          />
        </View>
        <View style={styles.inputBox}>
          <Image source={require ('../../img/img1.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.inputField}
            placeholder="请输入身份证号"
            value={idno}
            onChangeText={text => this.setState ({idno: text})}
          />
        </View>
        <View style={styles.inputBox}>
          <Image source={require ('../../img/img1.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.inputField}
            placeholder="请输入手机号"
            value={mobile}
            onChangeText={text => this.setState ({mobile: text})}
          />
        </View>
        <View style={styles.inputBox}>
          <Image source={require ('../../img/img1.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.inputField}
            placeholder="请输入验证码"
            value={invalidcode}
            onChangeText={text => this.setState ({invalidcode: text})}
          />
        </View>
        <View style={styles.inputBox}>
          <Image source={require ('../../img/img1.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.inputField}
            placeholder="请输入6-15位密码"
            value={password}
            onChangeText={text => this.setState ({password: text})}
          />
        </View>
        <View style={styles.inputBox}>
          <Image source={require ('../../img/img1.png')} style={styles.inputIcon} />
          <TextInput
            style={styles.inputField}
            placeholder="请再次输入6-15位密码"
            value={repassword}
            onChangeText={text => this.setState ({repassword: text})}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
		alignItems:'center',
		backgroundColor: '#fff',
		borderWidth: styleUtil.borderSeparator,
		borderColor: styleUtil.borderColor,
		borderRadius: 4,
		marginVertical: 5
	}
});
