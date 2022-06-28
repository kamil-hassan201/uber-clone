import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";

import Navigator from "./src/components/Navigator";
import { store } from "./src/redux/store";

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <KeyboardAvoidingView
                    keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                >
                    <Navigator />
                </KeyboardAvoidingView>
            </SafeAreaProvider>
        </Provider>
    );
}
