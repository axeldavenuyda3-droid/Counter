import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, useColorScheme } from 'react-native';

// Component 1: Display
function Display({ value, dark }) {
  return (
    <Text style={[styles.number, dark ? styles.numberDark : styles.numberLight]}>
      {value}
    </Text>
  );
}

// Component 2: TallyButton
function TallyButton({ label, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}

// Component 3: App (main)
export default function App() {
  const dark = useColorScheme() === 'dark';
  const [count, setCount] = useState(0);

  const buttons = [
    { label: '−', action: () => setCount(count - 1) },
    { label: 'Reset', action: () => setCount(0) },
    { label: '+', action: () => setCount(count + 1) },
  ];

  return (
    <View style={[styles.container, dark ? styles.bgDark : styles.bgLight]}>
      <Text style={[styles.title, dark ? styles.titleDark : styles.titleLight]}>
        Tap Tally
      </Text>
      <Display value={count} dark={dark} />
      <View style={styles.row}>
        {buttons.map((b) => (
          <TallyButton key={b.label} label={b.label} onPress={b.action} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  bgLight: { backgroundColor: '#F0FDFA' },
  bgDark: { backgroundColor: '#0F172A' },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 16 },
  titleLight: { color: '#0F766E' },
  titleDark: { color: '#5EEAD4' },
  number: { fontSize: 96, fontWeight: 'bold', marginBottom: 32 },
  numberLight: { color: '#334155' },
  numberDark: { color: '#E2E8F0' },
  row: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' },
  button: {
    backgroundColor: '#0D9488',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 32,
    margin: 8,
  },
  pressed: { backgroundColor: '#115E59' },
  buttonText: { color: '#FFFFFF', fontSize: 24, fontWeight: 'bold' },
});
