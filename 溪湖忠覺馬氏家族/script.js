const toggleSidebar = ()=>{
    const sidebar = document.querySelector('.sidebar');
    const openMenu = document.querySelector('.open-menu');

    sidebar.classList.toggle('active');
    openMenu.classList.toggle('hidden');
}