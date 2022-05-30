<?php
    
	
    $uName = $_POST['name'];
    $uPhone = $_POST['phone'];   	
	$to = 'kadkin_roman@mail.ru';
    
    $subject = 'Заявка с сайта: СделкиPRO';
    $message = 'Имя: ' . $uName . ";" . "\r\n" . 'Телефон: ' . $uPhone . ";" . "\r\n" ;
    
    
    
    $headers = 'From:  SdelkiPro' . "\r\n" .
    'Reply-To: SdelkiPro' . "\r\n" .
    'X-Mailer: PHP/';

	mail($to, $subject, $message, $headers);
?>