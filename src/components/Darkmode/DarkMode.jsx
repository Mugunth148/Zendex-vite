import "./DarkMode.scss";

const DarkMode = () => {

    const setDarkMode = () => {
        document.querySelector('#root').setAttribute('data-theme', 'dark');
    };
    const setLightMode = () => {
        document.querySelector('#root').setAttribute('data-theme', 'light');
    };

    const toggleTheme= (e) => {

        if (e.target.checked) {
            setDarkMode()
        }
        else {
            setLightMode()
        }
    }

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>
            </label>
        </div>
    );
};

export default DarkMode
