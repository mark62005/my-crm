import AsyncStorage from "@react-native-async-storage/async-storage";

// add or update
export const set = async (key, value) => {
    console.log("SAVING TO ASYNCSTORAGE ::: ", key, value);

    try {
        const jsonValue = JSON.stringify(value);
        return await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
        return { error: "Failed to save to AsyncStorage" };
    }
};

// load
export const get = async (key) => {
    console.log("LOADING FROM ASYNCSTORAGE ::: ", key);

    try {
        const data = await AsyncStorage.getItem(key);
        return JSON.parse(data);
    } catch (e) {
        return { error: "Failed to load from AsyncStorage" };
    }
};

// clear
export const clear = async () => {
    console.log("ClEARING DATA FROM ASYNCSTORAGE");

    try {
        return await AsyncStorage.clear();
    } catch (e) {
        return { error: "Failed to clear AsyncStorage" };
    }
};