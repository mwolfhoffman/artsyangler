<template>


    <div class="row">
        <div class="col s12 center-align single-item">
            <img class="center-align img-class" src="https://placehold.it/350x150/4286f4"
                alt="">
            <img class="center-align img-class" src="https://placehold.it/350x150/cc2480"
                alt="">
            <img class="center-align img-class" src="https://placehold.it/350x150/a31710"
                alt="">
            <img class="center-align img-class" src="https://placehold.it/350x150/79f2d5"
                alt="">
        
        </div>
    </div>

</template>

<script>
    $(document).ready(function () {
        $('.single-item').slick({

            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            fade: true,
            cssEase: 'linear',
            prevArrow: '<h1 style="color:blue;>im gonna break this intentionally</h1>',
            nextArrow: '<h1 style="color:blue;>holy shit that works im a genius!</h1>'


        });
    });


    export default {
        name: 'carousel'
    }

</script>

<style>
    .img-class {
        z-index: 10;
        margin-top: -.2%;
        border-radius: 10%;
        width: 200px;
        /*height: 200px;*/
    }
</style>