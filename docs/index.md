---
layout: home

hero:
  name: "NoteHub"
  text: "别在千页手册里单排了，这儿有活人。"
  tagline: "基于 Diátaxis 架构的赛博修理铺。拒绝纸上谈兵，专治底层协议死锁、MCU 漏电，以及面试官的无理取闹。"
  actions:
    - theme: brand
      text: 🧊 接入节点（咕噜咕噜）
      link: /microcontrollers/
    - theme: alt
      text: 🥊 开启八股模拟战
      link: /interview/
---

<script setup>
// 引入刚刚锻造的组件
import GeekHomeLayout from './.vitepress/components/HomeLayout.vue'
</script>

<GeekHomeLayout />