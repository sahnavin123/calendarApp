import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthStackParamList} from '../routes/AuthStack';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CalenderContext} from '../context/CalenderContext';

type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;

const Signup = ({navigation}: SignupScreenProps) => {
  const {text, setIsLoggedIn} = useContext(CalenderContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [emailErrorText, setEmailErrorText] = useState<string>('');
  const [passwordErrorText, setPasswordErrorText] = useState<string>('');
  const [confirmPasswordErrorText, setConfirmPasswordErrorText] =
    useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const handleSubmit = () => {
    if (!email) {
      setEmailErrorText('Please enter your email');
      setError(true);
    } else if (!emailRegex.test(email)) {
      setEmailErrorText('Please enter a valid email. eg:  abc@gmail.com');
      setError(true);
    } else {
      setEmailErrorText('');
      setError(false);
    }

    if (!password) {
      setPasswordErrorText('Please enter your password');
      setError(true);
    } else if (!passwordRegex.test(password)) {
      setPasswordErrorText(
        'Password must be at least 8 characters long and contain at least one special character and one number',
      );
      setError(true);
    } else {
      setPasswordErrorText('');
      setError(false);
    }

    if (!confirmPassword) {
      setConfirmPasswordErrorText('Please re-enter the password');
      setError(true);
    } else if (confirmPassword !== password) {
      setConfirmPasswordErrorText('password & confirm password do not match');
      setError(true);
    } else {
      setConfirmPasswordErrorText('');
      setError(false);
    }

    if (!error) {
      navigation.navigate('Login');
    } else {
      console.log('Button pressed!');
    }
  };

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.headingTextContainer}>
        <Text style={[styles.textColor, styles.headingText]}>Sign Up</Text>
      </View>
      <View style={styles.inputContainer}>
        {/* Email */}
        <TextInput
          keyboardType="email-address"
          value={email}
          onChangeText={inputText => setEmail(inputText)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Email"
          style={styles.input}
        />
        {emailErrorText ? (
          <Text style={styles.errorText}>{emailErrorText}</Text>
        ) : null}

        {/* Password */}
        <TextInput
          value={password}
          onChangeText={inputText => setPassword(inputText)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Password"
          style={styles.input}
          secureTextEntry={true}
        />
        {passwordErrorText ? (
          <Text style={styles.errorText}>{passwordErrorText}</Text>
        ) : null}

        {/* confirm password */}
        <TextInput
          value={confirmPassword}
          onChangeText={inputText => setConfirmPassword(inputText)}
          placeholderTextColor={'#AEAEAE'}
          placeholder="Confirm Password"
          style={styles.input}
          secureTextEntry={true}
        />
        {confirmPasswordErrorText ? (
          <Text style={styles.errorText}>{confirmPasswordErrorText}</Text>
        ) : null}
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.btn}>
        <Text style={styles.btnText}>Register</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAD5E2',
  },
  headingTextContainer: {
    marginBottom: 10,
  },
  inputContainer: {
    width: '80%',
  },
  headingText: {
    fontSize: 30,
  },
  textColor: {
    fontSize: 15,
    color: '#000000',
  },
  input: {
    backgroundColor: '#fef8fa',
    padding: 10,
    height: 40,
    alignSelf: 'center',
    borderRadius: 5,
    width: '100%',
    color: '#1c2940',
    marginTop: 10,
    marginBottom: 5,
  },
  btn: {
    backgroundColor: '#FF6666',
    padding: 10,
    height: 45,
    borderRadius: 9,
    width: '80%',
    marginTop: 20,
  },
  btnText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
  },
});
