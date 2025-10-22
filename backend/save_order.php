<?php
include 'database.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    if (!isset($input['customer_name']) || !isset($input['phone_number']) || 
        !isset($input['order_items']) || !isset($input['total_amount'])) {
        echo json_encode(['success' => false, 'message' => 'Missing required fields']);
        exit;
    }

    $customer_name = trim($input['customer_name']);
    $phone_number = trim($input['phone_number']);
    $order_items = json_encode($input['order_items']);
    $total_amount = floatval($input['total_amount']);

    if (empty($customer_name) || empty($phone_number) || empty($input['order_items']) || $total_amount <= 0) {
        echo json_encode(['success' => false, 'message' => 'Invalid input data']);
        exit;
    }

    if (!preg_match('/^\d{11}$/', $phone_number)) {
        echo json_encode(['success' => false, 'message' => 'Invalid phone number format. Must be 11 digits.']);
        exit;
    }

    try {
        $sql = "INSERT INTO orders (customer_name, phone_number, order_items, total_amount) 
                VALUES (:customer_name, :phone_number, :order_items, :total_amount)";
        
        $stmt = $pdo->prepare($sql);
        $stmt->bindParam(':customer_name', $customer_name, PDO::PARAM_STR);
        $stmt->bindParam(':phone_number', $phone_number, PDO::PARAM_STR);
        $stmt->bindParam(':order_items', $order_items, PDO::PARAM_STR);
        $stmt->bindParam(':total_amount', $total_amount, PDO::PARAM_STR);

        if ($stmt->execute()) {
            echo json_encode(['success' => true, 'message' => 'Order saved successfully', 'order_id' => $pdo->lastInsertId()]);
        } else {
            echo json_encode(['success' => false, 'message' => 'Failed to save order']);
        }
    } catch(PDOException $e) {
        error_log("Database error: " . $e->getMessage());
        echo json_encode(['success' => false, 'message' => 'Database error: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Only POST method allowed']);
}
?>