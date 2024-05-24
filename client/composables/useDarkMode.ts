export const useDarkMode = () => {
    const toggleDarkMode = (e: Event) => {
        if(e.target === null) {
            return;
        }
        if(!(e.target instanceof HTMLInputElement))
            return;
        applyDarkMode(e.target.checked);
        localStorage.setItem("darkMode", e.target.checked.toString());
    }
    const applyDarkMode = ((checked: boolean) => {
        const html = document.getElementsByTagName("html")[0];
        const toggle = document.getElementById("dark-mode-toggle");
        if(toggle === null) {
            return;
        }
        else {
            (toggle as HTMLInputElement).checked = checked;
        }
        if(checked) {
            html.classList.add("dark");
        } else {
            html.classList.remove("dark");
        }
    });
    const loadDarkModePreference = (() => {
        const darkMode = localStorage.getItem("darkMode");
        const isDarkMode = darkMode === "true";
        applyDarkMode(isDarkMode);
    });
    return {toggleDarkMode, loadDarkModePreference}
}