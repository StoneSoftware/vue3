<template>
    <a-layout class="layout-demo">
      <!--<a-layout-header>Header</a-layout-header>-->
      <a-layout>
        <a-layout-sider :resize-directions="['right']" style="height:100%;">
          <leftTree></leftTree>
        </a-layout-sider>
        <a-layout-content>
          xxxx
        </a-layout-content>
      </a-layout>
      <!--<a-layout-footer>Footer</a-layout-footer>-->
    </a-layout>
</template>
<script>
import LeftTree from '@/components/LeftTree'
export default {
  components:{
    'leftTree':LeftTree

  },
  data() {
      return {
        
      };
    },
}
</script>
<style scoped>
.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer),
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}


.layout-demo :deep(.arco-layout-header),
.layout-demo :deep(.arco-layout-footer) {
  height: 64px;
  background-color: var(--color-primary-light-4);
}

.layout-demo :deep(.arco-layout-sider) {
  width: 206px;
  background-color: var(--color-primary-light-3);
  min-width: 150px;
  max-width: 500px;
  height: 200px;
}

.layout-demo :deep(.arco-layout-content) {
  background-color: rgb(var(--arcoblue-6));
}
</style>
