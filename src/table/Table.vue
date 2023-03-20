<template>
  <div class="btb-vue-table" :style="{ ...getStyle(['btb-vue-table'], props.styleObj) }">
    <template v-if="props.mode === 'list'">
      <btb-vue-table-list :="props" @clickTh="clickTh" @clickTd="clickTd">
        <template v-for="name in slotList" #[name]="slotProps">
          <slot :name="name" :="slotProps"/>
        </template>
      </btb-vue-table-list>
    </template>
    <template v-if="props.mode === 'info'">
      <btb-vue-table-info :="props" @clickTh="clickTh" @clickTd="clickTd">
        <template v-for="name in slotList" #[name]="slotProps">
          <slot :name="name" :="slotProps"/>
        </template>
      </btb-vue-table-info>
    </template>
    <template v-if="props.mode === 'compare'">
      <btb-vue-table-compare :="props" @clickTh="clickTh" @clickTd="clickTd">
        <template v-for="name in slotList" #[name]="slotProps">
          <slot :name="name" :="slotProps"/>
        </template>
      </btb-vue-table-compare>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { TableHeadObj, TableDataObj, TableMode } from "../types";

import { defineComponent, computed } from "vue";

import { getStyle } from "../utils/styleMethods";

export default defineComponent({
  name: "btb-vue-table",
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
.btb-vue-table {}
</style>