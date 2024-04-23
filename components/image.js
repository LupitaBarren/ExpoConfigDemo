import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const ImageDisplay = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.logo}
            source={{uri:'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*7oj_gZMO7AH2qNzQRsEmrg.jpeg'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: "center",
    },
    logo: {
        width: 280,
        height: 216,
    },
});

export default ImageDisplay;