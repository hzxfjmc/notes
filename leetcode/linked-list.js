
//判断链表是否有闭环
function hadCyle(head){
    if(!head && !head.next){
        return false
    }
    let fast = head.next.next,slow = head.next;
    while(fast !== slow){
        if(!fast || !slow ) return false;
        fast = head.next.next;
        slow = head.next
    }
    return true
}
/**
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的
 * 输入 1 -> 2 -> 4, 1 -> 3-> 4
 * 输出 1 -> 1 -> 2 -> 3 -> 4 -> 4
 */

 function mergeTwoList(l1,l2){
     if(l1 === null){
         return l2
     }
     if(l2 === null) {
         return l1
     }
     if(l1.val <= l2.val){
        l1.next = mergeTwoList(l1.next,l2)
        return l1
     }else{
         l2.next = mergeTwoList(l2.next,l1)
         return l2
     }

 }