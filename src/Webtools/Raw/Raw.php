<?php

/**
 * PHP Raw CRUD Package
 *
 * A CRUD package for Laravel inspired by the Grocery CRUD library for Codeigniter.
 * Using this you can create your entire c.r.u.d (Create Read Update Delete) interface in a matter of minutes
 *
 * Copyright (C)
 *
 *
 * @package    	Webtools CMS
 * @copyright  	Copyright (c) 2014, Adrian Gheorghe
 * @version    	0.5
 * @author     	Adrian Gheorghe <adi@adigheorghe.ro>
 */

namespace Webtools\Raw;

use \Request;
use \Schema;
use \DB;
use \View;
use \Validator;
use \Input;
use \Webtools;

 
Class Raw
{
	private $id = false;
	private $state = 'list';
	private $states_extra = array();
	public 	$path = '';
	public  $class = '';
	private $table;
	private $table_fields;

	public 	$primary_key = 'id';
	public 	$title_key = '';
	public 	$parent_key = false;
	public 	$order_key = false;
	public 	$status_key = false;


	private $unset = array();
	private $errors;
	private $rules = array();

	private $callbacks = array();
	private $columns = array();
	private $fields = array();
	public 	$relations = array();
	private $query;
	private $items = array();
	public  $item = false;

	private $values = false;

	private $max_file_size = 5000;

	public 	$strings = array();
	public 	$tabs =array();
	public 	$actions =array();
	public 	$actions_extra =array();
	
	public 	$ajax_listing = false;

	public 	$title = 'Manage';
	public 	$subtitle = '';

	public 	$css_files = array();
	public 	$js_files = array();
	public  $output;

	public 	$order = array();


	function __construct($state = false,$id = false,$class)
	{
		if ($class)
			$this->class = get_class($class);


		if ($state)
			$this->state = $state;

		if ($id)
		{
			$this->id = $id;
		}

		$this->strings = $this->getStrings();

		$uri = Request::path();
		if ($id)
			$this->path = str_replace('/'.$this->state.'/'.$id,'',$uri);
		else
			$this->path = str_replace('/'.$this->state,'',$uri);

		$this->setTabs();
	}

	public static function make($state = false,$id = false,$class)
	{
		//return new Self($state,$id,$class);
	}

	/*
		Set main table you wish to create interface for
	*/	
	function setTable($table_name)
	{
		if ($this->tableExists($table_name))
		{
			$this->table = $table_name;
			$this->table_fields = $this->getTableInfo($this->table);

			$this->query = DB::table($this->table);

		}
		else
		{
			// error bloody error

		}	
	}

	/* 
		Check if table exists 
	*/
	function tableExists($table_name)
	{
		return Schema::hasTable($table_name);
	}

	/*
		Get Table info
	*/
	function getTableInfo($table_name)
	{
		$db_field_types = array();
		$columns = DB::select("SHOW COLUMNS FROM `{$table_name}`");

    	foreach($columns as $db_field_type)
    	{
    		$type = explode("(",$db_field_type->Type);
    		$db_type = $type[0];

    		if(isset($type[1]))
    		{
    			if(substr($type[1],-1) == ')')
    			{
    				$length = substr($type[1],0,-1);
    			}
    			else
    			{
    				list($length) = explode(" ",$type[1]);
    				$length = substr($length,0,-1);
    			}
    		}
    		else
    		{
    			$length = '';
    		}
    		$results[$db_field_type->Field]['db_max_length'] = $length;
    		$results[$db_field_type->Field]['db_type'] = $db_type;
    		$results[$db_field_type->Field]['db_null'] = $db_field_type->Null == 'YES' ? true : false;
    		$results[$db_field_type->Field]['db_extra'] = $db_field_type->Extra;
    	}

    	return $results;
	}
	
	public function setTitle($title)
	{
		$this->title = $title;
	}

	public function getState()
	{
		return $this->state;
	}

	public function setState($state)
	{
		$this->state = $state;
	}

	public function setAjaxListing()
	{
		$this->ajax_listing = true;
	}

	/* 
		Alter query using where 
	*/
	public function where($field,$value)
	{
		$this->query = $this->query->where($field, $value);
	}

	/* 
		Alter query using order by 
	*/
	public function order($field,$type)
	{
		$this->order = array($field,$type);
		$this->query = $this->query->orderBy($field, $type);
	}

	
	/*
		Select field lists	
	*/
	public function fields($fields)
	{
		$fields_new = array();

		foreach ($fields as $key=>$f)
		{
			if (!isset($f['title']))
				$f['title'] = ucwords(str_replace('_',' ',$key));

			if (isset($f['primary_key']))
				$this->primary_key = $key;

			if (isset($f['parent_key']))
			{
				$this->parent_key = $key;
				$f['type'] = 'select';
			}

			if (isset($f['order_key']))
				$this->order_key = $key;

			if (isset($f['status_key']))
				$this->status_key = $key;

			if (isset($f['title_key']))
				$this->title_key = $key;

			if (isset($f['column']) && $f['column'])
			{
				$this->columns[] = $key;
			}

			$fields_new[$key] = $f;
		}

		foreach ($fields_new as $key=>$field)
		{
			if (isset($this->table_fields[$key]))
			{
				if (!isset($field['type']))
					$field['type'] = $this->getFieldType($key);
				$fields_new[$key] = $field;
			}
			/*
			else if (!isset($field['callback_add']) && !isset($field['callback_edit']))
			{
				unset($fields_new[$key]);
			}
			*/
		}

		$this->fields = array_merge($this->fields,$fields_new);
	}

	private function getFieldType($key)
	{

		$type = 'text';
		if(!empty($this->table_fields[$key]['db_type']))
		{
			switch ($this->table_fields[$key]['db_type']) {
				case '1':
				case '3':
				case 'int':
				case 'tinyint':
				case 'mediumint':
				case 'longint':
					if( $this->table_fields[$key]['db_type'] == 'tinyint' && $this->table_fields[$key]['db_max_length']==  1)
						$type = 'true_false';
					else
						$type = 'integer';
				break;
				case '254':
				case 'string':
				case 'varchar':
				case 'enum':
				case 'set':
					$type = 'text';
				break;
				
				case '252':
				case 'blob':
				case 'text':
				case 'mediumtext':
				case 'longtext':
					$type = 'long_text';
				break;
				case '10':
				case 'date':
					$type = 'date';
				break;
				case '12':
				case 'datetime':
				case 'timestamp':
					$type = 'datetime';
				break;

				default:
					$type = 'text';
				break;
			}
		}
		return $type;
	}


	public function getFields()
	{
		return $this->fields;
	}

	public function getItems()
	{
		return $this->items;
	}

	/*
		Add and edit rules for each field
	*/
	public function rules($rules)
	{
		$this->rules = $rules;
	}

	/*
		Add and edit callbacks for each event
	*/
	public function callbacks($events)
	{
		$this->callbacks = $events;
	}

	/*
		Different field callbacks
	*/
	public function callback()
	{

	}

	public function relation($relation)
	{
		if (is_array($relation) && !empty($relation))
		{
			$r = $relation;
			if ((isset($r['type']) && $r['type'] == 'default') || !isset($r['type']))
			{
				$this->query = $this->query->join($r['relation_table'], $this->table.'.'.$r['field'], '=', $r['relation_table'].'.'.$r['relation_column']);

				if (isset($r['relation_where']) && is_array($r['relation_where']) && !empty($r['relation_where']))
				{
					foreach ($r['relation_where'] as $w)
					{
						//$this->query = $this->query->where($w);
					}
				}

			}
			$this->relations[$relation['field']] = $relation;

			
		}
	}

	/*
		Unset different functionalities
	*/
	public function unsetOptions($unset_array)
	{
		if (is_array($unset_array))
			$this->unset = array_merge($this->unset,$unset_array);
	}

	private function unify()
	{
		/* Todo relation select display multiple */
		$state = $this->getState();


		$fields = array($this->table.'.*');
		foreach ($this->relations as $r)
		{

			$fields[] = $r['relation_table'].'.'.$r['relation_display'];

			// get values
			$query_values = DB::table($r['relation_table']);
			if (isset($r['relation_where']))
			{
				foreach ($r['relation_where'] as $w)
				{
					$query_values->where($w[0],$w[1],$w[2]);
				}
			}

			if (isset($r['relation_order']))
			{
				$query_values->orderBy($r['relation_order'][0],$r['relation_order'][1]);
			}
			$values = $query_values->get();
			$values_new = array();

			
			foreach ($values as $v)
			{
				$values_new[$v->{$r['relation_column']}] = $v->{$r['relation_display']};
			}
			$this->fields[$r['field']]['values'] = $values_new;
			$this->fields[$r['field']]['type'] = 'select';
		}

		if ($state == 'list_order' && !$this->parent_key && $this->order_key && empty($this->order))
		{
			$this->query = $this->query->orderBy($this->order_key,asc);
		}

		if (Request::ajax() && Input::get('sEcho') && $this->ajax_listing)
		{
			$this->query_total = clone $this->query;
			$this->query_filtered = clone $this->query;

			/* Array of database columns which should be read and sent back to DataTables. Use a space where
			 * you want to insert a non-database field (for example a counter or static image)
			 */
			$columns = $this->columns;
			
			/* Indexed column (used for fast and accurate table cardinality) */
			$index_column = $this->primary_key;
			

			/* 
			 * Paging
			 */
			$limit = "";
			if ( Input::get('iDisplayLength') != '-1' )
			{
				$this->query = $this->query->skip(intval( Input::get('iDisplayStart') ))->take(intval( Input::get('iDisplayLength') ));
			}

			
			
			/*
			 * Ordering
			 */
			
			$order = "";
			if ( Input::get('iSortCol_0') )
			{
				for ( $i=0 ; $i<intval( Input::get('iSortingCols') ) ; $i++ )
				{
					if ( Input::get( 'bSortable_'.intval(Input::get('iSortCol_'.$i))) == "true" )
					{

						$this->query = $this->query->orderBy($columns[ intval( Input::get('iSortCol_'.$i) ) ],(Input::get('sSortDir_'.$i)==='asc' ? 'asc' : 'desc'));

					}
				}
			}
			
			
			
			/* 
			 * Filtering
			 * NOTE this does not match the built-in DataTables filtering which does it
			 * word by word on any field. It's possible to do here, but concerned about efficiency
			 * on very large tables, and MySQL's regex functionality is very limited
			 */
			
			$sWhere = "";
			if ( Input::get('sSearch') && Input::get('sSearch') != "" )
			{
				for ( $i=0 ; $i<count($columns) ; $i++ )
				{
					if ( Input::get('bSearchable_'.$i) && Input::get('bSearchable_'.$i) == "true" )
					{
						$this->query = $this->query->orWhere($columns[$i], 'LIKE', '%'.Input::get('sSearch').'%');
						$this->query_filtered = $this->query_filtered->orWhere($columns[$i], 'LIKE', '%'.Input::get('sSearch').'%');
						$this->query_total = $this->query_total->orWhere($columns[$i], 'LIKE', '%'.Input::get('sSearch').'%');
					}
				}
			}
			
			/*
			 * SQL queries
			 * Get data to display
			 */

			$this->items = $this->query->select($fields)->get();

			$total_items = $iTotal = $this->query_total->select($fields)->count();
			$filtered_items = $iFilteredTotal = $this->query_filtered->select($fields)->count();
			
			/*
			$queries = DB::getQueryLog();
			$last_query = end($queries);
			Webtools::pre($last_query);
			*/
			
			/*
			 * Output
			*/
			$this->output = array(
				"sEcho" => intval(Input::get('sEcho')),
				"iTotalRecords" => $iTotal,
				"iTotalDisplayRecords" => $iFilteredTotal,
				"aaData" => array()
			);
			
			


		}
		else if ($this->ajax_listing)
			$this->items = false;
		else
			$this->items = $this->query->select($fields)->get();

		if ($this->parent_key)
		{
			$parent_values = array();
			$items_sorted = $this->sort_tree($this->items);
			foreach ($items_sorted as $i)
			{
				$parent_values[$i->{$this->primary_key}] = $i->{$this->title_key};
			}
			$this->fields[$this->parent_key]['values'] = $parent_values;
		}

		if ($state == 'list_order' && $this->parent_key)
		{
			//Webtools::pre($this->items);
			$this->items = $this->sort_tree($this->items);
			//Webtools::pre($this->items);
		}

		//$this->items = $this->query->get($fields);
		
		
		if ($state !='list' && $state !='list_order' && $this->id)
			$this->item = $this->query->where($this->table.'.'.$this->primary_key, $this->id)->first();
		
		/*
		$queries = DB::getQueryLog();
		$last_query = end($queries);
		Webtools::pre($last_query);
		*/
	}

	private function processValuesAdd()
	{
		foreach ($this->fields as $key=>$f)
		{
			if ($f['type'] == 'upload')
			{
				$this->values[$key] = $this->values['value-'.$key];
				unset($this->values['value-'.$key]);
				unset($this->values['old-'.$key]);
			}
		}
	}

	private function processValuesEdit()
	{
		foreach ($this->fields as $key=>$f)
		{
			if ($f['type'] == 'upload')
			{
				// delete old file if necessary
				if ($this->item->$key != $this->values['value-'.$key])
				{
					// changed
					
				}
				$this->values[$key] = $this->values['value-'.$key];
				unset($this->values['value-'.$key]);
				unset($this->values['old-'.$key]);
			}
		}
	}
	/* 
		This is where the magic happens
	*/
	public function render()
	{
		$this->unify();
		$this->resources();

		/* Redo tabs */
		$tabs = $this->getTabs();
		foreach ($this->states_extra as $key=>$extra)
		{
			if ($this->getState() == $key)
				$tabs[$key]['active'] = true;
		}

		if ($this->item)
		{
			foreach ($this->actions_extra as $key=>$extra)
			{				
				$tabs[$key] = array('url'=>sprintf($extra['url'],$this->id),'title'=>$extra['title']);				
			}
		}
		$this->updateTabs($tabs);



		$state = $this->getState();

		switch ($state)
		{
			case 'list':
				$this->setActions();
				$this->output = $this->render_list();
			break;
			case 'list_order':
				$this->setActions();
				$this->output = $this->render_listOrder();
			break;
			case 'add':
				$this->output = $this->render_add();
			break;
			case 'edit':
				$this->output = $this->render_edit();
			break;
			case 'view':
				$this->output = $this->render_view();
			break;
			case 'upload':
				$this->output = $this->render_upload();
			break;
			case 'delete':
				$this->output = $this->render_delete();
			break;
		}

		foreach ($this->states_extra as $key=>$extra)
		{
			if ($state == $key)
				$this->output = $extra['class']::$extra['method']($this);
		}
		
		return $this->output;
	}	

	private function render_list()
	{	
		// todo ajax listing
		// todo ajax sorting
		if (Request::ajax())
		{
			echo View::make('raw::list_json', array('raw'=>$this))->render();
			exit();
		}	
		else
		{
			$this->subtitle = $this->strings['item_list'];
			return View::make('raw::list', array('raw'=>$this))->render();
		}
	}

	private function render_listOrder()
	{	
		// todo ajax listing
		// todo ajax sorting
		if (Request::ajax())
		{
			// save order and status and stuff
			foreach ($this->items as $item)
			{
				$values = array();

				$weight = Input::get('item-'.$item->{$this->primary_key}.'-weight');
				$parent = str_replace('item-','',Input::get('item-'.$item->{$this->primary_key}.'-parent'));
				
				$update = array();
				if ($this->order_key)
					$update[$this->order_key] = $weight;

				if ($this->parent_key)
					$update[$this->parent_key] = $parent;

				if ($this->status_key)
				{
					if (Input::get('item-'.$item->{$this->primary_key}.'-status'))
						$update[$this->status_key] = 1;
					else
						$update[$this->status_key] = 0;
				}

				DB::table($this->table)->where($this->table.'.'.$this->primary_key, $item->{$this->primary_key})->update($update);
			}
			$return = array('status'=>1,'message'=>$this->strings['success_order']);

			echo json_encode($return);
			exit();
		}	
		else
		{
			$this->subtitle = $this->strings['item_list'];
			return View::make('raw::list_order', array('raw'=>$this))->render();
		}
	}

	private function render_add()
	{
		if (Request::ajax())
		{
			/*
				This is where the validations come in;
			*/
			$return = array();

			$this->values = Input::all();
			$this->processValuesAdd();

			$validator = Validator::make(
			    $this->values,
			    $this->rules
			);

			if ($validator->fails())
			{
				$return = array('status'=>0,'errors' => $validator->messages()->toArray());
			}
			else
			{				

				if (isset($this->callbacks['insert_before']))
				{
					$class = $this->callbacks['insert_before']['class'];
					$method = $this->callbacks['insert_before']['method'];
					$this->values = $class::$method($this->values);
				}

				$this->deleteOldFiles();
				/* Prepare for insert */ 
				unset($this->values['_token']);
				/* Do insert */
				$id = DB::table($this->table)->insertGetId($this->values);
				if ($id)
					$this->id = $id;

				$this->values['id'] = $id;
				if (isset($this->callbacks['insert_after']))
				{
					$class = $this->callbacks['insert_after']['class'];
					$method = $this->callbacks['insert_after']['method'];
					$this->values = $class::$method($this->values);
				}

				$return = array('status'=>1,'message'=>$this->strings['success_add']);
			}

			echo json_encode($return);
			exit();
		}
		else
		{
			$this->subtitle = $this->strings['item_add'];
			return View::make('raw::add', array('raw'=>$this))->render();
		}
	}

	private function render_view()
	{
		$this->subtitle = $this->strings['item_view'].(($this->title_key)?(' - '.$this->item->{$this->title_key}):'');
		return View::make('raw::view', array('raw'=>$this))->render();
	}

	private function render_edit()
	{
		if (Request::ajax())
		{
			/*
				This is where the validations come in;
			*/
			$return = array();

			$this->values = Input::all();
			$this->processValuesEdit();


			$validator = Validator::make(
			    $this->values,
			    $this->rules
			);

			if ($validator->fails())
			{
				$return = array('status'=>0,'errors' => $validator->messages()->toArray());
			}
			else
			{
				

				if (isset($this->callbacks['update_before']))
				{
					$class = $this->callbacks['update_before']['class'];
					$method = $this->callbacks['update_before']['method'];
					$this->values = $class::$method($this->values);
				}

				$this->deleteOldFiles();

				/* Prepare for insert */ 
				unset($this->values['_token']);
				/* Do insert */
				DB::table($this->table)->where($this->table.'.'.$this->primary_key, $this->id)->update($this->values);

				if (isset($this->callbacks['update_after']))
				{
					$class = $this->callbacks['update_after']['class'];
					$method = $this->callbacks['update_after']['method'];
					$this->values = $class::$method($this->values);
				}

				$return = array('status'=>1,'message'=>$this->strings['success_edit']);
			}

			echo json_encode($return);
			exit();
		}
		else
		{
			$this->subtitle = $this->strings['item_view'].(($this->title_key)?(' - '.$this->item->{$this->title_key}):'');
			return View::make('raw::edit', array('raw'=>$this))->render();
		}
	}

	private function render_upload()
	{
		$field = false;
		
		$response = array('status'=>0,'message'=>$this->strings['file_none']);
		if (isset($this->fields[Input::get('field')]))
		{

			$field = $this->fields[Input::get('field')];
			$upload = true;
			if (Input::hasFile(Input::get('field')) && isset($field['upload_path']))
			{
			    // file loaded
			    // check issues
			    $file = Input::file(Input::get('field'));

			   	$max_file_size = $this->max_file_size;
			   	if (isset($field['max_file_size']))
			   		$max_file_size = $field['max_file_size'];

			   	$extensions = false;
			   	if (isset($field['extensions']))
			   	{
			   		$extensions = explode(' ',$field['extensions']);
			   	}
			   	else if (isset($field['preset']) && $field['preset'] == 'picture')
			   	{
			   		$extensions = array('jpg','jpeg','png','gif');
			   	}
			   	else if (isset($field['preset']) && $field['preset'] == 'document')
			   	{
			   		$extensions = array('txt','doc','otf','pdf','xls','ppt','rtf','ott','docx','xlsx','pptx');
			   	}

			   	$upload = true;
			   	if ($extensions && !in_array($file->getClientOriginalExtension(),$extensions))
			   	{
			   		$response = array('status'=>0,'message'=>'file_extensions');
					$upload = false;
				}

				if ($file->getSize() > $max_file_size*1024)
				{
			   		$response = array('status'=>0,'message'=>'file_size');
					$upload = false;
				}
			   
			   	if ($upload )
			   	{
			   		$filename = md5($file->getClientOriginalName().time().rand(0,1000)).'.'.$file->getClientOriginalExtension();
			   		$upload_success = Input::file(Input::get('field'))->move(public_path().'/'.$field['upload_path'], $filename);
			   		if ($upload_success)
			   		{
			   			//Webtools::pre( Input::file(Input::get('field')));

			   			if (in_array($file->getClientOriginalExtension(),array('jpg','jpeg','png','gif')))
			   			{
			   				// image resize
			   				// must be done with an external library
			   				if (isset($field['thumbs']))
			   				{
			   					$thumbs = explode(' ',$field['thumbs']);
			   					if ($thumbs)
			   					{
			   						foreach ($thumbs as $th)
			   						{
			   							$dimensions = explode('x',strtolower($th));
			   							if (count($dimensions) == 2 && is_numeric($dimensions[0]) && is_numeric($dimensions[1]))
			   							{
			   								// check folder
											if (!file_exists(public_path().'/'.$field['upload_path'] . '/'.$th))
											{
												mkdir(public_path().'/'.$field['upload_path'].'/'.$th, 0755);
											}
											else
											{
												if (!is_writable(public_path().'/'.$field['upload_path'] . '/'.$th)) 
												{
													chmod(public_path().'/'.$field['upload_path'].'/'.$th, 0755);
												}
											}

			   								// resize
			   								//include_once('Moo.php');

			   								$moo = new Moo();

			   								$moo
											->load('/'.$field['upload_path'], $filename)
											->resize_crop($dimensions[0],$dimensions[1])
											->save('/'.$field['upload_path'].'/'.$th.'/'.$filename);

											$view = View::make('raw::fields.upload_row', array('raw'=>$this,'field'=>$field,'key'=>Input::get('field'),'value'=>$filename))->render();
											$response = array('status'=>1,'file'=>$filename,'message'=>$this->strings['file_upload_success'],'response'=>$view);
			   							}
			   						}
			   					}
			   				}
			   			}
			   		}
			   		else
			   		{
			   			$response = array('status'=>0,'message'=>$this->strings['file_upload_failed']);
			   		}
			   	}
			}
		}
		echo json_encode($response);
		exit();
	}

	private function render_delete()
	{
		if ($this->item)
		{
			// callback before
			if (isset($this->callbacks['delete_before']))
			{
				$class = $this->callbacks['delete_before']['class'];
				$method = $this->callbacks['delete_before']['method'];
				$class::$method($this->item);
			}

			// delete what needs to be deleted
			foreach ($this->fields as $field_key=>$field)
			{
				if ($field['type'] == 'upload')
				{
					$file = $this->item->{$field_key};

					// delete file
					@unlink(public_path().'/'.$field['upload_path'].'/'.$file);
					if (isset($field['thumbs']))
					{
						$thumbs = explode(' ',$field['thumbs']);
	   					if ($thumbs)
	   					{
	   						foreach ($thumbs as $th)
	   						{
	   							$dimensions = explode('x',strtolower($th));
	   							if (count($dimensions) == 2 && is_numeric($dimensions[0]) && is_numeric($dimensions[1]))
	   							{	 
	   								// delete thumbs 								
	   								@unlink(public_path().'/'.$field['upload_path'].'/'.$th.'/'.$file);
	   							}
	   						}
	   					}
					}
				}
			}

			// actual delete
			DB::table($this->table)->where($this->primary_key, '=', $this->item->{$this->primary_key})->delete();

			// callback before
			if (isset($this->callbacks['delete_after']))
			{
				$class = $this->callbacks['delete_after']['class'];
				$method = $this->callbacks['delete_after']['method'];
				$class::$method($this->item);
			}
			$response = array('status'=>1,'message'=>$this->strings['item_deleted']);
		}
		else
			$response = array('status'=>0,'message'=>$this->strings['no_item']);

		echo json_encode($response);
		exit();
	}

	private function deleteOldFiles()
	{
		// delete what needs to be deleted
		foreach ($this->fields as $field_key=>$field)
		{
			if ($field['type'] == 'upload')
			{
				$old_files = Input::get('old-'.$field_key);
				if ($old_files != '')
				{

					$files = explode(',',$old_files);
					foreach ($files as $file)
					{
						if (file_exists(public_path().'/'.$field['upload_path'].'/'.$file))
						{
							// delete file
							@unlink(public_path().'/'.$field['upload_path'].'/'.$file);
							if (isset($field['thumbs']))
							{
								$thumbs = explode(' ',$field['thumbs']);
			   					if ($thumbs)
			   					{
			   						foreach ($thumbs as $th)
			   						{
			   							$dimensions = explode('x',strtolower($th));
			   							if (count($dimensions) == 2 && is_numeric($dimensions[0]) && is_numeric($dimensions[1]))
			   							{	 
			   								// delete thumbs 								
			   								@unlink(public_path().'/'.$field['upload_path'].'/'.$th.'/'.$file);
			   							}
			   						}
			   					}
							}
						}
					}
				}
			}
		}
	}

	public function getStrings()
	{
		return array(
				'actions' => 'Actions',
				'please_select' => 'Please Select',
				'true' => 'True',
				'false' => 'False',
				'item_edit' => 'Edit Item',
				'item_add' => 'Add Item',
				'item_view' => 'View Item',
				'item_delete' => 'Delete Item',
				'item_list' => 'List Items',
				'submit' => 'Submit',
				'submit_continue' => 'Submit and continue',
				'reset' => 'Reset',
				'success_add' => 'The record has been successfully added',
				'success_edit' => 'The record has been successfully updated',
				'success_order' => 'The order of the records has been updated',
				'-' => 'Value not set',
				'file_none' => 'No file sent',
				'file_extensions' => 'The file extension is not permitted',
				'file_size' => 'The file size is too large',
				'file_size' => 'The file upload failed. Please try again!',
				'file_delete' => 'Delete',
				'add_files' => 'Add files',
				'confirm' => 'Are you sure?',
				'file_upload_failed' => 'File upload error',
				'file_upload_success' => 'File uploaded successfully',
				'no_item' => 'There is no item',
				'item_deleted' => 'The item has been deleted',
				'confirm' => 'Confirm',
		);
	}

	public function addState($array)
	{
		$state = $this->getState();
		if (isset($array['available']) && isset($array['key']))
		{
			$available = explode(' ',$array['available']);
			if (in_array($state,$available) || $state == $array['key'])
			{
				if (isset($array['method']))
				{
					$this->states_extra[$array['key']] = array('method'=>$array['method'],'class'=>(isset($array['class'])?$array['class']:$this->class));
				}
				$tabs = $this->getTabs();
				$tabs[$array['key']] = array('url'=>$array['url'],'title'=>$array['title']); 
				if ($state == $array['key'])
					$tabs[$array['key']]['active'] = true;
				$this->updateTabs($tabs);
			}
		}
		
	}

	private function setTabs()
	{
		$this->tabs = array();
		
		if ($this->id)
		{
			$this->tabs['1_view'] = array('url'=>$this->path.'/view/'.$this->id,'title'=>$this->strings['item_view']);
			$this->tabs['2_edit'] = array('url'=>$this->path.'/edit/'.$this->id,'title'=>$this->strings['item_edit']);
		}
		$this->tabs['3_add'] = array('url'=>$this->path.'/add','title'=>$this->strings['item_add']);
		$this->tabs['0_list'] = array('url'=>$this->path,'title'=>$this->strings['item_list']);

		if ($this->getState() == 'list' || $this->getState() == 'list_order')
			$this->tabs['0_list']['active'] = true;
		if ($this->getState() == 'add')
			$this->tabs['3_add']['active'] = true;
		if ($this->getState() == 'view')
			$this->tabs['1_view']['active'] = true;
		if ($this->getState() == 'edit')
			$this->tabs['2_edit']['active'] = true;
	}

	public function getTabs()
	{
		return $this->tabs;
	}
	public function updateTabs($tabs)
	{
		$this->tabs = $tabs;
	}

	public function action($action)
	{
		if (isset($action['url']))
		{
			$this->actions[] = $action;
			$this->actions_extra[] = $action;
		}
	}

	private function setActions()
	{

		if (!in_array('view',$this->unset))
			$this->actions[] = array('class'=>"glyphicon glyphicon-info-sign raw-view", 'url'=>$this->path.'/view/%d');
        if (!in_array('edit',$this->unset))
			$this->actions[] = array('class'=>"glyphicon glyphicon-pencil raw-edit", 'url'=>$this->path.'/edit/%d');
       	if (!in_array('delete',$this->unset))
			$this->actions[] = array('class'=>"glyphicon glyphicon-remove raw-delete", 'url'=>$this->path.'/delete/%d','data-rel'=>'redirect','data-redirect'=>'/'.$this->path);
	}

	private function resources()
	{
		if (!in_array('bootstrap',$this->unset))
			$this->css_files[] = 'packages/webtools/raw/css/bootstrap.min.css';
		
		$this->css_files[] = 'packages/webtools/raw/js/select2/select2.css';

		$this->css_files[] = 'packages/webtools/raw/css/tabledrag.css';
		$this->css_files[] = 'packages/webtools/raw/css/dataTables.bootstrap.css';
		$this->css_files[] = 'packages/webtools/raw/css/jquery.fileupload.css';
		$this->css_files[] = 'packages/webtools/raw/css/raw.css';

		if (!in_array('jquery',$this->unset))
			$this->js_files[] = 'packages/webtools/raw/js/jquery-1.10.2.js';
		
		if (!in_array('bootstrap',$this->unset))
			$this->js_files[] = 'packages/webtools/raw/js/bootstrap.min.js';

		$this->js_files[] = 'packages/webtools/raw/js/jquery.ui.widget.js';

		$this->js_files[] = 'packages/webtools/raw/js/jquery.dataTables.js';
		$this->js_files[] = 'packages/webtools/raw/js/dataTables.bootstrap.js';
		$this->js_files[] = 'packages/webtools/raw/editor/ckeditor/ckeditor.js';
		$this->js_files[] = 'packages/webtools/raw/editor/ckeditor/adapters/jquery.js';
		$this->js_files[] = 'packages/webtools/raw/js/select2/select2.js';
		$this->js_files[] = 'packages/webtools/raw/js/jquery.cookie.js';
		$this->js_files[] = 'packages/webtools/raw/js/jquery.tabledrag.js';
		$this->js_files[] = 'packages/webtools/raw/js/jquery.fileupload.js';
		$this->js_files[] = 'packages/webtools/raw/js/raw.js';
	}

	private function sort_tree($items)
	{
		$tree = array();
	    //webtools_pre($items);
	    $this->sort_helper($items, $tree, 0,-1);

	    return $tree;
	}

	private function sort_helper(&$input, &$output, $parent_id,$depth) 
	{
	    $parent_key = $this->parent_key; 
	    $primary_key = $this->primary_key; 
	    $depth++;
	    foreach ($input as $key => $item)
	    
	        if (is_object($item))
	        {
	            if ($item->$parent_key == $parent_id) 
			    {
				    $item->depth = $depth;
	                $output[] = $item;

	                // Sort nested!!
	               $this->sort_helper($input, $output, $item->$primary_key,$depth);
	            }
	        }
	    
	}
}