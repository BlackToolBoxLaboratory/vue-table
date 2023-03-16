<template>
  <table class="btb-vue-table-compare" :style="{ ...getStyle(['btb-vue-table-compare'], props.styleObj) }">
    <tbody class="compare_body" :style="{ ...getStyle(['compare_body'], props.styleObj) }">
      <template v-for="(head, headIndex) in props.headData" :key="head.id">
        <tr class="body_tr" :style="{ ...getStyle(['body_tr'], props.styleObj) }">
          <th :class="['tr_th', `th-${head.id}`]" :style="{ ...getStyle(['tr_th', `th-${head.id}`], props.styleObj) }"
            @click="clickTh(head)">
            <template v-if="slotList[`th-${head.id}`]">
              <slot :name="[`th-${head.id}`]" />
            </template>
            <template v-else>
              {{ head.name }}
            </template>
          </th>
          <template v-if="props.bodyData.length">
            <template v-for="entry in props.bodyData" :key="entry[identity]">
              <td :class="['tr_td', `td-${head.id}`]" :style="{ ...getStyle(['tr_td', `td-${head.id}`], props.styleObj) }"
                @click="clickTd(entry, head)">
                <template v-if="slotList[`td-${head.id}`]">
                  <slot :name="[`td-${head.id}`]" />
                </template>
                <template v-else>
                  {{ entry[head.id] }}
                </template>
              </td>
            </template>
          </template>
          <template v-if="!props.bodyData.length && headIndex === 0">
            <td :class="['tr_td', `td-empty`]" :style="{ ...getStyle(['tr_td', 'td-empty'], props.styleObj) }"
              :rowspan="props.headData.length">
              <template v-if="slotList['td-empty']">
                <slot :name="['td-empty']" />
              </template>
              <template v-else>
                {{ emptyText }}
              </template>
            </td>
          </template>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { TableHeadObj, TableDataObj, TableMode } from "../../types/index";

import { defineComponent, computed } from "vue";

import { getStyle } from "../utils/styleMethods";

export default defineComponent({
  name: "btb-vue-table-compare",
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
      default: 'compare'
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
.btb-vue-table-compare {
  width: 100%;
  border-collapse: collapse;

  .tr_th {
    background: #d3d3d3;
  }
}
</style>