<?php
    $primary_key = $raw->primary_key;
?>@include('raw::tabs')
<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <?php echo $raw->subtitle ?>
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body">
                <div class="table-responsive">
                    <form action="" method="post" id="raw-list-form">
                        <table class="table table-striped table-bordered table-hover list-order" id="raw-list" data-depth="<?php if ($raw->parent_key) echo 500; else echo 0 ?>">
                            <thead>
                                <tr>
                                    <?php foreach ($raw->getFields() as $field):?>
                                        <?php if (isset($field['column']) && $field['column']):?>
                                        <th><?php echo $field['title']?></th>
                                        <?php endif;?> 
                                    <?php endforeach?>
                                    <th style="width:120px;" class="center"><?php echo $raw->strings['actions']?></th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php 
                                $items = $raw->getItems();
                                //Webtools::pre($items);
                                if (!empty($items)):?>

                                <?php foreach ($items as $key=>$item):?>
                                    <tr class="draggable">
                                        <?php 
                                        $field_index = 0;
                                        foreach ($raw->getFields() as $key_field=>$field):?>
                                            <?php if (isset($field['column']) && $field['column']):?>
                                                <td><?php 
                                                if ($field_index == 0)
                                                {
                                                    ?>
                                                    <input class="primary-id" name="item-<?php echo $item->{$raw->primary_key }?>-id" value="item-<?php echo $item->{$raw->primary_key }?>" type="hidden" />
                                                    <input class="row-depth" name="item-<?php echo $item->{$raw->primary_key }?>-depth" value="<?php if (isset($item->depth)) echo ($item->depth + 1);else echo 1?>" type="hidden" /><?php
                                                }

                                                if (isset($field['parent_key']) && $field['parent_key'])
                                                {
                                                    ?>
                                                    <select class="row-parent" name="item-<?php echo $item->{$raw->primary_key }?>-parent">
                                                        <option value="0"></option>
                                                        <?php 
                                                        foreach ($items as $cs):
                                                            if ($cs->{$raw->primary_key} != $item->{$raw->primary_key}):
                                                                ?>
                                                                <option <?php if ($item->{$raw->parent_key} == $cs->{$raw->primary_key}) echo 'selected="selected"'?> value="item-<?php echo $cs->{$raw->primary_key}?>"><?php echo $cs->{$raw->title_key}?></option>
                                                            <?php 
                                                            endif;
                                                        endforeach;?>
                                                    </select>
                                                    <?php
                                                }
                                                else if (isset($field['order_key']) && $field['order_key'])
                                                {
                                                    ?>
                                                    <select class="row-weight" name="item-<?php echo $item->{$raw->primary_key }?>-weight">
                                                        <?php for($i=0;$i<500;$i++):?>
                                                        <option value="<?php echo $i?>" <?php if ($i==$item->priority) echo 'selected="selected" '?>><?php echo $i?></option>
                                                        <?php endfor;?>
                                                    </select>
                                                    <?php
                                                }
                                                else if (isset($field['status_key']) && $field['status_key'])
                                                {
                                                    ?>
                                                    <input type="checkbox" name="item-<?php echo $item->{$raw->primary_key }?>-status" value="1" <?php if ($item->{$raw->status_key }):?>checked="checked"<?php endif;?> />
                                                    <?php
                                                }
                                                else if (isset($field['callback_column']))
                                                { 
                                                    echo call_user_func($raw->class.'::'.$field['callback_column'],$item); 
                                                }
                                                else if (isset($raw->relations[$key_field]))
                                                {
                                                    $key_relation = $raw->relations[$key_field]['relation_display'];
                                                    echo $item->$key_relation;
                                                }
                                                else if ($field['type'] == 'upload')
                                                {
                                                    if (isset($field['preset']) && $field['preset'] == 'image')
                                                    {
                                                        if ($item->$key_field!='' && file_exists($field['upload_path'].'/'.$item->$key_field))
                                                        {
                                                            echo '<a href="#" data-toggle="modal" data-target="#image-'.md5($item->$key_field).'"><img width="100" src="'.URL::to($field['upload_path'].'/'.$item->$key_field).'" alt=""/></a>';
                                                            echo '<div class="modal fade" id="image-'.md5($item->$key_field).'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
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
                                                        }    
                                                    }
                                                    else
                                                        echo '<a href="'.URL::to($field['upload_path'].'/'.$item->$key_field).'">'.$item->$key_field.'</a>';
                                                }
                                                else 
                                                    echo $item->$key_field ;
                                                ?></td> 
                                                <?php 
                                                $field_index++;
                                            endif;?> 
                                        <?php endforeach;?>
                                         <td class="center actions">
                                            @include('raw::actions')
                                        </td>
                                    </tr>
                                <?php endforeach;?>

                                <?php endif;?>
                            </tbody>
                        </table>
                        <button type="submit" data-rel="redirect" data-redirect="<?php echo URL::to($raw->path)?>" class="btn btn-primary"><?php echo $raw->strings['submit']?></button>
                    </form>
                </div>
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
    <!-- /.col-lg-12 -->
</div>