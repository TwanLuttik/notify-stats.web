<template>
  <div id="TopChannels">
    <div v-for="(item, i) in top" :key="i" class="channel-bar" :style="'background-image: url(' + item.coverphoto2 + ')'">
      <div class="left">
        <p>#{{ i + 1 }}</p>
        <img class="avatar" :src="item.avatar">
        <div style="display:flex;flex-direction:column;justify-content: center;">
          <a class="username" @click="$router.push('/channel/' + item.username)">{{ item.displayname }}</a>
          <a class="link" @click="$root.to('https://notify.me/' + item.username )">notify.me/{{ item.username }}</a>
        </div>

      </div>

      <div class="right">
        <a>Subs: {{ niceNumber(item.subs) }}</a>
        <a class="posts">Posts: {{ niceNumber(item.posts) }}</a>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      ...this.mapData({
        top: 'stats/top'        
      })
    }
  },
  methods: {
    niceNumber(v) {
      if (v >= 1000 && v < 10000) {
        return v.slice(0, 1) + '.' + v.slice(1, v.length);
      } else if (v >= 10000) {
        return v.slice(0, 2) + '.' + v.slice(2, v.length);
      }
      return v;
    }
  },
  mounted() {
    if (this.top == null) this.$stats.getTop();
  }
}
</script>


<style lang="scss" scoped>
#TopChannels {
  margin-top: 150px;
  .avatar {
    height: 60px;
    width: 60px;
    border-radius: 75px;
    margin-right: 30px;
    margin-left: 20px;
  }
  .coverphoto {
    width: 100%;
    position: relative;
  }
  .subs,
  .link {
    cursor: pointer;
    width: fit-content;
    margin: 0 auto;

    transition: color .1s ease-in-out;
    &:hover {
      color: #476AFF;
    }
  }
  .channel-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0;
    .left {
      display: flex;
      align-items: center;
      .username {
        font-weight: bold;
        margin-bottom: 3px;
        font-size: 18px;
        cursor: pointer;

        transition: color .1s ease-in-out;
        &:hover {
          color: #476AFF;
        }
      }
      a {
        text-align: left;
      }
    }
    .right {
      color: #828282;
      display: flex;
      flex-direction: column;
      font-size: 16px;
      text-align: left;
      width: 100px;
    }
    .line {
      height: 3px;
      width: 100%;
      background: #476AFF;
    }
  }
  
}
</style>