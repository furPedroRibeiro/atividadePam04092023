import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import {ParagraphA, ParagraphB, ParagraphC} from './components/paragraphs';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ParagraphA/> 
      <ParagraphB/> 
      <ParagraphC/>
      <StatusBar 
      barStyle = "light-content"
      backgroundColor = "#151515"
    />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
    display: 'flex',
    flexDirection: 'column',
    gap: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
