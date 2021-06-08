<template>
    <div>
        欢迎来到链表
    </div>
</template>
<script>
export default {
    name:'nodeLise',
    data(){
        return{

        }
    },
    mounted(){
        this.start();
    },
    methods:{
        start(){
            //定义结构
            var node = function(element){
                this.element = element;
                this.next = null;
            }
            var linkedList = function(num){
                this.head = new node(num);
                this.find = find;
                this.insert = insert;
                this.updata = updata;
                this.remove = remove;
            }
            //查找
            var find = function(item){
                let currNode = this.head;
                while(currNode.element !== item){
                    currNode = currNode.next;
                }
                return currNode;
            }
            //插入
            var insert = function(newElement,item){
                let newNode = new node(newElement);
                let currNode = this.find(item);
                newNode.next = currNode.next;
                currNode.next = newNode;
            }
            //修改
            var updata = function(item,newItem){
                let currNode = this.find(item);
                currNode.element = newItem;
            }
            //删除
            var remove = function(item){
                let currNode = this.head;
                while(currNode.next !== null && currNode.next.element !== item){
                    currNode = currNode.next;
                }
                if(currNode.next !== null){
                    currNode.next = currNode.next.next;
                }
            }
            //测试代码
            var list = new linkedList(2);
            list.insert(4,2);
            list.insert(3,4);
            console.log(list.head);
            // list.find(4);
            // console.log(list.find(4));
            // list.updata('third','three');
            // console.log(list);
            // list.remove('second');
            // console.log(list);

            var list1 = new linkedList(5);
            list1.insert(6,5);
            list1.insert(4,6);
            console.log(list1.head);


            //1.链表的处理
            function nodeList(list){
                var arr = [];
                while(list){
                    arr.push(list.element);//将当前节点储存到数组
                    list = list.next;//指针后移
                }
                return arr;
            }
            console.log(nodeList(list.head));
            console.log(nodeList(list1.head));
            let A1 = nodeList(list.head);
            let A2 = nodeList(list1.head);
            console.log(Array.isArray(A1));
            let num = Number(A1.join(''));
            let num1 = Number(A2.join(''));
            let str = String(num + num1);
            let arr = str.split('').reverse();
            arr.map((item,index)=>{
                console.log(item,index);
                arr[index] = Number(item);
            })
            console.log(arr);


            function array2list(ary) {
                if(ary.length === 0) {
                    return null
                }
                var nodes = []
                
                for(var i = 0; i < ary.length; i++) {
                    var node = {}
                    node.value = ary[i]
                    node.next = null
                    nodes.push(node)
                }

                for(var i = 0; i < nodes.length - 1; i++) {
                    nodes[i].next = nodes[i + 1]
                }

                return nodes[0]
            }
            console.log(array2list(arr));
            //链表是直接每个数值的第一个相加，余数后面进一位
            
        }
    }
}
</script>