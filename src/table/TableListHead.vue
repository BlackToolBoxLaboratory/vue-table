<template>
  <thead class="list_head" :style="{ ...getStyle(['list_head'], props.styleObj) }">
    <template v-if="props.headData.length">
      <tr class="head_tr" :style="{ ...getStyle(['head_tr'], props.styleObj) }">
        <template v-for="head in props.headData" :key="head.id">
          <th :class="['tr_th', `th-${head.id}`]"
            :style="{ ...getStyle(['tr_th', `th-${head.id}`], props.styleObj) }" @click="clickTh(head)">
            <template v-if="$slots[`th-${head.id}`]">
              <slot :name="`th-${head.id}`" :column="head"/>
            </template>
            <template v-else>
              {{ head.name }}
            </template>
          </th>
        </template>
      </tr>
    </template>
  </thead>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { TableHeadObj } from "../types";

import { defineComponent } from "vue";

import { getStyle } from "../utils/styleMethods";

export default defineComponent({
  name: "btb-vue-table-list-head",
  props: {
    headData: {
      type: Array as PropType<TableHeadObj[]>,
      default: function () {
        return [];
      },
    },
    styleObj: {
      type: Object,
      default: function () {
        return undefined;
      },
    },
  },
  emits: ["clickTh"],
  setup(props, { emit }) {
    const clickTh = (head: TableHeadObj) => {
      emit("clickTh", head);
    };

    return {
      getStyle,

      props,

      clickTh
    }
  }
})
</script>

<style lang="scss">
.btb-vue-table-list {
  .list_head {
    .tr_th {
      background: #d3d3d3;
    }
  }
}
</style>