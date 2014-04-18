@include('raw::tabs')
<div class="row">
    <div class="col-lg-12">
        <div class="panel panel-default">
            <div class="panel-heading">
              <?php echo $raw->subtitle?>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="col-lg-12">
                        <?php echo Form::open(array('url' => Request::path(),'id'=>'raw-edit','role'=>'form'/*,'enctype'=>'multipart/form-data'*/,'class'=>'raw-form')) ?>
                            <button type="reset" class="btn btn-default"><?php echo $raw->strings['reset']?></button>
                            <button type="submit" data-rel="" class="btn btn-success"><?php echo $raw->strings['submit_continue']?></button>
                            <button type="submit" data-rel="redirect" data-redirect="<?php echo URL::to($raw->path)?>" class="btn btn-primary"><?php echo $raw->strings['submit']?></button>
                            <?php 
                            foreach ($raw->getFields() as $key=>$field):
                                if (isset($field['callback_edit']))
                                { 
                                    echo call_user_func($raw->class.'::'.$field['callback_edit'],$raw->item); 
                                }
                                else
                                {
                                    echo View::make('raw::fields.'.$field['type'], array('raw'=>$raw,'field'=>$field,'key'=>$key));
                                }
                                ?>
                                <div id="error_<?php echo $key ?>" class="error raw-error"></div>
                                <?php             
                            endforeach;?>
                            <button type="reset" class="btn btn-default"><?php echo $raw->strings['reset']?></button>
                            <button type="submit" data-rel="" class="btn btn-success"><?php echo $raw->strings['submit_continue']?></button>
                            <button type="submit" data-rel="redirect" data-redirect="<?php echo URL::to($raw->path)?>" class="btn btn-primary"><?php echo $raw->strings['submit']?></button>
                        <?php echo Form::close() ?>
                    </div>
                </div>
                <!-- /.row (nested) -->
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
    <!-- /.col-lg-12 -->
</div>