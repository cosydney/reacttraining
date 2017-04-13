import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontFamily": "sans-serif"
    },
    "container": {
        "maxWidth": 1200,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "ul": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "languages": {
        "display": "flex",
        "justifyContent": "center"
    },
    "li": {
        "listStyleType": "none"
    },
    "languages li": {
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "fontWeight": "bold",
        "cursor": "pointer"
    },
    "App": {
        "textAlign": "center"
    },
    "App-logo": {
        "animation": "App-logo-spin infinite 20s linear",
        "height": 80
    },
    "App-header": {
        "backgroundColor": "#222",
        "height": 150,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "color": "white"
    },
    "App-intro": {
        "fontSize": "large"
    }
});