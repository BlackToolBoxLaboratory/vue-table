<template>
  <tbody class="list_body" :style="{ ...getStyle(['list_body'], props.styleObj) }">
    <template v-if="props.bodyData.length">
      <template v-for="(entry, entryIndex) in props.bodyData" :key="entry[identity]">
        <tr :class="['body_tr', `tr-${entryIndex}`]" :style="{ ...getStyle(['body_tr', `tr-${entryIndex}`], props.styleObj) }">
          <template v-for="head in props.headData" :key="head.id">
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
        </tr>
      </template>
    </template>
    <template v-else>
      <tr class="body_tr" :style="{ ...getStyle(['body_tr'], props.styleObj) }">
        <td :class="['tr_td', `td-empty`]" :style="{ ...getStyle(['tr_td', 'td-empty'], props.styleObj) }"
          :colspan="props.headData.length">
          <template v-if="slotList['td-empty']">
            <slot :name="['td-empty']" />
          </template>
          <template v-else>
            {{ emptyText }}
          </template>
        </td>
      </tr>
    </template>
  </tbody>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { TableHeadObj, TableDataObj } from "../types";

import { defineComponent, computed } from "vue";

import { getStyle } from "../utils/styleMethods";

export default defineComponent({
  name: "btb-vue-table-list-body",
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
  emits: ["clickTd"],
  setup(props, { emit, slots }) {
    const slotList = computed(() => {
      return Object.keys(slots);
    });

    const clickTd = (entry: TableDataObj, head: TableHeadObj) => {
      emit("clickTd", entry, head);
    };

    return {
      getStyle,

      props,
      slotList,

      clickTd
    }
  }
})
</script>

<style lang="scss">
.btb-vue-table-list {
  .td-empty {
    text-align: center;
  }
}
</style>