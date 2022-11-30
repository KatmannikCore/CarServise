<?php header("Content-Type: text/html; charset=utf-8");?>
<?php
$name = $_POST['user_name'];
$last_name = $_POST['user_last-name'];
$auto = $_POST['auto'];
$name = htmlspecialchars($name);
$last_name = htmlspecialchars($last_name);
$auto = htmlspecialchars($auto);
$name = urldecode($name);
$last_name = urldecode($last_name);
$auto = urldecode($auto);
if (mail(
"ctonagornay@gmail.com",
"Заявка с сайта", 
"Имя: $name.. Фамилия: $last_name Машина: $auto" ,
"From:ivan932@yandex.ru \r\n Content-type: text/html; charset==Windows-1251\r\n  X-Mailer: PHP mail script"
))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>