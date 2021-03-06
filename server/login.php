<?php
    //登录
    // header('Content-Type:application/json; charset=utf-8');
    require_once('connectvars.php');

    $data = json_decode(file_get_contents('php://input'),true);//转换数据格式
    $username = $data['username'];
    $password = $data["password"];

    require_once('encodeToken.php');//生成自定义token

    if($username != '' && $password != ''){
        $conn = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
        if($conn != null){
            $username = mysqli_real_escape_string($conn, trim($username));
            $password = mysqli_real_escape_string($conn, trim($password));

            $sql = "SELECT * FROM user 
                    where account = '$username' 
                    AND password = password($password)";
            $result = mysqli_query($conn, $sql);
            $resArray = mysqli_fetch_all($result,MYSQL_ASSOC);//数组 

            if (mysqli_num_rows($result) == 1) {
                $result_array[0] = ['token'=>$token,'code'=>'1','message'=>'登陆成功!'];
                $result_array[1] = $resArray;
            }else{
				$result_array[0] = ['code'=>'0','message'=>'用户名或密码输入错误'];               
            }
            mysqli_close($conn);
        }else{
            $result_array[0] = ['code'=>'0','message'=>'数据库连接失败！'];
        }
        echo json_encode($result_array);
    }

?>