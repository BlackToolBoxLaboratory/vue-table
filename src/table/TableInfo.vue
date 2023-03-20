<template>
  <div class="btb-vue-table-info" :style="{ ...getStyle(['btb-vue-table'], props.styleObj) }">
    <template v-if="props.bodyData.length">
      <template v-for="(entry, entryIndex) in props.bodyData" :key="entry[identity]">
        <table :class="['info_table', `table-${entryIndex}`]" :style="{ ...getStyle(['info_table', `table-${entryIndex}`], props.styleObj) }">
          <tbody class="table_body" :style="{ ...getStyle(['table_body'], props.styleObj) }">
            <template v-for="head in props.headData" :key="head.id">
              <tr class="body_tr" :style="{ ...getStyle(['body_tr'], props.styleObj) }">
                <th :class="['tr_th', `th-${head.id}`]"
                  :style="{ ...getStyle(['tr_th', `th-${head.id}`], props.styleObj) }" @click="clickTh(head)">
                  <template v-if="$slots[`th-${head.id}`]">
                    <slot :name="[`th-${head.id}`]" :column="head"/>
                  </template>
                  <template v-else>
                    {{ head.name }}
                  </template>
                </th>
                <td :class="['tr_td', `td-${head.id}`]"
                  :style="{ ...getStyle(['tr_td', `td-${head.id}`], props.styleObj) }" @click="clickTd(entry, head)">
                  <template v-if="$slots[`td-${head.id}`]">
                    <slot :name="[`td-${head.id}`]" :column="head" :data="entry"/>
                  </template>
                  <template v-else>
                    {{ entry[head.id] }}
                  </template>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </template>
    </template>
    <template v-else>
      <div class="info_empty" :style="{ ...getStyle(['info_empty'], props.styleObj) }">
        <template v-if="$slots['info-empty']">
          <slot :name="['info-empty']" />
        </template>
        <template v-else>
          {{ emptyText }}
        </template>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import type { PropType } from "vue";
import type { TableHeadObj, TableDataObj, TableMode } from "../types";

import { defineComponent, computed } from "vue";

import { getStyle } from "../utils/styleMethods";

export default defineComponent({
  name: "btb-vue-table-info",
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
      default: 'info'
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
    const clickTh = (head: TableHeadObj) => {
      emit("clickTh", head);
    };
    const clickTd = (entry: TableDataObj, head: TableHeadObj) => {
      emit("clickTd", entry, head);
    };

    return {
      getStyle,

      props,

      clickTh,
      clickTd
    }
  }
})
</script>

<style lang="scss">
.btb-vue-table-info {
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .info_table {
    width: 100%;
    border-collapse: collapse;
    .tr_th {
      background: #d3d3d3;
      width: 50%;
    }
  
    &+.table_info {
      margin-top: 0.5rem;
    }
  }


  .info_empty {
    min-height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>