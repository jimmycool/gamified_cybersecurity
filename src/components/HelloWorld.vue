<template>
<div>
  <ul>
      <li><a>Phishing</a></li>|
      <li><a>Cyber Forensics</a></li>
  </ul>    
</div> 
<div class="hello">
<!--<li v-for="(item, index) in y" v-bind:key="index">
  {{ item}}
</li>-->
<p>  
{{ minutes }}:
{{ seconds }} 
</p>
<p style="font-size: large;">Which of the following is a ransomware?</p>

  <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="Wanna Cry" style="border-radius: 20px;margin-right: 5px;margin-left: 5px;">WanaCry</a-radio-button>
        <a-radio-button value="Osborne" style="border-radius: 20px;margin-right: 5px;margin-left: 5px;">Osbourne</a-radio-button>
        <a-radio-button value="KingsLair" style="border-radius: 20px;margin-right: 5px;margin-left:5px;">KingsLair</a-radio-button>
        <a-radio-button value="Trickster" style="border-radius: 20px;margin-right: 5px;margin-left:5px;">Trickster</a-radio-button>
      </a-radio-group>
<br>
<br>

<a-button>Submit</a-button>
</div>
</template>
<script setup >
import { ref } from 'vue'
const items = ref([{ message: 'Foo' }, { message: 'Bar' }]);
//const y=ref(['zzz','BBBB','FFF','DDDD'].sort((a,b)=> b-a));
const minutes=ref(0);

//const hours=ref(0);
const seconds=ref(0);
// eslint-disable-next-line no-unused-vars
function increment()
{
  minutes.value++;
  items.value.values;
}
setInterval(() => {
  if(seconds.value>59)
  {
  
  minutes.value++;
  seconds.value=0;
  }
  seconds.value++;
}, 1000);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #09090976;
  cursor:grabbing;
}
a:hover
{
  border-bottom: blue;
  border-bottom: double;
  animation: shrink 1000 ms  cubic-bezier(1, 0.7, 0.7, 1) infinite;

}
p{
   font-size:xx-large;
   font-weight:900;
   font-display:inherit;
   color: rgb(65, 65, 241);
   float: none;
   display: block;
}
</style>