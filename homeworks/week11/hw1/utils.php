<?php
    function generateToken() {
        $s = '';
        for($i = 1; $i<=16; $i++) {
            $s .= chr(rand(65,90));
        }
        return $s;
    }
    
    function getUserFromUsername($username) {
        global $conn;

        $sql = "SELECT * FROM roroiii_user WHERE username =?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param('s', $username);
        $result = $stmt->execute();
        if(!$result) {
            die($conn->error);
        }
        $result = $stmt->get_result();
        $row = $result->fetch_assoc();
        return $row;
    }
    
    function escape($str) {
        return htmlspecialchars($str, ENT_QUOTES);
    }
    
    // $action: update, delete, create
    function hasPermission($user, $action, $comment) {
        if($user["role"] === "ADMIN") {
            return true;
        }
        if($user["role"] === "NORMAL") {
            if ($action === "create") return true;
            return $comment["username"] === $user["username"];
        }
        if($user["role"] === "BANNED") {
            return $action !== "create";
        }
    }
    function isAdmin($user) {
        return $user["role"] === "ADMIN";
    }