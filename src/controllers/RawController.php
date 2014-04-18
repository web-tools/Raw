<?php

class RawController extends Controller {

	public $data = array();
	protected $layout = 'raw::raw';

	

	public function index($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_actor');
		$raw->order('last_update','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle(Webtools::t('Actors'));
		$raw->fields(
					array(
							'actor_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>true),		
							'first_name'=>array('column'=>true,'title_key'=>true),						
							'last_name'=>array('column'=>true),						
							'last_update'=>array('column'=>true,'readonly'=>true,'title'=>Webtools::t('Date')),						
						)
					);

		$raw->rules(
					array(
							'first_name'=>'required|digits_between:1,400',
							'last_name'=>'required|digits_between:1,400',
						)
					);


		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   
	public function customers($action = false,$id = false)
	{
		error_reporting(E_ALL);

		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('customers');
		$raw->order('customerName','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle(Webtools::t('Customers'));
		$raw->fields(
					array(
							'customerNumber'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'customerName'=>array('column'=>true,'title_key'=>true),						
							'contactLastName'=>array('column'=>true),						
							'contactFirstName'=>array('column'=>true),						
							'phone'=>array('column'=>true),						
							'addressLine1'=>array('column'=>true),						
							'addressLine2'=>array('column'=>false),						
							'city'=>array('column'=>true),						
							'state'=>array('column'=>true),						
							'postalCode'=>array('column'=>false),						
							'country'=>array('column'=>false),						
							'creditLimit'=>array('column'=>false),						
						)
					);

		$raw->rules(
					array(
							'customerName'=>'required|digits_between:1,400',
						)
					);


		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   
public function employees($action = false,$id = false)
	{
		error_reporting(E_ALL);

		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('employees');
		$raw->order('employeeNumber','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle(Webtools::t('Customers'));
		$raw->fields(
					array(
							'employeeNumber'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'lastName'=>array('column'=>true,'title_key'=>true),						
							'firstName'=>array('column'=>true),						
							'extension'=>array('column'=>true),						
							'email'=>array('column'=>true),						
							'officeCode'=>array('column'=>true),						
							'file_url'=>array('column'=>false),						
							'jobTitle'=>array('column'=>true),					
						)
					);

		$raw->relation(
				array('field'=>'officeCode','relation_table'=>'offices','relation_column'=>'officeCode','relation_display'=>'city','relation_order'=>array('city','asc'))
				
			);

		$raw->rules(
					array(
							'lastName'=>'required|digits_between:1,400',
							'firstName'=>'required|digits_between:1,400',
							'extension'=>'required|digits_between:1,400',
							'email'=>'required|digits_between:1,400',
						)
					);


		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   

}