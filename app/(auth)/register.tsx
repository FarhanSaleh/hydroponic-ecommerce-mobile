import Button from "@/components/Button";
import { Colors } from "@/constants/Colors";
import { validateWithZod } from "@/lib/utils";
import { schemaFormRegister, SchemaFormRegister } from "@/schemas/auth";
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

export default function RegisterScreen() {
  const initialValues: SchemaFormRegister = {
    name: "",
    email: "",
    phone_number: "",
    password: "",
  };

  return (
    <KeyboardAvoidingView
      style={style.body}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView style={style.container}>
        <View style={style.headerContainer}>
          <Text style={style.title}>Buat Akun</Text>
          <Text style={style.text}>Login untuk masuk kedalam aplikasi</Text>
        </View>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => console.log(values)}
          validate={validateWithZod(schemaFormRegister)}
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
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  placeholder="Nama"
                  keyboardType="default"
                  value={values.name}
                />
                {touched.name && errors.name && (
                  <Text style={style.error}>{errors.name}</Text>
                )}
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
                  onChangeText={handleChange("phone_number")}
                  onBlur={handleBlur("phone_number")}
                  keyboardType="phone-pad"
                  placeholder="Nomor Telepon"
                  value={values.phone_number}
                />
                {touched.phone_number && errors.phone_number && (
                  <Text style={style.error}>{errors.phone_number}</Text>
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
                <Text style={{ fontWeight: "bold" }}>Buat Akun</Text>
              </Button>
            </>
          )}
        </Formik>
        <Link style={style.loginLink} href={"/login"}>
          <Text>Sudah punya akun? </Text>
          <Text style={{ fontWeight: "bold" }}>Login disini!</Text>
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
  loginLink: {
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
