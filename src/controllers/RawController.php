<?php

class RawController extends Controller {

	public $data = array();
	protected $layout = 'raw::raw';

	

	public function index()
	{
		$raw = new Webtools\Raw\Raw('list',false,$this);

		$raw->setTable('raw_actor');
		$raw->order('last_update','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Actors');
		$raw->fields(
					array(
							'actor_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>true),		
							'first_name'=>array('column'=>true,'title_key'=>true),						
							'last_name'=>array('column'=>true),						
							'last_update'=>array('column'=>true,'readonly'=>true,'title'=>'Date'),						
						)
					);



		$this->data['raw'] = $raw;
		$raw->render();
		$this->data['raw_output'] = '
		<div class="jumbotron">
		  <h1>Welcome to Raw!</h1>
		  <p>A CRUD package for Laravel inspired by the Grocery CRUD library for Codeigniter</p>
		  <p>Take a look at the examples below</p>
		</div>
		<div class="row">
			<div class="col-md-12">
				<ul class="list-group">
				  <li class="list-group-item"><a href="raw_items/actors">Actors</a></li>
				  <li class="list-group-item"><a href="raw_items/customers">Customers</a></li>
				  <li class="list-group-item"><a href="raw_items/films">Films</a></li>
				</ul>
			</div>
		</div>';

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

	public function actors($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_actor');
		$raw->order('last_update','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Actors');
		$raw->fields(
					array(
							'actor_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>true),		
							'first_name'=>array('column'=>true,'title_key'=>true),						
							'last_name'=>array('column'=>true),						
							'last_update'=>array('column'=>true,'readonly'=>true,'title'=>'Date'),						
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
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_customer');
		$raw->order('last_name','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Customers');
		$raw->fields(
					array(
							'customer_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'first_name'=>array('column'=>true,'title_key'=>true),						
							'last_name'=>array('column'=>true),						
							'email'=>array('column'=>true),	
							'store_id'=>array('column'=>true,'type'=>'select','title'=>'Store'),				
							'active'=>array('column'=>true),						
							'create_date'=>array('column'=>true,'readonly'=>true),						
							'last_update'=>array('column'=>true,'readonly'=>true),						
													
						)
					);

		$raw->rules(
					array(
							'first_name'=>'required',
							'last_name'=>'required',
						)
					);

		$raw->relation(
				array('field'=>'store_id','relation_table'=>'raw_store','relation_column'=>'store_id','relation_display'=>'name','relation_order'=>array('name','asc'))
				
			);

		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

	public function films($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_film');
		$raw->order('title','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Films');
		$raw->fields(
					array(
							'film_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'title'=>array('column'=>true,'title_key'=>true),						
							'description'=>array(),						
							'release_year'=>array('column'=>true),	
							'language_id'=>array('column'=>true),	
							'rental_duration'=>array('column'=>true),	
							'rental_rate'=>array('column'=>true),	
							'length'=>array('column'=>true),	
							'replacement_cost'=>array('column'=>true),	
							'rating'=>array('column'=>true),	
							'special_features'=>array('column'=>true),					
							'last_update'=>array('column'=>true,'readonly'=>true),						
													
						)
					);

		$raw->rules(
					array(
							'title'=>'required',
							'description'=>'required',
						)
					);

		$raw->relation(
				array('field'=>'language_id','relation_table'=>'raw_language','relation_column'=>'language_id','relation_display'=>'name','relation_order'=>array('name','asc'))
				
			);

		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   

}