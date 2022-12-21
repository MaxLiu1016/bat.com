export default () => {
    const darkMode = useState('darkMode', () => true)
    return {
        darkMode,
    }
}