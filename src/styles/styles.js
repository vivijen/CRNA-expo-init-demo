import { StyleSheet } from 'react-native';
import styleUtil from '../common/styleUtil';

export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: styleUtil.backgroundColor,
	},
	signUpBox: {
		marginTop: 10,
		padding: 10
	},
	title: {
		marginBottom: 20,
		color: '#333',
		fontSize: 20,
		textAlign: "center"
	},
	inputForm: {
		display: 'flex',
		alignItems: 'center',
	},
	inputBox: {
		width: styleUtil.window.width * 0.8,
		display: 'flex',
		flexDirection: 'row',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#000000',
		marginTop: 20,
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
	},
	buttonBox: {
		backgroundColor: styleUtil.themeColor,
		padding: 12,
		height: 50,
		marginTop: 20,
		borderWidth: 1,
		borderColor: styleUtil.themeColor,
		borderRadius: 4
	},
	buttonText: {
		fontSize: 20,
		color: '#fff',
		textAlign: 'center'
	},
	passwordBox: {
		flexDirection: 'row',
		marginTop: 10,
		justifyContent: 'space-between'
	},
	countBtn: {
		width: 110,
		height: 40,
		padding: 10,
		marginLeft: 8,
		borderWidth: 1,
		borderColor: styleUtil.themeColor,
		backgroundColor: styleUtil.themeColor,
		borderRadius: 4
	},
	countBtnText: {
		textAlign: 'center',
		color: '#fff',
		fontSize: 16
	},
	closeModal: {
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center'
	}
});