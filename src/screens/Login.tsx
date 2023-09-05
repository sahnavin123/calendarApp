import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {CalenderContext} from '../context/CalenderContext';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../routes/AuthStack';

type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

const Login = ({navigation}: LoginScreenProps) => {
  const {setIsLoggedIn} = useContext(CalenderContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailErrorText, setEmailErrorText] = useState<string>('');
  const [passwordErrorText, setPasswordErrorText] = useState<string>('');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

  const handleLogin = () => {
    if (!email) {
      setEmailErrorText('Please enter your email');
    } else if (!emailRegex.test(email)) {
      setEmailErrorText('Please enter a valid email. eg:  abc@gmail.com');
    } else {
      setEmailErrorText('');
    }

    if (!password) {
      setPasswordErrorText('Please enter your password');
    } else if (!passwordRegex.test(password)) {
      setPasswordErrorText(
        'Password must be at least 8 characters long and contain at least one special character and one number',
      );
    } else {
      setPasswordErrorText('');
    }

    if (emailErrorText.length > 0 || passwordErrorText.length > 0) {
      return;
    } else {
      console.log('Button pressed!');
    }
    // setIsLoggedIn(true);
  };

  const handleCreateAccount = () => {
    navigation.navigate('Signup');
  };

  return (
    <SafeAreaView style={styles.viewContainer}>
      <View style={styles.headingTextContainer}>
        <Text style={[styles.textColor, styles.headingText]}>
          CalenderApp!!
        </Text>
        <Text style={styles.textColor}>Wellcome back</Text>
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

        <Text style={[styles.textColor, styles.recoveryText]}>
          Recovery Password
        </Text>
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.signupAccountContainer}>
        <Text style={[styles.textColor, styles.queryText]}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={handleCreateAccount}>
          <Text style={styles.createAccountText}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#CAD5E2',
  },
  headingTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
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
  recoveryText: {
    textAlign: 'right',
    color: '#808080',
    marginTop: 4,
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
  signupAccountContainer: {
    marginTop: 15,
    marginStart: 6,
    width: '80%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  queryText: {
    fontSize: 12,
  },
  createAccountText: {
    color: '#383CC1',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
  },
});
