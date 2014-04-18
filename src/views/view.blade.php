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
                        <?php 
                        foreach ($raw->getFields() as $key=>$field):
                            if (isset($field['callback_view']))
                            { 
                                echo call_user_func($raw->class.'::'.$field['callback_view'],$item); 
                            }
                            else
                                echo View::make('raw::fields.'.$field['type'], array('raw'=>$raw,'field'=>$field,'key'=>$key));                   
                        endforeach;
                        ?>
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