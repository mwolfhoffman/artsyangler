<template>

    <section id="one" class="main special">
        <div class="container">
            <div class="content">
                <div class="row">
                    <router-link class="col s3 offset-s3" style="color: #8cd1a8 !important" :to="'/about/statement'">Statement</router-link>
                    <router-link class="col s3" :to="'/about/contact'" style="color: #8cd1a8 !important">Contact</router-link>
                </div>

                <header class="row major">
                    <h2 class="col s12">Who Is the Artsy Angler</h2>
                </header>


                <p class="col s12">Jeremy Nordin-Berghuis, “The Artsy Angler” grew up in small town northern Wisconsin. From an early age, Jeremy
                    developed an interest and appreciation for art. Surrounded by talented artisans and craftsman within
                    his family, Jeremy was introduced to working with wood, metals, fibers, and painting. Driven to understanding
                    and developing his own skills, he actively pursued art, predominantly ceramics, throughout high school
                    and on into adulthood. This led to jobs in clay and print making studios as well as machine shops. In
                    addition to concentrating in art, Jeremy has a deep caring and passion for working with and understanding
                    people. In 2009 Jeremy began working at a summer camp. His interest in working with kids there helped
                    in motivating him towards going back to school. In 2011 Jeremy attended the University of Wisconsin River
                    Falls where he earned his B.S.A. in Art Education with an emphasis in ceramics. Today, Jeremy lives and
                    works in Boise Idaho. It is there that his love and passion for ceramics has developed into a career
                    in making. His work is designed and meant to be held, used, and enjoyed by others around him. </p>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: 'bio'
    }

</script>

<style lang="css" scoped>

    overflow:scroll;

    section {
        height: 90vh;
    }

    a {
        color: #8cd1a8;
    }
</style>