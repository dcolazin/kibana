/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the "Elastic License
 * 2.0", the "GNU Affero General Public License v3.0 only", and the "Server Side
 * Public License v 1"; you may not use this file except in compliance with, at
 * your election, the "Elastic License 2.0", the "GNU Affero General Public
 * License v3.0 only", or the "Server Side Public License, v 1".
 */

import React from 'react';
import { EuiIconProps } from '@elastic/eui';
import { colors } from './common_styles';
import { ChartIconWrapper } from './icon_simple_wrapper';

export const IconChartLine = (props: Omit<EuiIconProps, 'type'>) => (
  <ChartIconWrapper {...props}>
    <path
      d="M23.434 16.456c.211.553.406.982.58 1.277l.073.119c.038.058.072.105.101.141.52-.04 1.07-.248 2.13-.77l.235-.117C28.198 16.283 28.953 16 30 16v2c-.507 0-.988.146-1.89.571l-1.209.592C25.621 19.78 24.924 20 24 20l-.174-.005c-1.251-.076-1.805-1.036-2.994-4.993L22.93 15c.18.563.335 1.012.505 1.455zM6 1c1.269 0 1.966.69 3.492 2.939l.774 1.146.272.387.26.358C11.419 6.658 11.788 7 12 7c.466 0 .967-.252 1.99-.997l.891-.659.458-.325C16.424 4.272 17.093 4 18 4c1.377 0 1.925.863 3.168 4.999L19.07 9a26.766 26.766 0 00-.505-1.457c-.24-.631-.46-1.1-.652-1.395l-.051-.074-.045-.06c-.452.064-.988.375-2.007 1.13l-.691.512-.458.325C13.576 8.728 12.907 9 12 9c-1.269 0-1.966-.69-3.492-2.939l-.774-1.146-.272-.387-.26-.358C6.581 3.342 6.213 3 6 3c-.294 0-.885.651-2.017 2.33l-.491.731-.326.475C1.859 8.409 1.175 9 0 9V7c.294 0 .885-.651 2.017-2.33l.491-.731.326-.475C4.141 1.591 4.825 1 6 1z"
      className={colors.subdued}
    />
    <path
      d="M0 21c1.123 0 1.852-.477 3.295-1.885l.758-.75.345-.33C5.208 17.275 5.648 17 6 17c.466 0 .967.252 1.99.997l.891.659.458.325C10.424 19.728 11.093 20 12 20c1.325 0 1.996-.772 3.546-3.444l.593-1.028.385-.646C17.328 13.562 17.796 13 18 13h6c1.333 0 1.978-.795 3.452-3.676l.692-1.37.358-.69C29.333 5.7 29.831 5 30 5V3c-1.333 0-1.978.795-3.452 3.676l-.692 1.37-.358.69C24.667 10.3 24.169 11 24 11h-6c-1.325 0-1.996.772-3.546 3.444l-.593 1.028-.385.646C12.672 17.438 12.204 18 12 18c-.466 0-.967-.252-1.99-.997l-.891-.659-.458-.325C7.576 15.272 6.907 15 6 15c-1.123 0-1.852.477-3.295 1.885l-.758.75-.345.33C.792 18.725.352 19 0 19v2z"
      className={colors.accent}
    />
  </ChartIconWrapper>
);
