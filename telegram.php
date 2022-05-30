<?php
    
	
    $uName = $_POST["name"];
    $uPhone = $_POST["phone"];   	
	$to = "kadkin_roman@mail.ru";
    
    $subject = "Заявка с сайта: СделкиPRO";
    $message = "Имя: " . $uName . ";" . "\r\n" . "Телефон: " . $uPhone . ";" . "\r\n" ;

    
    $headers = "From:  SdelkiPro" . "\r\n" .
    "Reply-To: SdelkiPro" . "\r\n" .
    "X-Mailer: PHP/";
    
    $token = "5456963726:AAF-J1lqIbx97xetAYHn6vPtWSsa0n__oqU";
    $chat_id = "-775561287";

    $arr = array(
        "Заявка с сайта: " => "СделкиPRO",
        "Имя пользователя: " => $uName,
        "Телефон: " => $uPhone,
    );

    $txt = "";

    foreach($arr as $key => $value) {
        $txt .="<b>".$key."</b> ".$value."\n";
    }
    $mess = "Ошибка автопостинга. В текстовом файле найдена ошибка, пожалуйста проверьте!";

    $sendToTelegram = fopen("https://api.telegram.org/bot".$token."/sendMessage?chat_id=".$chat_id."&parse_mode=html&text=".urlencode($txt), "r"); 

    if($sendToTelegram) {

    } else {
        echo "Error";
    }

?>
