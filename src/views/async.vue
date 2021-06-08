<template>
    <div>
        欢迎来到async
    </div>
</template>
<script>
export default {
    name:'aspnc',
    data(){
        return{

        }
    },
    mounted(){
        this.start();
    },
    methods:{
        start(){
            // async function timeout(flag){
            //     if(flag){
            //         return 'hello world';
            //     } else {
            //         throw 'my god,failure'
            //     }
                
            // }
            // timeout().then((result) => {
            //     console.log(result);
            // })
            
            // console.log('虽然我在后面，但是我先执行');
            // console.log(timeout(true));
            // console.log(timeout(false));

            // timeout(false).catch(err => {
            //     console.log(err)
            // })

            //2s之后返回双倍的值
            function doubleAfter2seconds(num){
                return new Promise((resolve,reject) => {
                    setTimeout(() => {
                        resolve(2 * num);
                    },2000)
                });
            }

            async function testResult(){
                let first = await doubleAfter2seconds(30);
                let second = await doubleAfter2seconds(50);
                let third = await doubleAfter2seconds(30);
                console.log(first + second + third);
            }
            testResult();
        }
    }
}
</script>