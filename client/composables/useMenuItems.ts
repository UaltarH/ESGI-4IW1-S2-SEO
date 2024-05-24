import {reactive} from "vue";

export const useMenuItems = () => {
    const menuItems = reactive([
        {
            title: 'Home',
            icon: '',
            route: '/',
            access: 'all',
        },
        {
            title: 'Articles',
            icon: '',
            route: '/articles',
            access: 'all',
        },
    ]);

    return {menuItems}
}