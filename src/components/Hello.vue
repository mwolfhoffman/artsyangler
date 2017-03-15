<template>

    <div class="container">
        <!-- Header -->
        <section id="header" class="center-align">
            <header class="major top center-align">
                <div class="title row">
                    <h1 class="col s12">Jeremy Nordin Berghuis</h1>
                </div>
                <!--<p class="col s12 hide-on-small-only">Artsy Angler</p>-->
            </header>
        </section>
        <router-view></router-view>

    </div>

    </div>
</template>


<script>
    export default {
        name: 'hello'
    }

</script>

<style lang="css" scoped>
    @import url('https://fonts.googleapis.com/css?family=Baloo+Bhaina');
    @media screen and (max-width: 480px) {
        #header {
            height: 40vh;
        }
    }
    
    #header {
        height: 20vh;
    }
    
    .top {
        margin-bottom: 100%;
    }
    
    .tab-nav {
        display: flex;
        text-align: center;
        justify-content: row;
    }
    /*    
    .tab-item {
        margin: 1%;
        width: 50px;
    }
    */

</style>