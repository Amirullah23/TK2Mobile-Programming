import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const HomeScreen = () => {
  // Assuming the images are in the root of your project folder
  const images = [
    { src: require('./a.jpg'), title: 'Amir' },
    { src: require('./b.jpg'), title: 'Noval and Asuna' },
    { src: require('./c.jpg'), title: 'Lesley' }
  ];

  return (
    <ScrollView style={styles.container}>
      {images.map((image, index) => (
        <Card key={index} style={styles.card}>
          <Card.Content>
            <Title>{image.title}</Title>
          </Card.Content>
          <Card.Cover source={image.src} />
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});

export default HomeScreen;
