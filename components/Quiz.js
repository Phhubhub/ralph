import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import BottomNav from "./bottomNav";

const Quiz = ({ navigation }) => {
  const quizTopics = [
    {
      title: "Geography",
      questions: [
        {
          question: "What is the capital of the Philippines?",
          answers: [
            { text: "Manila", correct: true },
            { text: "Cebu", correct: false },
            { text: "Davao", correct: false },
            { text: "Quezon City", correct: false },
          ],
        },
        {
          question: "Which island is known as the Pearl of the Orient Seas?",
          answers: [
            { text: "Mindanao", correct: false },
            { text: "Luzon", correct: true },
            { text: "Palawan", correct: false },
            { text: "Visayas", correct: false },
          ],
        },
      ],
    },
    // ... other topics remain unchanged
  ];

  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentTopic = quizTopics[currentTopicIndex];
  const currentQuestion = currentTopic.questions[currentQuestionIndex];

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      setFeedback("Wrong! The correct answer was: " + currentQuestion.answers.find(a => a.correct).text);
    }
  };

  const handleNextQuestion = () => {
    if (!selectedAnswer) {
      Alert.alert("No answer selected!", "Please choose an answer before proceeding.");
      return;
    }

    if (currentQuestionIndex < currentTopic.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentTopicIndex < quizTopics.length - 1) {
      setCurrentTopicIndex(currentTopicIndex + 1);
      setCurrentQuestionIndex(0);
    } else {
      setQuizCompleted(true);
      Alert.alert("Quiz finished!", `Your score: ${score}/${quizTopics.length * 2}`);
      resetQuiz();
    }

    // Reset selection and feedback for the next question
    setSelectedAnswer(null);
    setFeedback("");
  };

  const resetQuiz = () => {
    setCurrentTopicIndex(0);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setFeedback("");
    setQuizCompleted(false);
  };

  return (
    <ImageBackground 
      source={require('./assets/images/quizbg.png')} 
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.header}>{currentTopic.title}</Text>
        <View>

        </View>
        <View style={styles.card}>
          {!quizCompleted ? (
            <>
              <Text style={styles.question}>{currentQuestion.question}</Text>
              {currentQuestion.answers.map((answer, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.answerButton,
                    selectedAnswer === answer && styles.selectedAnswer,
                  ]}
                  onPress={() => handleAnswerSelect(answer)}
                >
                  <Text style={styles.answerText}>{answer.text}</Text>
                </TouchableOpacity>
              ))}
              {feedback && <Text style={styles.feedback}>{feedback}</Text>}
              <TouchableOpacity
                style={styles.nextButton}
                onPress={handleNextQuestion}
                disabled={!selectedAnswer} // Disable if no answer is selected
              >
                <Text style={styles.nextButtonText}>Next</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.finalScore}>Your final score: {score}/{quizTopics.length * 2}</Text>
            
          )}
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        <BottomNav navigation={navigation} currentScreen="Quiz" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#635C5C",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  question: {
    fontSize: 18,
    color: "#635C5C",
    marginBottom: 10,
  },
  answerButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#95725A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 15,
  },
  selectedAnswer: {
    backgroundColor: "#6A4A3C",
  },
  answerText: {
    color: "white",
    fontSize: 16,
  },
  feedback: {
    marginTop: 10,
    fontSize: 16,
    color: "#635C5C",
  },
  nextButton: {
    width: "80%",
    height: 50,
    backgroundColor: "#95725A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 20,
    left: "10%",
  },
  nextButtonText: {
    color: "white",
    fontSize: 20,
 
  },
  finalScore: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#635C5C",
    marginTop: 20,
    textAlign: "center",
  },
  button: {
    marginBottom: 20,
  },
  buttonText: {
    color: "#95725A",
    fontSize: 18,
    marginTop: 20,
    top: 50,
  },
});

export default Quiz;
