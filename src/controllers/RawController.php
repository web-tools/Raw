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
				  <li class="list-group-item"><a href="raw_items/languages">Languages</a></li>
				  <li class="list-group-item"><a href="raw_items/countries">Countries</a></li>
				  <li class="list-group-item"><a href="raw_items/rental">Rentals</a></li>
				  <li class="list-group-item"><a href="raw_items/payment">Payment</a></li>
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
		
		$raw->setAjaxListing();
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

	public function languages($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_language');
		$raw->order('name','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Languages');
		$raw->fields(
					array(
							'language_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'name'=>array('column'=>true,'title_key'=>true),						
							'flag'=>array('type'=>'upload','preset'=>'image','thumbs'=>'100x100 200x400','title'=>Webtools::t('Flag'),'upload_path'=>'assets/uploads/raw/languages','column'=>true),
							'last_update'=>array('column'=>true,'readonly'=>true),						
													
						)
					);

		$raw->rules(
					array(
							'name'=>'required',
						)
					);

		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

	public function countries($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_country');
		$raw->order('country','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Countries');
		$raw->fields(
					array(
							'country_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'country'=>array('column'=>true,'title_key'=>true),						
							'flag'=>array('type'=>'upload','preset'=>'image','thumbs'=>'100x100 200x400','title'=>Webtools::t('Flag'),'upload_path'=>'assets/uploads/raw/countries','column'=>true),
							'last_update'=>array('column'=>true,'readonly'=>true),						
													
						)
					);

		$raw->rules(
					array(
							'country'=>'required',
						)
					);

		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   	public function rental($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_rental');
		$raw->order('last_update','desc');
		$raw->unsetOptions(array());
		
		$raw->setAjaxListing();
		$raw->setTitle('Rentals');
		$raw->fields(
					array(
							'rental_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'inventory_id'=>array('column'=>true,'title'=>'Inventory'),
							'customer_id'=>array('column'=>true,'title'=>'Customer'),
							'staff_id'=>array('column'=>true,'title'=>'Staff'),
							'rental_date'=>array('column'=>true),						
							'return_date'=>array('column'=>true),						
							'last_update'=>array('column'=>true,'readonly'=>true),						
													
						)
					);

		$raw->rules(
					array(
							'inventory_id'=>'required',
						)
					);

		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   	public function payment($action = false,$id = false)
	{
		$raw = new Webtools\Raw\Raw($action,$id,$this);

		$raw->setTable('raw_country');
		$raw->order('country','asc');
		$raw->unsetOptions(array());
		
		$raw->setTitle('Countries');
		$raw->fields(
					array(
							'country_id'=>array('type'=>'hidden','primary_key'=>true,'column'=>false),		
							'country'=>array('column'=>true,'title_key'=>true),						
							'flag'=>array('type'=>'upload','preset'=>'image','thumbs'=>'100x100 200x400','title'=>Webtools::t('Flag'),'upload_path'=>'assets/uploads/raw/countries','column'=>true),
							'last_update'=>array('column'=>true,'readonly'=>true),						
													
						)
					);

		$raw->rules(
					array(
							'country'=>'required',
						)
					);

		$this->data['raw'] = $raw;
		$this->data['raw_output'] = $raw->render();

		/* ADD template */
		$this->layout = View::make($this->layout,$this->data);
	}

   

}