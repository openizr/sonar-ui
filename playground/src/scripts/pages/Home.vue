<template>
  <div class="vgap-5">
    <main class="ui-page ui-block cols-3 hgap-3 vgap-5">
      <a
        href="/typography"
        class="cols-3"
      >TYPOGRAPHY</a>
      <br>
      <a
        href="/images"
        class="cols-3"
      >IMAGES</a>
      <br>
      <a
        href="/radios"
        class="cols-3"
      >RADIOS</a>
      <br>
      <a
        href="/buttons"
        class="cols-3"
      >BUTTONS</a>
      <br>
      <a
        href="/markdown"
        class="cols-3"
      >MARKDOWN</a>
      <br>
      <a
        href="/dropdowns"
        class="cols-3"
      >DROPDOWNS</a>
      <br>
      <a
        href="/textfields"
        class="cols-3"
      >TEXTFIELDS</a>
      <br>
      <a
        href="/textareas"
        class="cols-3"
      >TEXTAREAS</a>
      <br>
      <a
        href="/file-uploaders"
        class="cols-3"
      >FILE UPLOADERS</a>
      <br>
      <a
        href="/radios"
        class="cols-3"
      >RADIOS</a>
      <br>
      <a
        href="/checkboxes"
        class="cols-3"
      >CHECKBOXES</a>
      <br>
      <a
        href="/icons"
        class="cols-3"
      >ICONS</a>
    </main>
  </div>
</template>

<script lang="ts">
/**
 * Copyright (c) Matthieu Jabbour. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import Vue from 'vue';
import { Generic } from 'scripts/types';

interface Props {
  translate: (label: string) => string;
}

/**
 * Home page.
 */
export default Vue.extend<Generic, Generic, Generic, Props>({
  name: 'Home',
  components: {},
  props: {
    translate: {
      type: Function,
      required: true,
    },
  },
});
</script>
