<template>

    <section class="navbar">
        <ul class="nav-container">
            <li class="nav-items"> <router-link :to="{name: bio}"> Biography </router-link> </li>
            <li class="nav-items"> <router-link :to="{name: statement}"> Artist Statement </router-link> </li>
        </ul>
    </section>

</template>

<script>
export default {
    name: 'nav'
}
</script>