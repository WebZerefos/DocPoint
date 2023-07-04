import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import DoctorListItem from '../src/components/DoctorListItem'
import searchData from '../data/search.json'

const Search = () => {
	const navigation = useNavigation()
	const [search, setSearch] = useState('')
	const [filteredDoctors, setFilteredDoctors] = useState()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerSearchBarOptions: {
				onChangeText: (e) => setSearch(e.nativeEvent.text),
			},
		})
	}, [navigation])

	useEffect(() => {
		setFilteredDoctors(searchData.filter((doc) => doc.name.toLowerCase().includes(search.toLowerCase()) || doc.specialty.toLowerCase().includes(search.toLowerCase())))
	}, [search])
	return (
		<View style={styles.container}>
			<FlatList
				showsVerticalScrollIndicator={false}
				data={filteredDoctors}
				renderItem={({ item }) => <DoctorListItem doctor={item} />}
				contentInsetAdjustmentBehavior='automatic'
			/>
		</View>
	)
}

export default Search

const styles = StyleSheet.create({
	container: {
		padding: 10,
		backgroundColor: '#ffffff',
	},
})
