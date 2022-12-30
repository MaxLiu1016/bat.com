export default () => {
    const darkMode = useState("darkMode", () => false);
    return {
        darkMode,
    };
};
