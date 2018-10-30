import React from 'react';
import { Icon, Rate } from 'shineout';

const url = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
const FontAwesome = Icon(url, 'FontAwesome', 'fa');
const star = <FontAwesome name="star" />;

export const StarRate = Rate(star, star);