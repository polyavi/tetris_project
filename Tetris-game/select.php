<?php
 $connect = mysqli_connect("localhost", "root", "", "tetris");
 $output = '';
 $sql = "SELECT * FROM highscore ORDER BY score DESC";
 $result = mysqli_query($connect, $sql);
 $output .= '
      <div class="table-responsive">
           <table class="table-bordered">
                <tr>
                     <th width="40%">Name</th>
                     <th width="40%">Score</th>

                </tr>';
 if(mysqli_num_rows($result) > 0)
 {
     while($row = mysqli_fetch_array($result))
     {
         $output .= '
                <tr>
                     <td class="name" data-id1="'.$row["id"].'">'.$row["name"].'</td>
                     <td class="score" data-id2="'.$row["id"].'">'.$row["score"].'</td>
                </tr>
           ';
     }
 }
 else
 {
     $output .= '<tr>
                          <td colspan="4">Data not Found</td>
                     </tr>';
 }
 $output .= '</table>
      </div>';
 echo $output;
 ?>