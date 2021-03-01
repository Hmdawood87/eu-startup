<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmailVerification extends Mailable
{
    use Queueable, SerializesModels;

    public $hash;
    public $email;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($hash, $email)
    {
        $this->hash = $hash;
        $this->email = $email;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from(env("MAIL_FROM_ADDRESS"))
            ->view('send_mail')->with("hash", $this->hash)->with("email", $this->email);
    }
}
