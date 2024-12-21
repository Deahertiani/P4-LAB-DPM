import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

const FutsalScoreApp = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [winner, setWinner] = useState('');

  const teamA = "Tim A";
  const teamB = "Tim B";

  const increaseScore = (team) => {
    if (team === 'A' && scoreA < 10 && scoreB < 10) {
      const newScore = scoreA + 1;
      setScoreA(newScore);
      if (newScore === 10) {
        setWinner(`${teamA} Menang! 🎉`);
        Alert.alert(`${teamA} Menang! 🎉`);
      }
    } else if (team === 'B' && scoreB < 10 && scoreA < 10) {
      const newScore = scoreB + 1;
      setScoreB(newScore);
      if (newScore === 10) {
        setWinner(`${teamB} Menang! 🎉`);
        Alert.alert(`${teamB} Menang! 🎉`);
      }
    }
  };

  const decreaseScore = (team) => {
    if (team === 'A' && scoreA > 0) {
      setScoreA(scoreA - 1);
    } else if (team === 'B' && scoreB > 0) {
      setScoreB(scoreB - 1);
    }
  };

  const resetScores = () => {
    setScoreA(0);
    setScoreB(0);
    setWinner('');
    Alert.alert("Reset Skor", "Skor telah direset ke nol.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PERTANDINGAN FUTSAL</Text>

      {winner ? (
        <View style={styles.resultBox}>
          <Text style={styles.winnerText}>{winner}</Text>
        </View>
      ) : null}

      <View style={styles.teamContainer}>
        <View style={styles.resultBox}>
          <Text style={styles.teamName}>{teamA}</Text>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => increaseScore('A')} disabled={scoreA === 10 || scoreB === 10} />
            <Button title="-" onPress={() => decreaseScore('A')} />
          </View>
        </View>
      </View>

      <View style={styles.teamContainer}>
        <View style={styles.resultBox}>
          <Text style={styles.teamName}>{teamB}</Text>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.buttonRow}>
            <Button title="+" onPress={() => increaseScore('B')} disabled={scoreB === 10 || scoreA === 10} />
            <Button title="-" onPress={() => decreaseScore('B')} />
          </View>
        </View>
      </View>

      <View style={styles.resetButton}>
        <Button title="Reset Skor" onPress={resetScores} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6', // Biru muda
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultBox: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
  },
  winnerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#28a745',
  },
  teamContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 48,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    marginTop: 10,
  },
  resetButton: {
    marginTop: 30,
  },
});

export default FutsalScoreApp;
