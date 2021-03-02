<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->id();
            $table->text("name");
            $table->text("iso3");
            $table->text("iso2");
            $table->string("phone_code")->nullable();
            $table->string("capital")->nullable();
            $table->text("currency")->nullable();
            $table->string("currency_symbol");
            $table->string("native")->nullable();
            $table->text("region")->nullable();
            $table->text("subregion")->nullable();
            $table->string("translations");
            $table->float("latitude");
            $table->float("longitude");
            $table->string("emoji");
            $table->string("emojiU");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
//        Schema::dropIfExists('countries');
    }
}
