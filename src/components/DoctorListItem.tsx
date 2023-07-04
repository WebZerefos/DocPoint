import React from 'react'
import { View, Image, Text, StyleSheet, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'

const DoctorCard = ({ doctor }) => {
	return (
		<Link
			href={`/doctor/${doctor.id}`}
			asChild
		>
			{
				<Pressable style={styles.container}>
					<View style={styles.imageContainer}>
						<Image
							source={{ uri: doctor.image }}
							style={styles.image}
						/>
					</View>
					<View style={styles.detailsContainer}>
						<Text style={styles.name}>{doctor.name}</Text>
						<Text style={styles.specialty}>{doctor.specialty}</Text>
					</View>
					<Feather
						name='chevron-right'
						style={styles.arrowIcon}
					/>
				</Pressable>
			}
		</Link>
	)
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: '#FFF',
		borderRadius: 15,
		padding: 10,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		elevation: 2,
		marginBottom: 8,
	},
	imageContainer: {
		marginRight: 10,
	},
	image: {
		width: 50,
		height: 50,
		borderRadius: 40,
	},
	detailsContainer: {
		flex: 1,
		marginRight: 10,
	},
	name: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	specialty: {
		fontSize: 14,
		color: '#888',
	},
	arrowIcon: {
		fontSize: 20,
		color: '#888',
	},
})

export default DoctorCard
