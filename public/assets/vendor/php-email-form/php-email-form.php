<?php

class PHP_Email_Form {
    public $to = '';
    public $from_name = '';
    public $from_email = '';
    public $subject = '';
    public $smtp = array();
    public $messages = array();
    public $ajax = false;

    public function add_message($message, $label = '', $priority = 0) {
        $this->messages[] = array(
            'label' => $label,
            'message' => $message,
            'priority' => $priority
        );
    }

    private function format_message() {
        $formatted_message = "";
        foreach ($this->messages as $msg) {
            $formatted_message .= $msg['label'] . ": " . $msg['message'] . "\n";
        }
        return $formatted_message;
    }

    public function send() {
        $headers = "From: " . $this->from_name . " <" . $this->from_email . ">\r\n";
        $headers .= "Reply-To: " . $this->from_email . "\r\n";
        $formatted_message = $this->format_message();

        if (!empty($this->smtp)) {
            // Use SMTP to send the email
            return $this->send_smtp_mail($this->to, $this->subject, $formatted_message, $headers);
        } else {
            // Use the PHP mail() function
            return mail($this->to, $this->subject, $formatted_message, $headers);
        }
    }

    private function send_smtp_mail($to, $subject, $message, $headers) {
        // Implement SMTP sending logic here
        // This is a placeholder for custom SMTP implementation
        // You can use libraries like PHPMailer or SwiftMailer
        return false; // Placeholder return
    }
}

?>


