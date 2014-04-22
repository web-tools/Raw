<?php
    $primary_key = $raw->primary_key;
    $items = $raw->getItems();

    $output = $raw->output;

    if (!empty($items)):?>
    <?php foreach ($items as $key=>$item):
            $row = array();?>
            <?php foreach ($raw->getFields() as $key_field=>$field):?>
                <?php if (isset($field['column']) && $field['column']):?>
                    <?php 
                    if (isset($field['callback_column']))
                    { 
                        $row[] = call_user_func($raw->class.'::'.$field['callback_column'],$item); 
                    }
                    else if (isset($raw->relations[$key_field]))
                    {
                        $key_relation = $raw->relations[$key_field]['relation_display'];
                        $row[] = $item->$key_relation;
                    }
                    else if ($field['type'] == 'upload')
                    {
                        if (isset($field['preset']) && $field['preset'] == 'image')
                        {
                            if ($item->$key_field!='' && file_exists($field['upload_path'].'/'.$item->$key_field))
                            {
                                $val =  '<a href="#" data-toggle="modal" data-target="#image-'.md5($item->$key_field).'"><img width="100" src="'.URL::to($field['upload_path'].'/'.$item->$key_field).'" alt=""/></a>';
                                $val .= '<div class="modal fade" id="image-'.md5($item->$key_field).'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
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
                                </div>';
                                $row[] = $val;
                            }    
                        }
                        else
                            $row[] =  '<a href="'.URL::to($field['upload_path'].'/'.$item->$key_field).'">'.$item->$key_field.'</a>';
                    }
                    else 
                        $row[] =  $item->$key_field ;
                    ?> 
                <?php endif;?> 
            <?php endforeach;?>
                <?php 
                $val = '';
                foreach ($raw->actions as $action):
                    $val .= '<a class="'.(isset($action['class'])?$action['class']:'').'" title="'.(isset($action['title'])?$action['title']:'').'" href="'.URL::to(sprintf($action['url'],$item->$primary_key)).'" data-rel="'.(isset($action['data-rel'])?$action['data-rel']:'').'" data-redirect="'.(isset($action['data-redirect'])?$action['data-redirect']:'').'"></a>';
                endforeach;
                $row[] = $val;

                $output['aaData'][] = $row;
                ?>
    <?php endforeach;?>
    <?php endif;
echo json_encode( $output );
    ?>