import React, { Component } from 'react';
import { View, TextInput } from 'react-native';


export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: props.placeholder,
    }
  }

  componentWillMount() {
	
  }
  
  componentDidMount() {
	
  }
  
  render() {
    let input;
    if (!this.props.leftIcon && !this.props.rightIcon){
      input = (
        <View>
          <TextInput style={{height: 40}}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.setState({text})}></TextInput>
        </View>
      );
     
    }else if(this.props.leftIcon && this.props.rightIcon){
      input = (
        <View>
          <TextInput style={{height: 40}}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.setState({text})}></TextInput>
          <Image source={this.props.leftIcon} />;
        </View>
      )
    }else if(this.props.leftIcon){
      input = (
        <View>
          <Image source={this.props.leftIcon} />;
          <TextInput style={{height: 40}}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.setState({text})}></TextInput>
        </View>
      )
    }else if(this.props.rightIcon){
      input = (
        <View>
          <TextInput style={{height: 40}}
            placeholder={this.props.placeholder}
            onChangeText={(text) => this.setState({text})}></TextInput>
          <Image source={this.props.leftIcon} />;
        </View>
      )
    };
    return input;
  }

}