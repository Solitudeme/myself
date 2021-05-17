<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods:{
    start(){
      // /**
      //  * 下载
      //  * @param  {String} url 目标文件地址
      //  *@param  {String} filename 想要保存的文件名称
      //  */
      function download(url, filename) {
          getBlob(url, function(blob) {
              saveAs(blob, filename);
          });
      }

      function getBlob(url,cb) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';
        xhr.onload = function() {
                if (xhr.status === 200) {
                    cb(xhr.response);
                }
        };
        xhr.send();
      }

      function saveAs(blob, filename) {
          if (window.navigator.msSaveOrOpenBlob) {
                  navigator.msSaveBlob(blob, filename);
          } else {
                  var link = document.createElement('a');
                  var body = document.querySelector('body');

                  link.href = window.URL.createObjectURL(blob);
                  link.download = filename;

                  // fix Firefox
                  link.style.display = 'none';
                  body.appendChild(link);
                  
                  link.click();
                  body.removeChild(link);

                  window.URL.revokeObjectURL(link.href);
          }
      }

      download('http://photo.16pic.com/00/01/11/16pic_111395_b.jpg','ok');
    },

    
    


    
  }

}
</script>

<style lang="scss" scoped>
.map3d{
  width: 100%;
  height: 600px;
  
}
</style>
