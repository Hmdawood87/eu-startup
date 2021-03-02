<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->foreignId("state_id")->nullable()->constrained()->onDelete("cascade");;
            $table->text("state_code")->nullable()->nullable();
            $table->foreignId("country_id")->nullable()->constrained()->onDelete("cascade");;
            $table->text("country_code")->nullable();
            $table->float("latitude")->nullable();
            $table->float("longitude")->nullable();
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
//        Schema::dropIfExists('cities');
    }
}
