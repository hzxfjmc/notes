/**
 * 将有序数组转化为二叉树
 * 给定有序数组: [-10,-3,0,5,9],
    一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

        0
        / \
    -3   9
    /   /
    -10  5
 */
function sortBinaty_tree(arr){
    if(arr.length === 0){  //边界条件
        return null
    }
    if(arr.length === 1){
        return new TreeNode(arr[0])
    }
    //求中间数
    let mid = Math.floor(arr.length/2)
    //二叉树根
    let root = new TreeNode(arr[mid])
    //递归二分法
    root.left = sortBinaty_tree(arr.slice(0,mid))
    root.right = sortBinaty_tree(mid,arr.length-1)
    return root
}

// sortBinaty_tree([-10-3-0,5,9])


/**
 * 二叉树中序遍历
 * 输入: [1,null,2,3]
   1
    \
     2
    /
   3
   输出: [1,3,2]
 */
// 递归版本
var inOrderTraverse = (root) => {
    let result = []
    var inOrder  = (node) => {
        if(node) {
            // 先遍历左子树
            inOrder (node.left)
           // 再根节点
            result.push(node.val)
            // 最后遍历右子树
            inOrder (node.right)
        }
    }
    inOrder(root)
    return result
};

//迭代版本
var inOrderTraverse = function(root){
    let list = [];
    let stack = [];
    let node = root
    while(stack.length ||node){
        if(node){
            stack.push(node)
            node = node.left;
        }
        node = stack.pop();
        list.push(node.val)
        node = node.right
    }
    return list
}