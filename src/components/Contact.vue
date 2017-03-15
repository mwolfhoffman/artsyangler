<template>

<div>
<h1>CONTACT</h1>

<form method="POST" action="http://formspree.io/YOUREMAILHERE">
  <input type="email" :style="styleObject" name="email" placeholder="Your email">
  <textarea name="message" :style="styleObject" placeholder="Your message"></textarea>
  <button type="submit" style="display:inline !important">Send</button>
</form>

</div>
</template>


<script>
    export default {
        name: 'contact',
        data(){
            return{
            styleObject: {
                backgroundColor:'white',
                opacity: '0.70'
             
            }

            }
        }
    }

</script>

<style scoped>
</style>