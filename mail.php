<?php
use PHPMailer/src/PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'mail.php';

$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
try {
    //Server settings
    $mail->setLanguage('ru', 'vendor/phpmailer/phpmailer/language/'); // Перевод на русский язык
   
    //Enable SMTP debugging
    // 0 = off (for production use)
    // 1 = client messages
    // 2 = client and server messages
    $mail->SMTPDebug = 1;                                 // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
   
    $mail->SMTPAuth = true;                               // Enable SMTP authentication

    //$mail->SMTPSecure = 'ssl';                          // secure transfer enabled REQUIRED for Gmail
    //$mail->Port = 465;                                  // TCP port to connect to
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to
   
    $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
    $mail->Username = 'USERNAME@gmail.com';               // SMTP username
    $mail->Password = 'PASSWORD';                         // SMTP password

    //Recipients
    $mail->setFrom('USERNAME@gmail.com', 'USERNAME');
    $mail->addAddress('SENDER@example.com');              // Name is optional

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Test mail to user';
    $mail->Body    = 'This is the very simple HTML message body <b>in bold!</b>';
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
   
    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
}




<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$auto = $_POST['auto'];
$user_last = $_POST['user_last-name'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vlad.urbanovitch@gmail.com'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Vlad00923'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('vlad.urbanovitch@gmail.com'); // от кого будет уходить письмо?
$mail->addAddress('nyevoh@mailto.plus');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с тестового сайта';
$mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$email;
$mail->AltBody = '';

if(!$mail->send()) {
    echo 'Error';
} else {
    header('location: thank-you.html');
}
?>