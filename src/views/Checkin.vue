<template>
  <div class="width-wrap">
    <div slot="main" class="fix-main">
      <BCard>
        <BCardHeader title="积分榜" />
        <BCardBody>
          <div>
            {{ membersInfo }}
          </div>
        </BCardBody>
      </BCard>
    </div>
    <div slot="side" class="fix-side">
      <BCard>
        <BCardHeader title="所有群" />
        <BCardBody>
          <div class="board">
            <div
              v-for="group in groups"
              :key="group"
              class="group"
              @click="membersInfo = getUsersInfo(group)"
            >
              {{ group }}
            </div>
          </div>
        </BCardBody>
      </BCard>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Checkin',
  data () {
    return {
      groups: undefined,
      membersInfo: undefined,
      selectedGroup: undefined
    }
  },

  async mounted () {
    this.groups = await this.getAllGroups()
  },

  methods: {
    async getAllGroups () {
      return axios.get('/api/checkin').then(res => {
        return res.data
      })
    },

    async getUsersInfo (val) {
      return axios.get('/api/checkin', { params: { id: val } }).then(res => {
        return res.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/components/src/stylus/setting.styl"
  .board {

  }

  .width-wrap {
    display: flex

    h1, h2, h3, h4, h5, h6, span {
      color: #333
    }

    @media $display-breakpoints.sm-and-down {
      margin-left .5rem
      margin-right .5rem
      flex-direction: column-reverse
    }
  }

  .group {
    padding-top: 1rem
    color: #6CB2EB
    cursor: pointer

    &:first-child {
      padding-top: 0
    }
  }

  .fix-main {
    flex: 6 1 auto
    @media $display-breakpoints.sm-and-down {
      margin-top: 1.5rem
    }
  }

  .fix-side {
    flex: 4 0 auto
    margin-left: 1.5rem
    @media $display-breakpoints.sm-and-down {
      margin-top 1rem
      margin-left: 0
    }
  }
</style>
