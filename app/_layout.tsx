import React from 'react'
import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper'

const RootLayout = () => {
	return (
		<PaperProvider>
			<Stack>
				<Stack.Screen
					name='index'
					options={{ title: 'Find doctors' }}
				/>
				<Stack.Screen name='search' />
			</Stack>
		</PaperProvider>
	)
}

export default RootLayout
