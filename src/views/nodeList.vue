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
            var linkedList = function(){
                this.head = new node('head');
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
            var list = new linkedList();
            list.insert('first','head');
            list.insert('second','first');
            list.insert('third','second');
            console.log(list);
            list.find('first');
            console.log(list.find('first'));
            list.updata('third','three');
            console.log(list);
            // list.remove('second');
            // console.log(list);
        }
    }
}
</script>