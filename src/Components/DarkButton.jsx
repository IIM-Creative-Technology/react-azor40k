import '../Sass/components/DarkButton.scss';

const DarkButton = ({ setDarkMode }) => {

    const toDarkMode = () => {
        setDarkMode(prevState => !prevState)
    }

    return <button className="dark-button" onClick={toDarkMode}>Dark Mode</button>
};

export default DarkButton;