<template>
    <section id="one" class="main special">
        <div class="container">
            <!--<span class="image fit primary"><img src="images/pic02.jpg" alt="" /></span>-->
            <div class="content">

                <div class="row">
                    <router-link class="col s3 offset-s3" style="color: #8cd1a8 !important" :to="'/about/biography'">Biography</router-link>
                    <router-link class="col s3" style="color: #8cd1a8 !important" :to="'/about/contact'">Contact</router-link>
                </div>


                <header class="row major">
                    <h2 class="col s12">Artist Statement</h2>
                </header>


                <p class="col s12">
                    I express myself best through making art. From start to finish the process of making is both therapeutic and enlightening.
                    In making connections between my artworks and the world around me I discover balance. I feel most fulfilled
                    when I can develop work that allows relationships to form between the pieces, the viewer, and myself.
                    The tactile and utilitarian nature of clay lends itself well to making work that people want to touch,
                    hold, and use. In my ceramics I make forms that can be utilized by others in their day-to-day lives.
                    The connections they have to the work no longer comes from the subject matter but instead the way they
                    view the piece as having an intended purpose. Whether in its subject matter or in its functionality,
                    I make art for the purpose of creating relationships. It is in these relationships that I connect myself,
                    my art, and the viewer together.
                    <br><em>  -Jeremy </em>
                </p>
                <!--<ul class="icons-grid">
                    <li>
                        <span class="icon major fa-camera-retro"></span>
                        <h3>Magna Etiam</h3>
                    </li>
                    <li>
                        <span class="icon major fa-pencil"></span>
                        <h3>Lorem Ipsum</h3>
                    </li>
                    <li>
                        <span class="icon major  fa-paint-brush"></span>
                        <h3>Nulla Tempus</h3>
                    </li>
                    <li>
                        <span class="icon major fa-coffee"></span>
                        <h3>Sed Feugiat</h3>
                    </li>
                </ul>-->
            </div>
            <!--<a href="#three" class="goto-next scrolly">Next</a>-->
        </div>
    </section>
</template>

<script>
    export default {
        name: 'statement'
    }

</script>

<style lang="css" scoped>
      

</style>