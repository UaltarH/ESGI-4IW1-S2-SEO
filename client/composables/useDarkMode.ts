export const useDarkMode = () => {
    // const toggleDarkMode = (e: Event) => {
    //     console.log(e)
    //     if(e.target === null) {
    //         return;
    //     }
    //     if(!(e.target instanceof HTMLInputElement))
    //         return;
    //     applyDarkMode(e.target.checked);
    //     localStorage.setItem("darkMode", e.target.checked.toString());
    // };
    const toggleDarkMode = (e: Event) => {
        console.log(e)
        if(e.target === null) {
            return;
        }
        if(!(e.target instanceof HTMLElement))
            return;
        applyDarkMode();
        // localStorage.setItem("darkMode", e.target.checked.toString());
    };
    const applyDarkMode = (() => {
        const html = document.getElementsByTagName("html")[0];
        const toggle = document.getElementById("dark-mode-toggle");
        if(toggle === null) {
            return;
        }
        html.classList.toggle("dark");
    });
    const loadDarkModePreference = (() => {
        const darkMode = localStorage.getItem("darkMode");
        const isDarkMode = darkMode === "true";
        applyDarkMode(isDarkMode);
    });
    return {toggleDarkMode, loadDarkModePreference};
};