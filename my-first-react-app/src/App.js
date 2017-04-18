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
    },
    "popular-list": {
        "display": "flex",
        "flexWrap": "wrap",
        "justifyContent": "space-around"
    },
    "popular-item": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "textAlign": "center"
    },
    "space-list-items": {
        "marginBottom": 7
    },
    "avatar": {
        "width": 150,
        "borderRadius": "50%"
    },
    "align-center": {
        "textAlign": "center"
    },
    "popular-rank": {
        "fontSize": 20,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10
    },
    "nav": {
        "display": "flex"
    },
    "active": {
        "fontWeight": "bold"
    },
    "nav li": {
        "marginTop": 15,
        "marginRight": 15,
        "marginBottom": 15,
        "marginLeft": 15
    },
    "a": {
        "textDecoration": "none",
        "color": "#d0021b"
    },
    "home-container": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center"
    },
    "button": {
        "color": "#e6e6e6",
        "background": "#0a0a0a",
        "border": "none",
        "fontSize": 16,
        "borderRadius": 3,
        "width": 200,
        "textAlign": "center",
        "display": "block",
        "paddingTop": 7,
        "paddingRight": 0,
        "paddingBottom": 7,
        "paddingLeft": 0,
        "marginTop": 10,
        "marginRight": "auto",
        "marginBottom": 10,
        "marginLeft": "auto"
    },
    "button:hover:enabled": {
        "background": "linear-gradient(#1a1a1a,#0a0a0a)",
        "color": "#fff",
        "textDecoration": "none"
    },
    "button:active": {
        "transform": "translateY(1px)"
    },
    "row": {
        "display": "flex",
        "justifyContent": "space-around"
    },
    "column": {
        "display": "flex",
        "flexDirection": "column",
        "width": 500,
        "alignItems": "center"
    },
    "column label": {
        "textAlign": "center",
        "fontSize": 30,
        "fontWeight": "200"
    },
    "header": {
        "textAlign": "center",
        "fontSize": 30,
        "fontWeight": "200"
    },
    "column input": {
        "borderRadius": 3,
        "marginTop": 15,
        "marginRight": 2,
        "marginBottom": 15,
        "marginLeft": 2,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "border": "1px solid rgba(0,0,0,0.43)",
        "fontSize": 16,
        "width": "80%"
    },
    "reset": {
        "border": "none",
        "background": "transparent",
        "color": "#d0021b",
        "display": "block",
        "width": "100%",
        "textAlign": "center"
    },
    "reset:hover": {
        "cursor": "pointer"
    }
});