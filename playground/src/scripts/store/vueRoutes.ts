/**
 * Copyright (c) Matthieu Jabbour. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export default {
  '/': () => import('scripts/pages/Home.vue'),
  '/buttons': () => import('scripts/pages/Buttons.vue'),
  '/images': () => import('scripts/pages/Images.vue'),
  '/dropdowns': () => import('scripts/pages/Dropdowns.vue'),
  '/textfields': () => import('scripts/pages/Textfields.vue'),
  '/file-uploaders': () => import('scripts/pages/FileUploaders.vue'),
  '/textareas': () => import('scripts/pages/Textareas.vue'),
  '/radios': () => import('scripts/pages/Radios.vue'),
  '/checkboxes': () => import('scripts/pages/Checkboxes.vue'),
  '/typography': () => import('scripts/pages/Typography.vue'),
} as Record<string, unknown>;
