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
            /*展开处理版本*/
            // new Promise(resolve => {
            //     console.log('step 1');
            //     setTimeout(() => {
            //         resolve('100');
            //     },1000)
            // }).then(value => {
            //     return new Promise(resolve => {
            //         console.log('step 1-1');
            //         setTimeout(() => {
            //             resolve('110');
            //         },3000)
            //     })
            // }).then(value => {
            //     console.log('step 1-2');
            //     return value;
            // }).then(value => {
            //     console.log('step 1-3');
            //     return value;
            // }).then(value => {
            //     console.log(value);
            //     console.log('step 2');
            // })

            /*两种错误处理*/
            // new Promise((resolve) => {
            //     setTimeout(() => {
            //         throw new Error('bye');
            //     },1000)
            // }).then((val) => {
            //     console.log(val);
            // }).catch((error) => {
            //     console.log('Error',error);
            // })
            /*错误处理 */
            // new Promise((resolve,reject) => {
            //     setTimeout(() => {
            //         reject('bye');
            //     },2000)
            // }).then((val) => {
            //     console.log(val);
            // }).catch((err) => {
            //     console.log('Error',err);
            // })

            /*Promise all */
            // function cutUp(){
            //     console.log('开始切菜');
            //     var p = new Promise(function(resolve,reject){
            //         setTimeout(() => {
            //             console.log('切菜完毕');
            //             resolve('切好的菜');
            //         },1000)
            //     });
            //     return p;
            // }

            // function boil(){
            //     console.log('开始烧水');
            //     var p = new Promise(function(resolve,reject){
            //         setTimeout(() => {
            //             console.log('烧水完毕');
            //             resolve('烧好的水');
            //         },1000)
            //     });
            //     return p;
            // }

            // Promise.all([cutUp(),boil()]).then((result) => {
            //     console.log('准备工作完毕');
            //     console.log(result);
            // })

            // Promise.race和Promise.all类似，区别在于它有任意一个完成就算完成  
            let p1 = new Promise(resolve => {
                setTimeout(() => {
                    resolve('I\`m p1 ')
                }, 1000)
            });
            let p2 = new Promise(resolve => {
                setTimeout(() => {
                    resolve('I\`m p2 ')
                }, 2000)
            });
            Promise.race([p1, p2]).then(value => {
                    console.log(value)
            })









        }
    },

}
</script>
<style lang="scss" scoped>

</style>