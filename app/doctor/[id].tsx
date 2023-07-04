import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router'

const DoctorScreen = () => {
	const { id } = useSearchParams()
	return (
		<View>
			<Text>Doctor:{id}</Text>
		</View>
	)
}

export default DoctorScreen

const styles = StyleSheet.create({})
