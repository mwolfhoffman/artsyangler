<template>

    <div>


        <header class="major">
            <h1>Gallery</h1>
        </header>

        <h1>Ceramics</h1>
        <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/1"></a>
            <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/2"></a>
            <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/3"></a>
            <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/4"></a>
            <a class="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/5"></a>
        </div>

        <h1>Photography</h1>
                <div class="carousel">
            <a class="carousel-item" href="#one!"><img src="http://lorempixel.com/250/250/nature/5"></a>
            <a class="carousel-item" href="#two!"><img src="http://lorempixel.com/250/250/nature/6"></a>
            <a class="carousel-item" href="#three!"><img src="http://lorempixel.com/250/250/nature/7"></a>
            <a class="carousel-item" href="#four!"><img src="http://lorempixel.com/250/250/nature/8"></a>
            <a class="carousel-item" href="#five!"><img src="http://lorempixel.com/250/250/nature/9"></a>
        </div>


    </div>


</template>

<script>
    $(document).ready(function () {
        $('.carousel').carousel();
    });

    export default {
        name: 'gallery'
    }

</script>

<style lang="css" scoped>
</style>