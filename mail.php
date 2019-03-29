<?php

$recepient = "1bodro@i.ua";
$sitename ="Спортзал NO";
$from = "andrew@sportno.zzz.com.ua";
//$headers = 'From: andrew@sportno.zzz.com.ua.';
$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$date_phone = trim($_POST["date"]);
$message = "Имя: $name \n Телефон: $phone \n Время: $date_phone";
$pagetitle = "Новая заявка с сайта \"$sitename\"";
//mail($recepient, $pagetitle, $message, $headers);
mail($recepient,$pagetitle,$message,"From: $from\r\nReply-To: $from\r\nMIME-Version: 1.0\r\nContent-type: text/plain; charset=utf-8\r\nX-Mailer: PHP/" . phpversion());
