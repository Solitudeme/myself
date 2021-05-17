<template>
    <div>
        <p>欢迎来到promise</p>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.start();
    },
    methods:{
        start(){
           console.log('start');
        //    new Promise(
        //        function(resolve,reject){
        //         //    resolve('成功');
        //         //    reject('失败');
        //            setTimeout(() => {
        //                resolve('hello');
        //            },2000)
        //        }
        //    ).then((val) =>{
        //        console.log(val);
        //        return new Promise(resolve => {
        //            setTimeout(() => {
        //                resolve('world');
        //            },2000)
        //        }).then((val) => {
        //            console.log(val);
        //        })
        //    })

            // let pro = new Promise(resolve => {
            //     setTimeout(() => {
            //         resolve('hello world');
            //     },2000)
            // })
            // setTimeout(() => {
            //     pro.then((value) => {
            //         console.log(value);
            //     })
            // },2000);


            // new Promise(resolve => {
            //     console.log('step 1');
            //     setTimeout(() => {
            //         resolve('100');
            //     },1000)
            // }).then((value) => {
            //     return new Promise(resolve => {
            //         console.log('step 1-1');
            //         setTimeout(() => {
            //             resolve('110');
            //         },1000)
            //     }).then((value) => {
            //         console.log('setp 1-2');
            //         return value;
            //     }).then((value) => {
            //         console.log('setp 1-3');
            //         return value;
            //     })
            // }).then((value) => {
            //     console.log(value);
            //     console.log('step 2');
            // })
            //展开处理版本
            new Promise(resolve => {
                console.log('step 1');
                setTimeout(() => {
                    resolve('100');
                },1000)
            }).then(value => {
                return new Promise(resolve => {
                    console.log('step 1-1');
                    setTimeout(() => {
                        resolve('110');
                    },3000)
                })
            }).then(value => {
                console.log('step 1-2');
                return value;
            }).then(value => {
                console.log('step 1-3');
                return value;
            }).then(value => {
                console.log(value);
                console.log('step 2');
            })















        }
    },

}
</script>
<style lang="scss" scoped>

</style>