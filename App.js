import React from "react";
import { Provider } from "react-redux";
import initializeStore from "./src/store";
import Navigation from "./src/navigation";

const store = initializeStore();

export default function App() {
    return (
        <Provider store={ store }>
            <Navigation />
        </Provider>
    );
}