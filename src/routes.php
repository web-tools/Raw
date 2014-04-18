<?php
Route::match(array('GET', 'POST'),'raw_items/customers/{action?}/{id?}', array('uses' => 'RawController@customers'));
Route::match(array('GET', 'POST'),'raw_items/employees/{action?}/{id?}', array('uses' => 'RawController@employees'));
Route::match(array('GET', 'POST'),'raw_items/{action?}/{id?}', array('uses' => 'RawController@index'));
