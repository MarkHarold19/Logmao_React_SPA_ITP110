<?php
include 'database.php';

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    try {
        $sql = "SELECT * FROM orders ORDER BY created_at DESC";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        
        $orders = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode(['success' => true, 'orders' => $orders]);
    } catch(PDOException $e) {
        echo json_encode(['success' => false, 'message' => 'Failed to fetch orders: ' . $e->getMessage()]);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Only GET method allowed']);
}
?>