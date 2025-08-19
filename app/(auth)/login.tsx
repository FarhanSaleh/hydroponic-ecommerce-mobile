import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { validateWithZod } from "@/lib/utils";
import { schemaFormLogin, SchemaFormLogin } from "@/schemas/auth";
import { Link } from "expo-router";
import { Formik } from "formik";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const initialValues: SchemaFormLogin = {
    email: "",
    password: "",
  };

  return (
    <KeyboardAvoidingView
      style={style.body}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.title}>Selamat Datang</Text>
          <Text style={style.text}>Login untuk masuk kedalam aplikasi</Text>
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validate={validateWithZod(schemaFormLogin)}
        >
          {({
            handleSubmit,
            handleChange,
            values,
            handleBlur,
            touched,
            errors,
          }) => (
            <>
              <View style={style.formContainer}>
                <TextInput
                  style={style.input}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Email"
                  keyboardType="email-address"
                  value={values.email}
                />
                {touched.email && errors.email && (
                  <Text style={style.error}>{errors.email}</Text>
                )}
                <TextInput
                  style={style.input}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  secureTextEntry
                  placeholder="Password"
                  value={values.password}
                />
                {touched.password && errors.password && (
                  <Text style={style.error}>{errors.password}</Text>
                )}
              </View>
              <Button onPress={() => handleSubmit()}>
                <Text style={{ fontWeight: "bold" }}>Login</Text>
              </Button>
            </>
          )}
        </Formik>
        <Link style={style.registerLink} href={"/register"}>
          <Text>Belum punya akun? </Text>
          <Text style={{ fontWeight: "bold" }}>Daftar disini!</Text>
        </Link>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const style = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: Colors.main.background,
  },
  container: {
    alignItems: "center",
    paddingHorizontal: 30,
    gap: 16,
  },
  headerContainer: {
    alignItems: "center",
    gap: 4,
  },
  formContainer: {
    gap: 4,
    width: "100%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  text: {
    fontSize: 12,
    color: Colors.main.accent,
  },
  registerLink: {
    fontSize: 12,
    textDecorationLine: "underline",
  },
  input: {
    borderColor: Colors.main.accent,
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
  },
  error: {
    color: "red",
  },
});
