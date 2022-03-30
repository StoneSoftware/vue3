<template>
<div style="height:100%;">
  <a-tree
    :data="treeData"
    :default-expanded-keys="['0-0-0']"
    :default-selected-keys="['0-0-0', '0-0-1']"
    @select="onSelect"
  />
</div>
</template>
<script>
  export default {
    setup() {
      return {
        treeData,
        onSelect(newSelectedKeys, event) {
          console.error(newSelectedKeys + " ===" + event)
          if(newSelectedKeys==="开发指南") {
         this.$router.push({
           name: 'xxx',
           params: {
             key: 1
             } 
          })
          }else{
            this.$router.push({
           name: 'yyy',
           params: {
             key: 1
             } 
          })
          }
        },
      }
    }
  };

  const treeData = [
    {
      title: '开发指南',
      key: '开发指南',
      children: [
        {
          title: '快速上手',
          key: '0-0-0',
          disabled: false,
          children: [
            {
              title: 'Leaf',
              key: '0-0-0-0',
            },
            {
              title: 'Leaf',
              key: '0-0-0-1',
            }
          ]
        },
        {
          title: 'Branch 0-0-1',
          key: '0-0-1',
          children: [
            {
              title: 'Leaf',
              key: '0-0-1-0',
            },
          ]
        },
        {
          title: 'Branch 0-0-2',
          key: '0-0-2',
          children: [
            {
              title: 'Leaf',
              key: '0-0-1-1',
            },
          ]
        },
      ],
    },
  ];
</script>
