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

sortBinaty_tree([-10-3-0,5,9])