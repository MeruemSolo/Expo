// components/ProgrammingLanguageCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProgrammingLanguageCard = ({ title, experience, logo }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: logo }} style={styles.logo} />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.experience}>{experience}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        margin: 10,
        borderRadius: 8,
        backgroundColor: '#f9f9f9',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    experience: {
        fontSize: 14,
        color: '#777',
    },
    logo: {
        width: 50,
        height: 50,
        marginBottom: 10,
    },
});

export default ProgrammingLanguageCard;