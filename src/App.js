import Jumbutron from "./components/Jumbutron";
import SearchField from "./components/SearchField";
import Images from "./components/Images";
import useAxios from "./hooks/useAxios";
import {UNSPLASH_ACCESS_KEY} from "./.secrets/Keys";
import {createContext, useState} from "react";

// Create Context
export const ImageContext = createContext();

function App() {
    const [searchImage, setSearchImage] = useState('');
    const {
        response,
        isLoading,
        error,
        fetchData
    } = useAxios(`search/photos?page=1&query=cats&client_id=${UNSPLASH_ACCESS_KEY}`);

    const value = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
    }

    return (
        <ImageContext.Provider value={value}>
            <Jumbutron>
                <SearchField/>
            </Jumbutron>
            <Images/>
        </ImageContext.Provider>
    );
}

export default App;
