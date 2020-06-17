<template>

    <!-- 评论信息 -->
    <div class="CommentInfo">
        <div class="comment-title">
            <span>买家评论 &nbsp;3587 | &nbsp;销量 &nbsp; 1130</span>
            <span> > </span>
        </div>
        <div class="comment-card">
            <span>有图片(231)</span>
            <span>质量好(223)</span>
            <span>有图片(231)</span>
            <span>是真货(231)</span>
            <span>尺寸无偏差(1341)</span>
            <span>有图片(231)</span>
            <span>料子很不错(231)</span>
        </div>
        <div class="user-comment">
            <div class="user-info">
                <img src="https://s5.mogucdn.com/p1/160105/idid_ifrwenjuhfsggntfguzdambqhayde_160x160.jpg_48x48.webp">
                <span>B**X</span>
            </div>
            <div class="user-comment-body">
                衣服收到了，很合适
            </div>
            <div class="user-goods">
                <span>身高: 170cm</span>
                <span>体重: 45kg</span>
            </div>

            <div class="user-line"></div>

            <div class="user-info">
                <img src="https://s5.mogucdn.com/mlcdn/5abf39/190727_191b23c7ec422b47j73la0l7b96d9_132x132.jpg_48x48.webp">
                <span>用户213</span>
            </div>
            <div class="user-comment-body">
                挺好看的
            </div>
            <div class="user-goods">
                <span>身高: 170cm</span>
                <span>体重: 45kg</span>
                <span>是否合身: 合身</span>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "CommentInfo",
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .CommentInfo{
        font-size: 13px;
        margin-top: 10px;
        padding: 8px 10px 0;
        border-top: 8px solid rgba(100, 100, 100, .1);
    }

    .comment-title{
        font-size: 15px;
        display: flex;
        justify-content: space-between;

    }
    .comment-card{
        margin-top: 10px;
        font-size: 12px;
        display: flex;
        flex-wrap: wrap;
    }
    .comment-card span{
        margin-top: 5px;
        /*width: 33%;*/
        margin-left: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
        background-color: #ff5777;
        border-radius: 3px;
        color: #fff;

    }
    .user-comment{
        margin-top: 20px;
        padding: 0 10px;
    }
    .user-info{
        display: flex;
        font-size: 15px;
        font-weight: 500;
        align-items: center;
    }
    .user-info img{
        border-radius: 50%;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .user-comment-body{
        margin-bottom: 20px;
    }
    .user-goods{
        font-size: 10px;
    }
    .user-line{
        border-bottom: 1px solid rgba(100, 100, 100, .1);
        margin: 10px auto;
    }

</style>
