<template>
    <div class="grid-wrap">
        <!--in order to display a list in Vue ==> "v-for directive"-->
        <div class="product-item" v-for="product in products" :key="product.id">
            <img :src="product.imageUrl" />
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">{{ product.price }}</p>
            <!-- in order to select the id we have to add : before the to-->
            <!--<router-link :to="`/products/${product.id}`"> -->
            <router-link :to="/products/ + product.id">
                <button>View Details</button>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductsList',
    props: ['products'],
}
</script>