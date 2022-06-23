import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const HomePage = () => {
	
	return (

		<View style = {styles.root}>
			<Text style = {styles.text}> Ееее бой </Text>
		</View>


	);
};

const styles = StyleSheet.create(
	{
		root: {
			flex: 1,
			justifyContent: "center",
    		alignItems: "center",
			padding: 20,
			
		},
		text: {
			fontSize: 100,
			textAlign: "center",
			margin: 10,
		}	
	}
);

export default HomePage;
