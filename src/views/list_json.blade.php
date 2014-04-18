<?php /*{
  "aaData": [
    [
      "Trident",
      "Internet Explorer 4.0",
      "Win 95+",
      "4",
      "X"
    ],
    [
      "Trident",
      "Internet Explorer 5.0",
      "Win 95+",
      "5",
      "C"
    ],
  ]
}
*/?>{
    "aaData":[<?php
    $primary_key = $raw->primary_key;
    $items = $raw->getItems();

    //Webtools::pre($items);
    if (!empty($items)):
        foreach ($items as $key=>$item):
        ?>[<?php foreach ($raw->getFields() as $key_field=>$field):
                if (isset($field['column']) && $field['column']):
                    ?>"<?php 
                    if (isset($field['callback_column']))
                    { 
                        echo htmlentities(call_user_func($raw->class.'::'.$field['callback_column'],$item)); 
                    }
                    else if (isset($raw->relations[$key_field]))
                    {
                        $key_relation = $raw->relations[$key_field]['relation_display'];
                        echo htmlentities($item->$key_relation);
                    }
                    else if ($field['type'] == 'upload2')
                    {
                        if (isset($field['preset']) && $field['preset'] == 'image')
                        {
                            if ($item->$key_field!='')
                            {
                                echo htmlentities('<a href="#" data-toggle="modal" data-target="#image-'.md5($item->$key_field).'"><img width="100" src="'.URL::to($field['upload_path'].'/'.$item->$key_field).'" alt=""/></a>');
                                echo htmlentities('<div class="modal fade" id="image-'.md5($item->$key_field).'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                                            </div>
                                            <div class="modal-body">
                                                <img src="'.URL::to($field['upload_path'].'/'.$item->$key_field).'" width="100%"/>
                                            </div>
                                        </div>
                                        <!-- /.modal-content -->
                                    </div>
                                    <!-- /.modal-dialog -->
                                </div>');
                            }    
                        }
                        else
                            echo htmlentities('<a href="'.URL::to($field['upload_path'].'/'.$item->$key_field).'">'.$item->$key_field.'</a>');
                    }
                    else 
                        echo htmlentities($item->$key_field);
                    ?>",<?php 
                    endif;
                endforeach;
                ?>"<?php 
                echo htmlentities('<a class="glyphicon glyphicon-info-sign" href="'. URL::to($raw->path.'/view/'.$item->$primary_key).'"></a>
                <a class="glyphicon glyphicon-pencil" href="'.URL::to($raw->path.'/edit/'.$item->$primary_key).'"></a>
                <a class="glyphicon glyphicon-remove" href="'. URL::to($raw->path.'/delete/'.$item->$primary_key).'"></a>
                ') 
                ?>"]<?php if ($key !=sizeof($items)-1):?>,<?php endif;
        endforeach;
    endif;
    ?>]
}