function CreateMenu(urlLogo){
    let menu = document.createElement('header');
    menu.innerHTML = `<nav class='AllHeader'>
                        <nav class='First'>
                            <a href=''>Меню</a>
                            <a href=''>Контакты</a\>
                            <a href=''>Услуги</a>
                            <a href=''>Блог</a>
                            <a href=''>Галерея</a>
                            <a href=''>Контакты</a>
                        </nav>
                        <nav style='color: aliceblue;'> +7 (495) 227-79-45 <br>  +7 (915) 480-12-22</nav>
                        <nav class='Second'>
                            <img src='/images/header/logoDemo.png' alt=''>
                            <div class='button'>
                                Записаться
                            </div>
                        </nav>
                    </nav>`
    return menu;
}
export {CreateMenu};