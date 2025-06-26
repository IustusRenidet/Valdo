import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

const Stack = createNativeStackNavigator();

function FeedScreen() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const snap = await getDocs(collection(db, 'posts'));
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(data);
      } catch (err) {
        console.error('Error loading posts', err);
      }
    }
    fetchPosts();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.caption}>{item.caption}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Valdo</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const palette = {
  color1: '#5a3938',
  color2: '#847b6d',
  color3: '#a3ab98',
  color4: '#d2d5af',
  color5: '#dfa49b',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: palette.color3,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: palette.color5,
    textAlign: 'center',
    marginVertical: 16,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: palette.color4,
    borderColor: palette.color1,
    borderWidth: 2,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 200,
    backgroundColor: palette.color2,
  },
  caption: {
    color: palette.color1,
    marginTop: 4,
  },
});
