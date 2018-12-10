<template>
  <BWidthWrap>
    <!-- fixme error on b-width-wrap -->
    <div slot="main">
      <BCard>
        <BCardHeader title="积分榜" />
        <BCardBody>
          <table class="table">
            <tr>
              <th>QQ ID</th>
              <th>积分</th>
              <th>总签到次数</th>
              <th>该月签到次数</th>
              <th>上次签到</th>
            </tr>
            <tr v-for="(member, idx) in membersInfo" :key="member">
              <td>{{ idx }}</td>
              <td>{{ member.rating }}</td>
              <td>{{ member.times_all }}</td>
              <td>{{ member.times_month }}</td>
              <td>{{ member.date }}</td>
            </tr>
          </table>
        </BCardBody>
      </BCard>
    </div>
    <div slot="side">
      <BCard>
        <BCardHeader title="所有群" />
        <BCardBody>
          <div class="board">
            <div
              v-for="group in groups"
              :key="group"
              class="group"
              @click="getUsersInfo(group)"
            >
              {{ group }}
            </div>
          </div>
        </BCardBody>
      </BCard>
    </div>
  </BWidthWrap>
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
    await this.getAllGroups()
  },

  methods: {
    async getAllGroups () {
      this.groups = await axios.get('/api/checkin').then(res => {
        return res.data
      })
    },

    async getUsersInfo (val) {
      this.membersInfo = await axios.get('/api/checkin', { params: { id: val } }).then(res => {
        return res.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@kuen/components/src/stylus/setting.styl"

  .group {
    padding-top: 1rem
    color: #6CB2EB
    cursor: pointer

    &:first-child {
      padding-top: 0
    }
  }
</style>
