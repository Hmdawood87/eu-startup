<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOwnerShipsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('owner_ships', function (Blueprint $table) {
            $table->id();
            $table->string('file_path');
            $table->foreignId("owner_id")->constrained();
            $table->foreignId("property_id")->constrained();
            $table->enum('status', ['Pending', 'Not Approved', 'Approved'])->default('Pending');
            $table->foreignId("user_id")->nullable()->constrained();
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
        Schema::dropIfExists('owner_ships');
    }
}
