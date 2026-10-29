import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    router.push({
      pathname: "/register",
    });
  }

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Error", "Todos los campos son obligatorios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert("Error", "El correo electrónico no es válido.");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Error", "La contraseña debe tener al menos 8 caracteres.");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      Alert.alert("Error", "Incluye al menos una letra mayúscula :v.");
      return;
    }

    if (!/[a-z]/.test(password)) {
      Alert.alert("Error", "Incluye al menos una letra minúscula.");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      Alert.alert("Error", "Incluye al menos un carácter especial.");
      return;
    }

    Alert.alert("Éxito", "Iniciando sesión.");
    setEmail("");
    setPassword("");
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={styles.image}
      />

      <Text style={styles.label}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry={true}
      />

      <View style={styles.buttonContainer}>
        <Button title="Ingresar" onPress={handleLogin} color="#841584" />
      </View>
      <Button title="Registro" onPress={onRegister}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  label: {
    width: "100%",
    fontSize: 14,
    marginBottom: 5,
    fontWeight: "600",
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    width: "50%",
    marginTop: 10,
  },
});