import { Link } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function Page() {
	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Link
					href='/search'
					asChild
				>
					<Pressable style={styles.searchBar}>
						<Text>Search for doctor's appointments...</Text>
						<AntDesign
							name='search1'
							size={24}
							color='black'
						/>
					</Pressable>
				</Link>
				<Text style={styles.title}>Hello World</Text>
				<Text style={styles.subtitle}>This is the first page of your app.</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 24,
	},
	main: {
		flex: 1,

		maxWidth: 960,
		marginHorizontal: 'auto',
	},
	searchBar: {
		borderWidth: StyleSheet.hairlineWidth,
		padding: 10,
		borderRadius: 50,
		backgroundColor: '#ffffff',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	title: {
		fontSize: 64,
		fontWeight: 'bold',
	},
	subtitle: {
		fontSize: 36,
		color: '#38434D',
	},
})
