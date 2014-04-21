<?php
Route::match(array('GET', 'POST'),'raw_items/actors/{action?}/{id?}', array('uses' => 'RawController@actors'));
Route::match(array('GET', 'POST'),'raw_items/customers/{action?}/{id?}', array('uses' => 'RawController@customers'));
Route::match(array('GET', 'POST'),'raw_items/films/{action?}/{id?}', array('uses' => 'RawController@films'));
Route::match(array('GET', 'POST'),'raw_items/', array('uses' => 'RawController@index'));
