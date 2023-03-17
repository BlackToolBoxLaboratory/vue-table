<template>
  <table class="btb-vue-table-list" :style="{ ...getStyle(['btb-vue-table'], props.styleObj) }">
    <btb-vue-table-list-head :headData="props.headData" :styleObj="props.styleObj" @clickTh="clickTh">
      <template v-for="name in slotList" #[name]>
        <slot :name="name" />
      </template>
    </btb-vue-table-list-head>
    <btb-vue-table-list-body :headData="props.headData" :bodyData="props.bodyData" :styleObj="props.styleObj"
      :identity="identity" :emptyText="emptyText" @clickTd="clickTd">
      <template v-for="name in slotList" #[name]>
        <slot :name="name" />
      </template>
    </btb-vue-table-list-body>
  </table>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { TableHeadObj, TableDataObj, TableMode } from "../types";

import { defineComponent, computed } from "vue";

import { getStyle } from "../utils/styleMethods";

export default defineComponent({
  name: "btb-vue-table-list",
  props: {
    headData: {
      type: Array as PropType<TableHeadObj[]>,
      default: function () {
        return [];
      },
    },
    bodyData: {
      type: Array as PropType<TableDataObj[]>,
      default: function () {
        return [];
      },
    },
    mode: {
      type: String as PropType<TableMode>,
      default: 'list'
    },
    identity: {
      type: String,
      default: 'id'
    },
    emptyText: {
      type: String,
      default: 'Empty'
    },
    styleObj: {
      type: Object,
      default: function () {
        return undefined;
      },
    },
  },
  emits: ["clickTh", "clickTd"],
  setup(props, { emit, slots }) {

    const slotList = computed(() => {
      return Object.keys(slots);
    });

    const clickTh = (head: TableHeadObj) => {
      emit("clickTh", head);
    };
    const clickTd = (entry: TableDataObj, head: TableHeadObj) => {
      emit("clickTd", entry, head);
    };

    return {
      getStyle,

      props,
      slotList,

      clickTh,
      clickTd
    }
  }
})
</script>

<style lang="scss">
.btb-vue-table-list {
  width: 100%;
  border-collapse: collapse;
}
</style>