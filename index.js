// Import Library to help create a component
import React from 'react';
// eslint-disable-next-line prettier/prettier
import { AppRegistry, View } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header headerText='Albums' />
            <AlbumList />
        </View>

    )
}
// Render it to the device
AppRegistry.registerComponent('albums', () => App);
