<?php
echo '<tr>';
if (isset($field['preset']) && $field['preset'] == 'image')
{	        	

    echo '<td width="80%"><a href="#" data-toggle="modal" data-target="#image-'.md5($value).'"><img width="100" src="'.URL::to($field['upload_path'].'/'.$value).'" alt=""/></a>';
    echo '<div class="modal fade" id="image-'.md5($value).'" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" style="display: none;">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                </div>
                <div class="modal-body">
                    <img src="'.URL::to($field['upload_path'].'/'.$value).'" width="100%"/>
                </div>
            </div>
            <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
    </div></td>';
        
}
else
    echo '<td><p class="form-control-static"><a href="'.URL::to($field['upload_path'].'/'.$value).'">'.$value.'</a></p></td>';

echo '<td><a class="btn btn-danger delete" href="'.$raw->path.'/upload/delete/'.$value.'">'. $raw->strings['file_delete'] .'</a></td>';
echo '</tr>';