<?php
Route::match(array('GET', 'POST'),'raw_items/rental/{action?}/{id?}', array('uses' => 'RawController@rental'));
Route::match(array('GET', 'POST'),'raw_items/payment/{action?}/{id?}', array('uses' => 'RawController@payment'));
Route::match(array('GET', 'POST'),'raw_items/countries/{action?}/{id?}', array('uses' => 'RawController@countries'));
Route::match(array('GET', 'POST'),'raw_items/languages/{action?}/{id?}', array('uses' => 'RawController@languages'));
Route::match(array('GET', 'POST'),'raw_items/actors/{action?}/{id?}', array('uses' => 'RawController@actors'));
Route::match(array('GET', 'POST'),'raw_items/customers/{action?}/{id?}', array('uses' => 'RawController@customers'));
Route::match(array('GET', 'POST'),'raw_items/films/{action?}/{id?}', array('uses' => 'RawController@films'));
Route::match(array('GET', 'POST'),'raw_items/', array('uses' => 'RawController@index'));
