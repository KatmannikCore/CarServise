function CreateMenu(){
    let menu = document.createElement('header');
    menu.innerHTML = `
                    <input type="checkbox" id="nav-toggle" hidden>
                    <nav class="nav">
                        <div class="logo">
                            <img src='/images/header/logoDemo.png' alt=''>
                        </div>
                        <ul>
                            <li><p><a>Меню</a></p>
                            <li><p><a href="../../Index.html">Главная</a></p>
                            <li><p><a href="">Контакты</a></p>
                            <li><p><a href="">Услуги</a></p>
                            <li><p><a href="">Блог</a></p>
                            <li><p><a href="">Галерея</a></p>
                            <li><p><a href="">Контакты</a></p>
                            <li>
                                <div class="button_wrapper">
                                    <div class='button'>Записаться</div>
                                </div>
                           <li>
                        </ul>
                    </nav>
                    
                    <div class='AllHeader menu'>
                        <nav class='First'>
                            <a href=''>Меню</a>
                            <a href=''>Контакты</a\>
                            <a href=''>Услуги</a>
                            <a href=''>Блог</a>
                            <a href=''>Галерея</a>
                            <a href=''>Контакты</a>
                        </nav>
                        
                        <nav class="number" style='color: aliceblue;'> +7 (495) 227-79-45 <br>  +7 (915) 480-12-22</nav>
                        <nav class='Second'>
                            <img src='/images/header/logoDemo.png' alt=''>
                            <div class='button'>Записаться</div>
                        </nav>
                    </div>`
    return menu;
}
export {CreateMenu};