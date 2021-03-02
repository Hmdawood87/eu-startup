<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string("address", 255);
            $table->foreignId("state_id")->constrained();
            $table->foreignId("city_id")->constrained();
            $table->foreignId("country_id")->constrained();
            $table->foreignId("tenant_id")->nullable()->constrained();
            $table->foreignId("owner_id")->nullable()->constrained();
            $table->foreignId("organization_id")->constrained();
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
        Schema::dropIfExists('properties');
    }
}
