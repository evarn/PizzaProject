import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type = "PRIMARY"}) => {
	return (
		<Pressable 
			onPress={onPress} 
			style={[styles.container, styles[`container_${type}`]]}>
			<Text style={[styles.text, styles[`text_${type}`]]}> {text} </Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 15,
		marginVertical: 5,
		alignItems: 'center',
		borderRadius: 5,
        
	},
	container_PRIMARY: {
		backgroundColor: '#ffb400',
	},
	container_TERTIARY: {
		backgroundColor: '#381F3',
	},
	text: {
		fontWeight: 'bold',
		color: 'black',   
	},
	text_TERTIARY: {
		fontWeight: 'bold',
		color: 'gray',
	},

});

export default CustomButton;
			