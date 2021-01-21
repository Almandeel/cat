<template>
    <div class="posts">
        <div class="posts-title">
            <div class="overlay"></div>
            <h2>المنتجات و الخدمات</h2>
        </div>

        <product />
    </div>
</template>

<script>
    import Product from "@/components/ProductComponent.vue"
    export default {
        components : {
            Product
        }
    }
</script>

<style lang="scss">
    .posts {
        direction: rtl;
        .posts-title {
            z-index: 2;
            color: #fff;
            height: 100%;
            width: 100%;
            padding: 5% 0;
            background-image: url('../images/posts.jpg');
            position: relative;

            h2 {
                padding: 0 10%;
            }

            h2:after {
                content: "";
                width: 2%;
                height: 50%;
                color: #fff;
                border: 1px solid #fff;
                display: block;
            }

            .overlay {
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                background-color: rgba(14, 30, 168, 0.226);
                width: 100%;
                height: 100%;
                z-index: -1;
            }
        }
    }
</style>