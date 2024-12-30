<template>
  <div>
    <div class="container">
      <div class="home-content">
        <div class="home-content-line">
          <el-row :gutter="20">
            <el-col :md="6">
              <div class="crad-item">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>在职人数</span>
                    <span style="float:right;">
                      <i class="iconfont icon-shouye" style="padding-right: 6px;"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <span class="crad-item-number">20,400</span>
                    </div>
                    <div class="crad-item-number-text">
                      <span>较昨日 <span style="color:#22c55e;">+70%</span></span>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :md="6">
              <div class="crad-item">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>部门数量</span>
                    <span style="float:right;">
                      <i class="iconfont icon-shouye" style="padding-right: 6px;"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <span class="crad-item-number">14</span>
                    </div>
                    <div class="crad-item-number-text">
                      <span>较昨日 <span style="color:#22c55e;">+2%</span></span>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :md="6">
              <div class="crad-item">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>职位数量</span>
                    <span style="float:right;">
                      <i class="iconfont icon-shouye" style="padding-right: 6px;"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <span class="crad-item-number">402</span>
                    </div>
                    <div class="crad-item-number-text">
                      <span>较昨日 <span style="color:#22c55e;">+1%</span></span>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :md="6">
              <div class="crad-item">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>今日访问</span>
                    <span style="float:right;">
                      <i class="iconfont icon-shouye" style="padding-right: 6px;"></i>
                    </span>
                  </div>
                  <div>
                    <div>
                      <span class="crad-item-number">18,700</span>
                    </div>
                    <div class="crad-item-number-text">
                      <span>较昨日 <span style="color:#22c55e;">+66%</span></span>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="home-content-line">
          <el-row :gutter="20">
            <el-col :md="18">
              <div class="chars-crad-item"></div>
            </el-col>
            <el-col :md="6">
              <div class="chars-crad-item"></div>
            </el-col>
          </el-row>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>

<style>
.container {
  min-height: 100%;
}

.home-content {
  padding: 12px;
}

.home-content-line {
  margin-bottom: 18px;
}


.chars-crad-item {
  height: 180px;
  background-color: #fff;
  border-radius: 5px;
}

.chars-crad-item {
  height: 400px;
}

.crad-item-number {
  font-size: 24px;
}

.crad-item-number-text {
  padding-top: 20px;
}
</style>
